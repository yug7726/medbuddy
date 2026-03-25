import { createServer } from "node:http";

const PORT = 8787;

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(payload));
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

async function sendTwilioMessage({
  accountSid,
  authToken,
  fromNumber,
  messagingServiceSid,
  to,
  body,
}) {
  const form = new URLSearchParams();
  form.set("To", to);
  form.set("Body", body);

  if (messagingServiceSid) {
    form.set("MessagingServiceSid", messagingServiceSid);
  } else {
    form.set("From", fromNumber);
  }

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || "Twilio request failed");
  }

  return payload;
}

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method !== "POST" || request.url !== "/api/emergency") {
    sendJson(response, 404, { error: "Not found" });
    return;
  }

  try {
    const payload = await readBody(request);
    const {
      accountSid,
      authToken,
      fromNumber,
      messagingServiceSid,
      toNumbers = [],
      body,
    } = payload;

    if (!accountSid || !authToken || !body || !Array.isArray(toNumbers) || !toNumbers.length) {
      sendJson(response, 400, { error: "Missing Twilio credentials, message body, or recipients." });
      return;
    }

    if (!messagingServiceSid && !fromNumber) {
      sendJson(response, 400, { error: "Provide either a Twilio From number or a Messaging Service SID." });
      return;
    }

    const results = [];
    for (const to of toNumbers) {
      const result = await sendTwilioMessage({
        accountSid,
        authToken,
        fromNumber,
        messagingServiceSid,
        to,
        body,
      });
      results.push({ to, sid: result.sid, status: result.status });
    }

    sendJson(response, 200, { success: true, results });
  } catch (error) {
    sendJson(response, 500, { error: error instanceof Error ? error.message : "Unknown emergency server error" });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`MedBuddy emergency server running at http://127.0.0.1:${PORT}`);
});
