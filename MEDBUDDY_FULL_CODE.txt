# MedBuddy Full Code

Combined project source export.

## package.json

`$ext
{
  "name": "medbuddy-health-friend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "qrcode": "^1.5.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.30.0"
  },
  "devDependencies": {
    "@types/qrcode": "^1.5.6",
    "@types/react": "^18.2.79",
    "@types/react-dom": "^18.2.25",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}

```

## index.html

`$ext
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="MedBuddy - Your Health Friend. A multilingual prescription companion with reminders, emergency support, and privacy-first care flows."
    />
    <title>MedBuddy - Your Health Friend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## vite.config.ts

`$ext
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});

```

## tsconfig.json

`$ext
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": []
}

```

## src/main.tsx

`$ext
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProviders } from "./context/AppProviders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviders>
  </React.StrictMode>,
);

```

## src/App.tsx

`$ext
import { Routes, Route, Navigate } from "react-router-dom";
import { AssistantDock } from "./components/AssistantDock";
import { NotificationStack } from "./components/Feedback";
import { ReminderPrompt } from "./components/ReminderPrompt";
import { AppShell, BackgroundOrbs, GuestRoute, ProtectedRoute, ScrollToTop } from "./components/Layout";
import { ContactsPage } from "./pages/ContactsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DoctorReportPage } from "./pages/DoctorReportPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignupPage } from "./pages/SignupPage";

export default function App() {
  return (
    <>
      <BackgroundOrbs />
      <ScrollToTop />
      <NotificationStack />
      <ReminderPrompt />
      <AssistantDock />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <SignupPage />
            </GuestRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppShell>
                <DashboardPage />
              </AppShell>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <AppShell>
                <ContactsPage />
              </AppShell>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <AppShell>
                <SettingsPage />
              </AppShell>
            </ProtectedRoute>
          }
        />
        <Route path="/doctor-report/:reportId" element={<DoctorReportPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

```

## src/index.css

`$ext
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

:root {
  color-scheme: light;
  --bg: #f8fbff;
  --surface: rgba(255, 255, 255, 0.68);
  --surface-strong: rgba(255, 255, 255, 0.85);
  --stroke: rgba(106, 122, 160, 0.18);
  --ink: #22304d;
  --muted: #65708d;
  --lavender: #dcd5ff;
  --mint: #c8f2de;
  --peach: #ffd8ca;
  --sky: #cfe9ff;
  --warning: #ffe6c8;
  --success: #d7f4dd;
  --shadow: 0 24px 60px rgba(56, 72, 112, 0.15);
  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 16px;
  --radius-sm: 12px;
  --max-width: 1220px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 10% 10%, rgba(220, 213, 255, 0.72), transparent 28%),
    radial-gradient(circle at 85% 18%, rgba(200, 242, 222, 0.72), transparent 26%),
    radial-gradient(circle at 72% 78%, rgba(255, 216, 202, 0.72), transparent 28%),
    linear-gradient(180deg, #f9fdff 0%, #f4f8ff 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

#root {
  position: relative;
  min-height: 100vh;
}

.app-backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.ambient-shape {
  position: absolute;
  border-radius: 999px;
  filter: blur(10px);
  opacity: 0.65;
}

.ambient-a {
  width: 24rem;
  height: 24rem;
  left: -6rem;
  top: 4rem;
  background: rgba(220, 213, 255, 0.72);
}

.ambient-b {
  width: 20rem;
  height: 20rem;
  right: 6rem;
  top: 6rem;
  background: rgba(200, 242, 222, 0.82);
}

.ambient-c {
  width: 26rem;
  height: 26rem;
  right: -4rem;
  bottom: -2rem;
  background: rgba(255, 216, 202, 0.72);
}

.page-shell {
  position: relative;
  z-index: 1;
}

.page-wrap {
  width: min(var(--max-width), calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.5rem 0 4.5rem;
}

.public-page {
  display: grid;
  gap: 1.5rem;
}

.glass-card {
  background: var(--surface);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow);
  border-radius: var(--radius-xl);
}

.public-header,
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.public-header {
  padding: 1rem 0;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
}

.brand-mark {
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 1rem;
  display: inline-grid;
  place-items: center;
  font-family: "Fraunces", serif;
  font-size: 1.3rem;
  background: linear-gradient(135deg, var(--lavender), var(--mint));
  color: #31436d;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
}

.brand-link strong,
.topbar h1,
.hero-copy h1,
.section-intro h2,
.modal-card h3,
.auth-panel h1,
.result-card h2,
.contact-card h3 {
  font-family: "Fraunces", Georgia, serif;
}

.brand-link strong {
  display: block;
  font-size: 1rem;
}

.brand-link span,
.brand-link div span,
.public-actions,
.user-chip small,
.section-intro p,
.hero-copy p,
.stat-card span,
.contact-notes,
.toast-copy p,
small {
  color: var(--muted);
}

.public-actions,
.topbar-actions,
.button-row,
.inline-fields,
.inline-panel,
.hero-stats,
.pill-row,
.contact-actions,
.upload-actions,
.range-row,
.audio-controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.button,
.icon-button,
.info-pill,
.language-pill,
.time-pill {
  border: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 2.9rem;
  padding: 0.8rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
}

.button:hover,
.icon-button:hover,
.info-pill:hover,
.language-pill:hover,
.time-pill:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, #8fb8ff, #82e3c7);
  color: #17335d;
  box-shadow: 0 18px 40px rgba(88, 124, 185, 0.2);
}

.button.ghost,
.icon-button.soft,
.info-pill,
.language-pill,
.switch-row,
.user-chip,
.badge-pill,
.status-pill {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--stroke);
  color: var(--ink);
}

.button.full-width {
  width: 100%;
}

.icon-button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
}

.icon-button.subtle {
  background: transparent;
  color: var(--muted);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
  color: #6b77a3;
}

.hero-grid,
.auth-grid,
.contacts-grid,
.dashboard-grid,
.settings-grid {
  display: grid;
  gap: 1.25rem;
}

.hero-grid {
  grid-template-columns: 1.15fr 0.95fr;
  align-items: start;
  min-height: calc(100vh - 9rem);
}

.hero-copy,
.hero-side,
.auth-panel,
.dashboard-form-card,
.result-card,
.contacts-form-panel,
.settings-panel {
  padding: 1.5rem;
}

.hero-copy h1,
.auth-panel h1 {
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.02;
  margin: 0.55rem 0 1rem;
}

.hero-copy p,
.auth-panel p {
  font-size: 1.02rem;
  line-height: 1.75;
}

.hero-stats {
  margin-top: 1.5rem;
}

.stat-card {
  flex: 1 1 10rem;
  padding: 1rem 1.1rem;
}

.stat-card strong {
  font-size: 1.6rem;
}

.hero-side,
.results-column,
.contacts-list-panel {
  display: grid;
  gap: 1rem;
}

.emergency-spotlight {
  padding: 1.35rem;
}

.alert-soft {
  background: linear-gradient(180deg, rgba(255, 249, 239, 0.9), rgba(255, 255, 255, 0.75));
}

.badge-pill,
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 700;
}

.badge-pill.warning {
  background: rgba(255, 236, 208, 0.9);
}

.badge-pill.success,
.status-pill.speaking,
.timeline-step.done {
  background: rgba(215, 244, 221, 0.9);
}

.emergency-contacts,
.feature-list,
.contact-meta-list,
.modal-steps,
.toggle-stack,
.checklist-list,
.bullet-list,
.medicine-list {
  display: grid;
  gap: 0.85rem;
}

.emergency-contacts > div,
.feature-list > li,
.feature-list > div,
.contact-meta-list > div {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-grid.three-up {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.section-intro h2,
.result-card h2,
.contact-card h3 {
  margin: 0.45rem 0;
  font-size: 1.55rem;
}

.section-intro.compact h3 {
  margin: 0.3rem 0;
}

.auth-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
}

.auth-panel {
  min-height: 32rem;
}

.auth-form,
.contact-form {
  display: grid;
  gap: 1rem;
}

label,
.stacked-field,
.compact-field {
  display: grid;
  gap: 0.5rem;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid rgba(111, 126, 165, 0.2);
  background: rgba(255, 255, 255, 0.82);
  border-radius: 1.1rem;
  padding: 0.95rem 1rem;
  color: var(--ink);
  outline: none;
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus,
select:focus {
  border-color: rgba(104, 152, 224, 0.6);
  box-shadow: 0 0 0 4px rgba(143, 184, 255, 0.18);
}

.error-text {
  margin: 0;
  color: #be5774;
  font-size: 0.92rem;
}

.error-text.compact {
  margin-top: 0.5rem;
}

.auth-switch-copy {
  margin: 0.85rem 0 0;
}

.auth-switch-copy a {
  color: #406dc2;
  font-weight: 700;
}
.app-shell {
  position: relative;
  z-index: 1;
  width: min(1380px, calc(100% - 1.5rem));
  margin: 0 auto;
  padding: 1.1rem 0 5.5rem;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 1rem;
}

.sidebar,
.topbar,
.mobile-nav,
.filter-bar {
  padding: 1rem;
}

.sidebar {
  position: sticky;
  top: 1rem;
  align-self: start;
  display: grid;
  gap: 1rem;
}

.sidebar-nav,
.shell-content,
.settings-block,
.upload-preview-block,
.audio-player-card,
.contact-card-grid,
.settings-form,
.map-card {
  display: grid;
  gap: 1rem;
}

.nav-item,
.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 1.1rem;
  color: var(--muted);
  font-weight: 700;
}

.nav-item.active,
.mobile-nav-item.active,
.language-pill.active,
.info-pill.active {
  background: linear-gradient(135deg, rgba(207, 233, 255, 0.85), rgba(220, 213, 255, 0.85));
  color: #203d6f;
}

.shell-main {
  display: grid;
  gap: 1rem;
}

.topbar {
  display: flex;
}

.topbar h1 {
  margin: 0.3rem 0 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.user-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.85rem;
  border-radius: 1.1rem;
}

.user-chip > span {
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  background: linear-gradient(135deg, var(--lavender), var(--sky));
  font-weight: 800;
}

.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid var(--stroke);
  border-radius: 999px;
  padding: 0.35rem;
}

.language-icon {
  width: 1.8rem;
  height: 1.8rem;
  display: inline-grid;
  place-items: center;
  color: var(--muted);
}

.language-pill {
  min-width: 2.2rem;
  padding: 0.55rem 0.75rem;
  border-radius: 999px;
  font-weight: 800;
}

.language-switcher.compact .language-pill {
  min-width: 2rem;
  padding: 0.45rem 0.65rem;
}

.dashboard-grid {
  grid-template-columns: minmax(0, 0.93fr) minmax(0, 1.07fr);
  align-items: start;
}

.dashboard-form-card,
.settings-panel,
.contacts-form-panel,
.result-card {
  padding: 1.4rem;
}

.inline-panel {
  justify-content: space-between;
  align-items: end;
  padding: 1rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.52);
}

.dropzone {
  border: 1.5px dashed rgba(126, 154, 201, 0.45);
  border-radius: 1.4rem;
  padding: 1.5rem;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 0.55rem;
  background: rgba(255, 255, 255, 0.55);
}

.dropzone.drag-active {
  background: linear-gradient(135deg, rgba(207, 233, 255, 0.85), rgba(200, 242, 222, 0.72));
}

.upload-image-preview {
  width: 100%;
  border-radius: 1.2rem;
  max-height: 220px;
  object-fit: cover;
}

.photo-only-banner,
.ocr-preview,
.permission-chip {
  padding: 1rem 1.1rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid var(--stroke);
}

.ocr-preview p,
.info-note {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.file-chip {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--stroke);
}

.pdf-chip span,
.info-pill,
.time-pill {
  font-weight: 800;
}

.loading-panel {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
  text-align: center;
  padding: 1rem 0;
}

.loading-panel.inline {
  justify-items: start;
}

.loading-orbit {
  width: 4rem;
  height: 4rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.95), rgba(207, 233, 255, 0.38));
  border: 1px solid rgba(143, 184, 255, 0.28);
}

.loading-orbit.small {
  width: auto;
  height: auto;
  background: transparent;
  border: 0;
  display: flex;
  gap: 0.35rem;
}

.loading-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #80c6ff, #84dfc7);
  box-shadow: 0 8px 20px rgba(96, 150, 214, 0.25);
}

.waveform {
  display: flex;
  gap: 0.35rem;
  align-items: end;
  min-height: 3.8rem;
  padding: 0.4rem 0;
}

.wave-bar {
  width: 0.45rem;
  height: 2rem;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(132, 223, 199, 0.95), rgba(143, 184, 255, 0.95));
  transform-origin: bottom;
}

.audio-headline,
.spotlight-head,
.modal-header,
.contact-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.range-row {
  justify-content: space-between;
}

.range-row span {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
}

.range-row input {
  max-width: 230px;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.medicine-list,
.result-grid.two-col,
.settings-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.result-grid.two-col,
.settings-grid {
  display: grid;
  gap: 1rem;
}

.medicine-card,
.checklist-item,
.switch-row,
.timeline-step,
.time-pill {
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid var(--stroke);
  border-radius: 1.2rem;
  padding: 1rem;
}

.timing-row {
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: 0.9rem;
}

.time-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 0.9rem;
  color: var(--ink);
}

.medicine-card p,
.checklist-item label span,
.switch-row p,
.timeline-step span,
.contact-card p,
.contact-card span {
  margin: 0;
}

.bullet-list {
  margin: 0;
  padding-left: 1.2rem;
}

.bullet-list li + li {
  margin-top: 0.55rem;
}

.subheading {
  margin: 1rem 0 0.6rem;
}

.checklist-item,
.switch-row,
.timeline-step,
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.checklist-item.done {
  background: rgba(215, 244, 221, 0.74);
}

.checklist-item label {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
}

.checklist-item input,
.checkbox-row input {
  width: 1.1rem;
  height: 1.1rem;
  margin: 0;
}

.info-pill {
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
}

.contacts-grid {
  grid-template-columns: 0.92fr 1.08fr;
}

.contact-card-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.contact-card {
  padding: 1.2rem;
}

.contact-actions {
  margin-top: 1rem;
}

.contact-notes {
  line-height: 1.6;
}

.settings-grid {
  align-items: start;
}

.toggle-stack {
  margin-top: 1rem;
}

.switch-row {
  width: 100%;
  text-align: left;
  padding: 1rem 1.1rem;
}

.switch-row.active {
  background: linear-gradient(135deg, rgba(200, 242, 222, 0.82), rgba(207, 233, 255, 0.72));
}

.switch-thumb {
  width: 3rem;
  height: 1.7rem;
  border-radius: 999px;
  background: rgba(92, 106, 140, 0.18);
  position: relative;
}

.switch-thumb::after {
  content: "";
  position: absolute;
  top: 0.22rem;
  left: 0.22rem;
  width: 1.26rem;
  height: 1.26rem;
  border-radius: 999px;
  background: white;
  transition: transform 0.2s ease;
}

.switch-row.active .switch-thumb::after {
  transform: translateX(1.25rem);
}

.privacy-panel .feature-list {
  margin-top: 0.5rem;
}

.permission-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.map-card {
  padding: 1.35rem;
}

.hospital-map {
  width: 100%;
  min-height: 260px;
  border: 0;
  border-radius: 1.25rem;
}

.placeholder-card {
  min-height: 20rem;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(37, 47, 79, 0.25);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.modal-card {
  width: min(32rem, 100%);
  padding: 1.35rem;
}

.modal-body,
.success-pane {
  display: grid;
  gap: 1rem;
}

.modal-steps.vertical {
  gap: 0.7rem;
}

.success-pane {
  justify-items: center;
  text-align: center;
}

.success-badge {
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(215, 244, 221, 0.95), rgba(207, 233, 255, 0.9));
}

.toast-stack {
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 40;
  display: grid;
  gap: 0.75rem;
  width: min(22rem, calc(100vw - 2rem));
}

.toast {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.75rem;
  padding: 0.95rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow);
}

.toast-success {
  border-color: rgba(111, 188, 137, 0.36);
}

.toast-warning {
  border-color: rgba(224, 163, 91, 0.32);
}

.toast-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  background: rgba(220, 213, 255, 0.55);
}

.toast-copy strong {
  display: block;
  margin-bottom: 0.2rem;
}

.empty-card {
  padding: 2rem;
  text-align: center;
  justify-items: center;
}

.button-group-soft {
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
}

.space-between {
  justify-content: space-between;
}

.end {
  justify-content: flex-end;
}

.compact-list {
  margin-top: 0.75rem;
}

.field-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.mobile-nav {
  display: none;
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  z-index: 20;
  width: min(44rem, calc(100% - 1rem));
  justify-content: space-between;
}

.mobile-nav-item {
  flex: 1;
  justify-content: center;
  font-size: 0.78rem;
}

.loading-card {
  min-height: 15rem;
  display: grid;
  place-items: center;
}

.audio-player-card {
  padding: 1.25rem;
}

.status-pill.error {
  background: rgba(255, 226, 235, 0.9);
  color: #aa4b6f;
}

.status-pill.idle,
.status-pill.paused {
  color: var(--muted);
}

.assistant-fab {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 45;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1.2rem;
  background: linear-gradient(135deg, #8fb8ff, #82e3c7);
  color: #17335d;
  font-weight: 800;
  box-shadow: 0 18px 40px rgba(88, 124, 185, 0.24);
}

.assistant-shell {
  position: fixed;
  right: 1rem;
  bottom: 5.2rem;
  z-index: 45;
  width: min(25rem, calc(100vw - 1.5rem));
}

.assistant-card,
.assistant-messages,
.assistant-form,
.assistant-actions {
  display: grid;
  gap: 0.9rem;
}

.assistant-card {
  padding: 1rem;
}

.assistant-head,
.assistant-language-row,
.assistant-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.assistant-head {
  justify-content: space-between;
}

.assistant-head h3 {
  margin: 0.25rem 0 0;
  font-family: "Fraunces", Georgia, serif;
}

.assistant-messages {
  max-height: 20rem;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.assistant-bubble {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.85rem 0.95rem;
  border-radius: 1rem;
  line-height: 1.6;
}

.assistant-bubble.assistant {
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid var(--stroke);
}

.assistant-bubble.user {
  background: linear-gradient(135deg, rgba(207, 233, 255, 0.85), rgba(220, 213, 255, 0.85));
  justify-self: end;
}

.assistant-form {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
}

.assistant-form input {
  min-width: 0;
}

.assistant-actions {
  display: flex;
}

.icon-button.soft.listening {
  background: rgba(255, 236, 208, 0.92);
}

.reminder-modal,
.reminder-hero {
  display: grid;
  gap: 1rem;
}

.reminder-hero {
  grid-template-columns: auto 1fr;
  align-items: start;
}

.reminder-hero p,
.taken-check-row span {
  margin: 0;
}

.taken-check-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--stroke);
}

.qr-report-panel {
  display: grid;
  gap: 1rem;
  justify-items: center;
  text-align: center;
}

.qr-code-image {
  width: min(220px, 100%);
  border-radius: 1.1rem;
  border: 1px solid var(--stroke);
  background: white;
  padding: 0.75rem;
}

@media (max-width: 1100px) {
  .hero-grid,
  .dashboard-grid,
  .contacts-grid,
  .settings-grid,
  .auth-grid,
  .feature-grid.three-up,
  .result-grid.two-col,
  .medicine-list,
  .contact-card-grid {
    grid-template-columns: 1fr;
  }

  .app-shell {
    grid-template-columns: 1fr;
    width: min(var(--max-width), calc(100% - 1rem));
  }

  .sidebar {
    display: none;
  }

  .mobile-nav {
    display: flex;
  }
}

@media (max-width: 720px) {
  .page-wrap,
  .app-shell {
    width: min(100%, calc(100% - 1rem));
  }

  .public-header,
  .topbar,
  .audio-controls,
  .range-row,
  .contact-actions,
  .button-row,
  .inline-panel {
    flex-direction: column;
    align-items: stretch;
  }

  .public-actions,
  .topbar-actions {
    width: 100%;
    justify-content: space-between;
  }

  .hero-copy,
  .hero-side,
  .dashboard-form-card,
  .result-card,
  .contacts-form-panel,
  .settings-panel,
  .auth-panel {
    padding: 1.15rem;
  }

  .hero-copy h1,
  .auth-panel h1 {
    font-size: 2.35rem;
  }

  .toast-stack {
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
  }

  .range-row input {
    max-width: none;
  }

  .mobile-nav {
    padding: 0.7rem;
  }

  .assistant-shell {
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
  }

  .assistant-fab {
    right: 0.75rem;
    bottom: 5.75rem;
  }
}

```

## src/types.ts

`$ext
export type Language = "en" | "hi" | "gu";

export type ContactType = "doctor" | "family";

export type AnalysisKind = "infection" | "diabetes" | "bloodPressure";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  age?: string;
}

export interface StoredUser extends SessionUser {
  password: string;
}

export interface Contact {
  id: string;
  type: ContactType;
  name: string;
  relation: string;
  phone: string;
  specialty?: string;
  notes?: string;
  isPrimary: boolean;
}

export interface AppSettings {
  masterVolume: number;
  remindersEnabled: boolean;
  emergencyOptIn: boolean;
  privacyMode: boolean;
  browserNotifications: boolean;
  verifiedPhoneNumber: string;
  otpVerified: boolean;
}

export interface MedicineTiming {
  id: string;
  name: string;
  timing: string;
  purpose: string;
  scheduleTimes: string[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  reminderText: string;
}

export interface AnalysisResult {
  diagnosis: string;
  summary: string;
  medicines: MedicineTiming[];
  sideEffects: string[];
  warningSigns: string[];
  checklist: ChecklistItem[];
  followUp: string[];
  voiceText: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  tone?: "success" | "info" | "warning" | "error";
}

export interface ReminderSchedule {
  id: string;
  title: string;
  description: string;
  scheduledFor: number;
  createdAt: number;
  delivered: boolean;
  acknowledged: boolean;
  source: "medicine" | "checklist" | "hydration" | "system";
}

export interface DoctorReport {
  id: string;
  language: Language;
  createdAt: number;
  prescriptionText: string;
  analysis: AnalysisResult;
}

export interface MedicineStock {
  id: string;
  name: string;
  count: number;
  dailyUse: number;
  reorderLevel: number;
  lastUpdatedOn: string;
  lowStockNotified: boolean;
}

```

## src/context/AppProviders.tsx

`$ext
import {
  Context,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnalysisResult, AppSettings, Contact, DoctorReport, Language, MedicineStock, ReminderSchedule, SessionUser, StoredUser, ToastMessage } from "../types";
import { TranslationKey, defaultContacts, translations } from "../data/content";

const LANGUAGE_KEY = "medbuddy-language";
const USERS_KEY = "medbuddy-users";
const SESSION_KEY = "medbuddy-session";
const CONTACTS_KEY = "medbuddy-contacts";
const SETTINGS_KEY = "medbuddy-settings";
const REMINDERS_KEY = "medbuddy-reminders";
const REPORTS_KEY = "medbuddy-reports";
const STOCK_KEY = "medbuddy-stock";

const defaultSettings: AppSettings = {
  masterVolume: 0.88,
  remindersEnabled: true,
  emergencyOptIn: true,
  privacyMode: true,
  browserNotifications: false,
  verifiedPhoneNumber: "",
  otpVerified: false,
};

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

function persistStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

function createId(prefix: string) {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

type AuthContextValue = {
  user: SessionUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (payload: { name: string; email: string; password: string; age?: string }) => Promise<void>;
  logout: () => void;
};

type NotificationContextValue = {
  toasts: ToastMessage[];
  notify: (payload: Omit<ToastMessage, "id">) => void;
  dismiss: (id: string) => void;
};

type AppDataContextValue = {
  contacts: Contact[];
  settings: AppSettings;
  reminders: ReminderSchedule[];
  activeReminder: ReminderSchedule | null;
  latestAnalysis: AnalysisResult | null;
  reports: DoctorReport[];
  medicineStocks: MedicineStock[];
  addContact: (contact: Omit<Contact, "id">) => void;
  updateContact: (id: string, contact: Omit<Contact, "id">) => void;
  deleteContact: (id: string) => void;
  setPrimaryContact: (id: string) => void;
  updateSettings: (patch: Partial<AppSettings>) => void;
  scheduleReminder: (reminder: Omit<ReminderSchedule, "id" | "createdAt" | "delivered" | "acknowledged">) => ReminderSchedule;
  dismissReminder: (id: string) => void;
  snoozeReminder: (id: string, minutes?: number) => void;
  confirmReminderTaken: (id: string) => void;
  setLatestAnalysis: (analysis: AnalysisResult | null) => void;
  saveDoctorReport: (payload: { language: Language; prescriptionText: string; analysis: AnalysisResult }) => DoctorReport;
  restockMedicine: (id: string, quantity?: number) => void;
  syncMedicineStockFromAnalysis: (analysis: AnalysisResult) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);
const AppDataContext = createContext<AppDataContextValue | undefined>(undefined);

export function AppProviders({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(() => readStorage(LANGUAGE_KEY, "en"));
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(() => readStorage(SESSION_KEY, null));
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [contacts, setContacts] = useState<Contact[]>(() => readStorage(CONTACTS_KEY, defaultContacts));
  const [settings, setSettings] = useState<AppSettings>(() => readStorage(SETTINGS_KEY, defaultSettings));
  const [reminders, setReminders] = useState<ReminderSchedule[]>(() => readStorage(REMINDERS_KEY, []));
  const [activeReminder, setActiveReminder] = useState<ReminderSchedule | null>(null);
  const [latestAnalysis, setLatestAnalysis] = useState<AnalysisResult | null>(null);
  const [reports, setReports] = useState<DoctorReport[]>(() => readStorage(REPORTS_KEY, []));
  const [medicineStocks, setMedicineStocks] = useState<MedicineStock[]>(() => readStorage(STOCK_KEY, []));
  const reminderTimers = useRef<number[]>([]);

  useEffect(() => {
    persistStorage(LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    persistStorage(SESSION_KEY, sessionUser);
  }, [sessionUser]);

  useEffect(() => {
    persistStorage(CONTACTS_KEY, contacts);
  }, [contacts]);

  useEffect(() => {
    persistStorage(SETTINGS_KEY, settings);
  }, [settings]);

  useEffect(() => {
    persistStorage(REMINDERS_KEY, reminders);
  }, [reminders]);

  useEffect(() => {
    persistStorage(REPORTS_KEY, reports);
  }, [reports]);

  useEffect(() => {
    persistStorage(STOCK_KEY, medicineStocks);
  }, [medicineStocks]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[language][key] ?? translations.en[key];
    },
    [language],
  );

  const login = useCallback(async (email: string, password: string) => {
    const users = readStorage<StoredUser[]>(USERS_KEY, []);
    const found = users.find((candidate) => candidate.email.toLowerCase() === email.toLowerCase() && candidate.password === password);
    if (!found) {
      throw new Error("login-failed");
    }

    setSessionUser({
      id: found.id,
      name: found.name,
      email: found.email,
      age: found.age,
    });
  }, []);

  const signup = useCallback(async (payload: { name: string; email: string; password: string; age?: string }) => {
    const users = readStorage<StoredUser[]>(USERS_KEY, []);
    const exists = users.some((candidate) => candidate.email.toLowerCase() === payload.email.toLowerCase());

    if (exists) {
      throw new Error("signup-exists");
    }

    const nextUser: StoredUser = {
      id: createId("user"),
      name: payload.name,
      email: payload.email,
      password: payload.password,
      age: payload.age,
    };

    const nextUsers = [...users, nextUser];
    persistStorage(USERS_KEY, nextUsers);

    setSessionUser({
      id: nextUser.id,
      name: nextUser.name,
      email: nextUser.email,
      age: nextUser.age,
    });
  }, []);

  const logout = useCallback(() => {
    setSessionUser(null);
  }, []);

  const notify = useCallback((payload: Omit<ToastMessage, "id">) => {
    const toast = { id: createId("toast"), ...payload };
    setToasts((current) => [...current, toast]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== toast.id));
    }, 4200);
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setMedicineStocks((current) =>
      current.map((stock) => {
        if (stock.lastUpdatedOn === today) {
          return stock;
        }

        const lastDate = new Date(`${stock.lastUpdatedOn}T00:00:00`);
        const todayDate = new Date(`${today}T00:00:00`);
        const dayDiff = Math.max(1, Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)));
        const nextCount = Math.max(stock.count - stock.dailyUse * dayDiff, 0);
        return { ...stock, count: nextCount, lastUpdatedOn: today };
      }),
    );
  }, []);

  useEffect(() => {
    medicineStocks.forEach((stock) => {
      if (stock.count <= stock.reorderLevel && !stock.lowStockNotified) {
        notify({
          title: `Low stock: ${stock.name}`,
          description: `${stock.count} doses left. Please reorder soon.`,
          tone: "warning",
        });
        setMedicineStocks((current) =>
          current.map((entry) => (entry.id === stock.id ? { ...entry, lowStockNotified: true } : entry)),
        );
      }
    });
  }, [medicineStocks, notify]);

  useEffect(() => {
    reminderTimers.current.forEach((timer) => window.clearTimeout(timer));
    reminderTimers.current = [];

    if (typeof window === "undefined") {
      return;
    }

    const now = Date.now();
    const staleThreshold = now - 10 * 60 * 1000;

    reminders.forEach((reminder) => {
      if (reminder.delivered) {
        return;
      }

      if (reminder.scheduledFor <= staleThreshold) {
        setReminders((current) => current.map((entry) => (entry.id === reminder.id ? { ...entry, delivered: true } : entry)));
        return;
      }

      const fireDelay = Math.max(reminder.scheduledFor - now, 0);
      const timer = window.setTimeout(() => {
        notify({
          title: reminder.title,
          description: reminder.description,
          tone: reminder.source === "medicine" ? "success" : "info",
        });

        if (settings.browserNotifications && "Notification" in window && Notification.permission === "granted") {
          new Notification(reminder.title, { body: reminder.description });
        }

        setReminders((current) => current.map((entry) => (entry.id === reminder.id ? { ...entry, delivered: true } : entry)));
        setActiveReminder({ ...reminder, delivered: true });
      }, fireDelay);

      reminderTimers.current.push(timer);
    });

    return () => {
      reminderTimers.current.forEach((timer) => window.clearTimeout(timer));
      reminderTimers.current = [];
    };
  }, [notify, reminders, settings.browserNotifications]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((item) => item.id !== id));
  }, []);

  const addContact = useCallback((contact: Omit<Contact, "id">) => {
    setContacts((current) => {
      const normalized = contact.isPrimary
        ? current.map((entry) => (entry.type === contact.type ? { ...entry, isPrimary: false } : entry))
        : current;

      return [...normalized, { ...contact, id: createId("contact") }];
    });
  }, []);

  const updateContact = useCallback((id: string, contact: Omit<Contact, "id">) => {
    setContacts((current) => {
      const normalized = contact.isPrimary
        ? current.map((entry) => (entry.type === contact.type ? { ...entry, isPrimary: false } : entry))
        : current;

      return normalized.map((entry) => (entry.id === id ? { ...contact, id } : entry));
    });
  }, []);

  const deleteContact = useCallback((id: string) => {
    setContacts((current) => current.filter((entry) => entry.id !== id));
  }, []);

  const setPrimaryContact = useCallback((id: string) => {
    setContacts((current) => {
      const selected = current.find((entry) => entry.id === id);
      if (!selected) {
        return current;
      }

      return current.map((entry) => {
        if (entry.type !== selected.type) {
          return entry;
        }

        return {
          ...entry,
          isPrimary: entry.id === id,
        };
      });
    });
  }, []);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setSettings((current) => ({ ...current, ...patch }));
  }, []);

  const scheduleReminder = useCallback((reminder: Omit<ReminderSchedule, "id" | "createdAt" | "delivered" | "acknowledged">) => {
    const nextReminder: ReminderSchedule = {
      ...reminder,
      id: createId("reminder"),
      createdAt: Date.now(),
      delivered: false,
      acknowledged: false,
    };

    setReminders((current) => {
      const duplicate = current.find(
        (entry) =>
          !entry.delivered &&
          entry.title === nextReminder.title &&
          entry.description === nextReminder.description &&
          entry.scheduledFor === nextReminder.scheduledFor,
      );

      return duplicate ? current : [...current, nextReminder];
    });

    return nextReminder;
  }, []);

  const dismissReminder = useCallback((id: string) => {
    setReminders((current) => current.filter((entry) => entry.id !== id));
    setActiveReminder((current) => (current?.id === id ? null : current));
  }, []);

  const snoozeReminder = useCallback((id: string, minutes = 10) => {
    const nextTime = Date.now() + minutes * 60 * 1000;
    setReminders((current) =>
      current.map((entry) =>
        entry.id === id
          ? { ...entry, delivered: false, acknowledged: false, scheduledFor: nextTime }
          : entry,
      ),
    );
    setActiveReminder(null);
  }, []);

  const confirmReminderTaken = useCallback((id: string) => {
    setReminders((current) =>
      current.map((entry) =>
        entry.id === id
          ? { ...entry, delivered: true, acknowledged: true }
          : entry,
      ),
    );
    setActiveReminder((current) => (current?.id === id ? null : current));
  }, []);

  const syncMedicineStockFromAnalysis = useCallback((analysis: AnalysisResult) => {
    const today = new Date().toISOString().slice(0, 10);
    setMedicineStocks((current) => {
      const next = [...current];
      analysis.medicines.forEach((medicine) => {
        const existing = next.find((entry) => entry.name === medicine.name);
        if (existing) {
          existing.dailyUse = medicine.scheduleTimes.length || 1;
          existing.lastUpdatedOn = today;
          return;
        }

        next.push({
          id: createId("stock"),
          name: medicine.name,
          count: 30,
          dailyUse: medicine.scheduleTimes.length || 1,
          reorderLevel: 3,
          lastUpdatedOn: today,
          lowStockNotified: false,
        });
      });
      return next;
    });
  }, []);

  const saveDoctorReport = useCallback((payload: { language: Language; prescriptionText: string; analysis: AnalysisResult }) => {
    const report: DoctorReport = {
      id: createId("report"),
      language: payload.language,
      createdAt: Date.now(),
      prescriptionText: payload.prescriptionText,
      analysis: payload.analysis,
    };
    setReports((current) => [report, ...current]);
    return report;
  }, []);

  const restockMedicine = useCallback((id: string, quantity = 30) => {
    const today = new Date().toISOString().slice(0, 10);
    setMedicineStocks((current) =>
      current.map((entry) =>
        entry.id === id
          ? { ...entry, count: entry.count + quantity, lastUpdatedOn: today, lowStockNotified: false }
          : entry,
      ),
    );
  }, []);

  const languageValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );

  const authValue = useMemo(
    () => ({
      user: sessionUser,
      login,
      signup,
      logout,
    }),
    [sessionUser, login, signup, logout],
  );

  const notificationValue = useMemo(
    () => ({
      toasts,
      notify,
      dismiss,
    }),
    [toasts, notify, dismiss],
  );

  const dataValue = useMemo(
    () => ({
      contacts,
      settings,
      reminders,
      activeReminder,
      latestAnalysis,
      reports,
      medicineStocks,
      addContact,
      updateContact,
      deleteContact,
      setPrimaryContact,
      updateSettings,
      scheduleReminder,
      dismissReminder,
      snoozeReminder,
      confirmReminderTaken,
      setLatestAnalysis,
      saveDoctorReport,
      restockMedicine,
      syncMedicineStockFromAnalysis,
    }),
    [contacts, settings, reminders, activeReminder, latestAnalysis, reports, medicineStocks, addContact, updateContact, deleteContact, setPrimaryContact, updateSettings, scheduleReminder, dismissReminder, snoozeReminder, confirmReminderTaken, setLatestAnalysis, saveDoctorReport, restockMedicine, syncMedicineStockFromAnalysis],
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      <AuthContext.Provider value={authValue}>
        <NotificationContext.Provider value={notificationValue}>
          <AppDataContext.Provider value={dataValue}>{children}</AppDataContext.Provider>
        </NotificationContext.Provider>
      </AuthContext.Provider>
    </LanguageContext.Provider>
  );
}

function useSafeContext<T>(context: Context<T | undefined>, label: string): T {
  const value = useContext(context);
  if (!value) {
    throw new Error(`${label} must be used within AppProviders`);
  }
  return value;
}

export function useLanguage() {
  return useSafeContext(LanguageContext, "useLanguage");
}

export function useAuth() {
  return useSafeContext(AuthContext, "useAuth");
}

export function useNotifications() {
  return useSafeContext(NotificationContext, "useNotifications");
}

export function useAppData() {
  return useSafeContext(AppDataContext, "useAppData");
}

```

## src/data/content.ts

`$ext
import { AnalysisKind, AnalysisResult, Contact, Language } from "../types";

export const languageMeta = {
  en: { label: "English", locale: "en-IN" },
  hi: { label: "हिंदी", locale: "hi-IN" },
  gu: { label: "ગુજરાતી", locale: "gu-IN" },
} as const;

export const translations = {
  en: {
    brandTitle: "MedBuddy",
    brandSubtitle: "Your Health Friend",
    navHome: "Home",
    navDashboard: "Dashboard",
    navContacts: "Doctors & Family",
    navSettings: "Settings",
    navLogin: "Login",
    navSignup: "Sign up",
    navLogout: "Log out",
    homeEyebrow: "Calm care guidance for real families",
    homeTitle: "Understand prescriptions, stay on time, and reach help fast.",
    homeBody:
      "MedBuddy turns medical instructions into simple language, gentle reminders, and one-tap emergency support across English, Hindi, and Gujarati.",
    homePrimaryCta: "Open dashboard",
    homeSecondaryCta: "Create account",
    homeWellnessTitle: "Voice-first care guidance",
    homeWellnessBody:
      "Listen to instructions in your preferred language with clear playback controls and adjustable volume.",
    emergencyBadge: "Emergency alert",
    emergencyTitle: "Need urgent help?",
    emergencyBody:
      "Send a calm emergency alert that simulates an SMS to family and a call to your doctor after one confirmation.",
    emergencyButton: "Send emergency alert",
    emergencyModalTitle: "Confirm emergency alert",
    emergencyModalBody:
      "We will simulate notifying your primary family contact and doctor. You stay in control and can cancel before we start.",
    emergencyConfirm: "Confirm alert",
    emergencyCancel: "Cancel",
    emergencySmsStep: "Sending SMS to family contact",
    emergencyDoctorStep: "Calling doctor",
    emergencySuccess: "Your family and doctor are being notified",
    trustTitle: "Designed for trust, not panic",
    trustBody:
      "Pastel visuals, clear actions, and privacy-first defaults help people act quickly without feeling overwhelmed.",
    trustPointOne: "Language stays consistent across pages and voice.",
    trustPointTwo: "Emergency flows are user-controlled.",
    trustPointThree: "Stored locally in your browser for privacy.",
    authLoginTitle: "Welcome back",
    authLoginBody: "Sign in to continue your care plan, reminders, and saved contacts.",
    authSignupTitle: "Create your MedBuddy account",
    authSignupBody:
      "Set up your profile to unlock multilingual prescription help, emergency alerts, and follow-up reminders.",
    nameLabel: "Full name",
    emailLabel: "Email address",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm password",
    ageLabel: "Age",
    loginButton: "Log in",
    signupButton: "Create account",
    authSwitchLogin: "Already have an account?",
    authSwitchSignup: "Need a new account?",
    authInvalidEmail: "Please enter a valid email address.",
    authPasswordShort: "Password must be at least 6 characters.",
    authPasswordMismatch: "Passwords do not match.",
    authRequired: "Please fill in all required fields.",
    authLoginError: "Email or password does not match our records.",
    authSignupExists: "An account with this email already exists.",
    authSuccess: "You are signed in and ready to go.",
    dashboardGreeting: "Care dashboard",
    dashboardTitle: "Understand your prescription with confidence",
    dashboardBody:
      "Paste a prescription or upload a file. MedBuddy simulates analysis, simplifies the plan, and prepares reminders you can trust.",
    languageLabel: "Language",
    prescriptionLabel: "Prescription notes",
    prescriptionPlaceholder:
      "Paste the prescription here. Example: Tab Paracetamol 650 mg SOS for fever, Azithromycin 500 mg once daily after food for 3 days.",
    analyzeButton: "Understand prescription",
    analyzingLabel: "Understanding your prescription...",
    uploadTitle: "Upload prescription",
    uploadBody: "Drag and drop JPG, PNG, or PDF files to simulate OCR and auto-fill the prescription box.",
    uploadIdle: "Drop your file here or browse",
    uploadActive: "Release to upload",
    uploadReading: "Reading prescription from image...",
    uploadUnsupported: "Unsupported file. Please upload JPG, PNG, or PDF.",
    uploadGeneric: "Upload failed. Please retry.",
    uploadRetry: "Retry",
    uploadRemove: "Remove",
    uploadChange: "Change",
    uploadSuccess: "Prescription text extracted and added to the form.",
    resultSummary: "Quick summary",
    resultDiagnosis: "Likely diagnosis",
    resultMedicines: "Medicines and timing",
    resultSideEffects: "Possible side effects",
    resultWarnings: "Warning signs",
    resultChecklist: "Follow-up checklist",
    resultFollowUp: "Next steps",
    resultVoice: "Listen in your language",
    reminderDisabled: "Enable reminders in Settings to schedule notifications.",
    reminderScheduledTitle: "Reminder scheduled",
    reminderScheduledBody: "We will pop up a care reminder shortly.",
    checklistDone: "Checklist updated",
    notificationMedicine: "Take medicine at 8 PM",
    notificationWater: "Drink water reminder",
    contactsTitle: "Doctors and family contacts",
    contactsBody:
      "Keep the people who support your care easy to reach. Add, edit, remove, or mark a primary contact anytime.",
    addContactTitle: "Add contact",
    editContactTitle: "Edit contact",
    contactTypeLabel: "Contact type",
    doctorLabel: "Doctor",
    familyLabel: "Family",
    relationLabel: "Relation / role",
    phoneLabel: "Phone number",
    specialtyLabel: "Specialty",
    notesLabel: "Notes",
    primaryLabel: "Primary contact",
    saveContact: "Save contact",
    updateContact: "Update contact",
    cancelEdit: "Cancel edit",
    contactSaved: "Contact saved successfully.",
    contactDeleted: "Contact deleted.",
    primarySaved: "Primary contact updated.",
    noContacts: "No contacts yet. Add your first doctor or family member.",
    filterAll: "All",
    filterDoctors: "Doctors",
    filterFamily: "Family",
    settingsTitle: "Personal settings",
    settingsBody:
      "Adjust your language, reminder behavior, emergency preferences, and audio comfort from one place.",
    settingsVolume: "Master volume",
    settingsReminders: "Medication reminders",
    settingsEmergency: "Emergency alert access",
    settingsPrivacy: "Privacy-first mode",
    settingsPreviewTitle: "Audio preview",
    settingsPreviewBody:
      "This preview reads out a short health note using the selected language and voice.",
    settingsPrivacyTitle: "Trust and privacy",
    settingsPrivacyBody:
      "MedBuddy stores data locally in this demo, avoids unnecessary collection, and always reminds users that it is not a replacement for licensed medical advice.",
    settingsPreviewReminder: "Preview reminder toast",
    disclaimer: "MedBuddy supports understanding and planning. It is not a replacement for doctors or emergency services.",
    audioUnavailable: "Audio not available, please try again",
    playLabel: "Play",
    pauseLabel: "Pause",
    replayLabel: "Replay",
    volumeLabel: "Volume",
    ageHelper: "Age helps tailor the summary and follow-up advice.",
    footerNote: "Built for clarity, empathy, and real-world health moments.",
  },
  hi: {
    brandTitle: "MedBuddy",
    brandSubtitle: "आपका हेल्थ फ्रेंड",
    navHome: "होम",
    navDashboard: "डैशबोर्ड",
    navContacts: "डॉक्टर और परिवार",
    navSettings: "सेटिंग्स",
    navLogin: "लॉगिन",
    navSignup: "साइन अप",
    navLogout: "लॉग आउट",
    homeEyebrow: "परिवारों के लिए शांत और आसान देखभाल",
    homeTitle: "प्रिस्क्रिप्शन समझें, समय पर रहें, और मदद तक जल्दी पहुंचें।",
    homeBody:
      "MedBuddy अंग्रेज़ी, हिंदी और गुजराती में मेडिकल निर्देशों को सरल भाषा, हल्के रिमाइंडर और एक-टैप इमरजेंसी सपोर्ट में बदलता है।",
    homePrimaryCta: "डैशबोर्ड खोलें",
    homeSecondaryCta: "अकाउंट बनाएं",
    homeWellnessTitle: "आवाज़ के साथ देखभाल",
    homeWellnessBody:
      "अपनी पसंदीदा भाषा में साफ़ प्लेबैक कंट्रोल और एडजस्टेबल वॉल्यूम के साथ निर्देश सुनें।",
    emergencyBadge: "इमरजेंसी अलर्ट",
    emergencyTitle: "तुरंत मदद चाहिए?",
    emergencyBody:
      "एक कन्फर्मेशन के बाद परिवार को SMS और डॉक्टर को कॉल का शांत सिमुलेशन भेजें।",
    emergencyButton: "इमरजेंसी अलर्ट भेजें",
    emergencyModalTitle: "इमरजेंसी अलर्ट की पुष्टि करें",
    emergencyModalBody:
      "हम आपके प्राइमरी परिवार संपर्क और डॉक्टर को सूचित करने का सिमुलेशन करेंगे। शुरुआत से पहले आप इसे रद्द कर सकते हैं।",
    emergencyConfirm: "अलर्ट कन्फर्म करें",
    emergencyCancel: "रद्द करें",
    emergencySmsStep: "परिवार संपर्क को SMS भेजा जा रहा है",
    emergencyDoctorStep: "डॉक्टर को कॉल की जा रही है",
    emergencySuccess: "आपके परिवार और डॉक्टर को सूचित किया जा रहा है",
    trustTitle: "घबराहट नहीं, भरोसे के लिए डिज़ाइन",
    trustBody:
      "पेस्टल विज़ुअल, स्पष्ट एक्शन और प्राइवेसी-फर्स्ट डिफॉल्ट लोगों को शांत रहते हुए जल्दी कदम उठाने में मदद करते हैं।",
    trustPointOne: "भाषा सभी पेज और आवाज़ में एक जैसी रहती है।",
    trustPointTwo: "इमरजेंसी फ्लो पूरी तरह यूज़र के नियंत्रण में है।",
    trustPointThree: "डेटा गोपनीयता के लिए ब्राउज़र में लोकली स्टोर होता है।",
    authLoginTitle: "वापसी पर स्वागत है",
    authLoginBody: "अपनी केयर प्लान, रिमाइंडर और सेव किए गए कॉन्टैक्ट देखने के लिए साइन इन करें।",
    authSignupTitle: "अपना MedBuddy अकाउंट बनाएं",
    authSignupBody:
      "मल्टीलिंगुअल प्रिस्क्रिप्शन हेल्प, इमरजेंसी अलर्ट और फॉलो-अप रिमाइंडर के लिए प्रोफाइल सेट करें।",
    nameLabel: "पूरा नाम",
    emailLabel: "ईमेल पता",
    passwordLabel: "पासवर्ड",
    confirmPasswordLabel: "पासवर्ड की पुष्टि करें",
    ageLabel: "उम्र",
    loginButton: "लॉगिन करें",
    signupButton: "अकाउंट बनाएं",
    authSwitchLogin: "क्या आपका अकाउंट पहले से है?",
    authSwitchSignup: "नया अकाउंट चाहिए?",
    authInvalidEmail: "कृपया सही ईमेल पता दर्ज करें।",
    authPasswordShort: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
    authPasswordMismatch: "पासवर्ड मेल नहीं खा रहे हैं।",
    authRequired: "कृपया सभी ज़रूरी फ़ील्ड भरें।",
    authLoginError: "ईमेल या पासवर्ड मेल नहीं खाता।",
    authSignupExists: "इस ईमेल से अकाउंट पहले से मौजूद है।",
    authSuccess: "आप साइन इन हो चुके हैं और तैयार हैं।",
    dashboardGreeting: "केयर डैशबोर्ड",
    dashboardTitle: "अपने प्रिस्क्रिप्शन को आत्मविश्वास के साथ समझें",
    dashboardBody:
      "प्रिस्क्रिप्शन पेस्ट करें या फ़ाइल अपलोड करें। MedBuddy विश्लेषण का सिमुलेशन करता है, प्लान को सरल बनाता है और भरोसेमंद रिमाइंडर तैयार करता है।",
    languageLabel: "भाषा",
    prescriptionLabel: "प्रिस्क्रिप्शन नोट्स",
    prescriptionPlaceholder:
      "यहां प्रिस्क्रिप्शन पेस्ट करें। उदाहरण: Tab Paracetamol 650 mg SOS for fever, Azithromycin 500 mg once daily after food for 3 days.",
    analyzeButton: "प्रिस्क्रिप्शन समझें",
    analyzingLabel: "आपका प्रिस्क्रिप्शन समझा जा रहा है...",
    uploadTitle: "प्रिस्क्रिप्शन अपलोड करें",
    uploadBody: "JPG, PNG या PDF ड्रैग और ड्रॉप करें। OCR सिमुलेशन टेक्स्ट निकालकर बॉक्स में भर देगा।",
    uploadIdle: "फ़ाइल यहां छोड़ें या चुनें",
    uploadActive: "अपलोड करने के लिए छोड़ें",
    uploadReading: "इमेज से प्रिस्क्रिप्शन पढ़ा जा रहा है...",
    uploadUnsupported: "यह फ़ाइल समर्थित नहीं है। JPG, PNG या PDF अपलोड करें।",
    uploadGeneric: "अपलोड असफल रहा। कृपया फिर से कोशिश करें।",
    uploadRetry: "फिर से कोशिश करें",
    uploadRemove: "हटाएं",
    uploadChange: "बदलें",
    uploadSuccess: "प्रिस्क्रिप्शन टेक्स्ट निकालकर फॉर्म में जोड़ दिया गया है।",
    resultSummary: "त्वरित सार",
    resultDiagnosis: "संभावित निदान",
    resultMedicines: "दवाइयां और समय",
    resultSideEffects: "संभावित साइड इफेक्ट्स",
    resultWarnings: "चेतावनी संकेत",
    resultChecklist: "फॉलो-अप चेकलिस्ट",
    resultFollowUp: "अगले कदम",
    resultVoice: "अपनी भाषा में सुनें",
    reminderDisabled: "नोटिफिकेशन शेड्यूल करने के लिए सेटिंग्स में रिमाइंडर चालू करें।",
    reminderScheduledTitle: "रिमाइंडर सेट हुआ",
    reminderScheduledBody: "थोड़ी देर में एक केयर रिमाइंडर पॉप-अप दिखेगा।",
    checklistDone: "चेकलिस्ट अपडेट हो गई",
    notificationMedicine: "रात 8 बजे दवा लें",
    notificationWater: "पानी पीने का रिमाइंडर",
    contactsTitle: "डॉक्टर और परिवार के कॉन्टैक्ट",
    contactsBody:
      "जो लोग आपकी देखभाल में मदद करते हैं उन्हें हमेशा आसान पहुंच में रखें। कभी भी जोड़ें, बदलें, हटाएं या प्राइमरी मार्क करें।",
    addContactTitle: "कॉन्टैक्ट जोड़ें",
    editContactTitle: "कॉन्टैक्ट संपादित करें",
    contactTypeLabel: "कॉन्टैक्ट प्रकार",
    doctorLabel: "डॉक्टर",
    familyLabel: "परिवार",
    relationLabel: "रिश्ता / भूमिका",
    phoneLabel: "फोन नंबर",
    specialtyLabel: "विशेषज्ञता",
    notesLabel: "नोट्स",
    primaryLabel: "प्राइमरी कॉन्टैक्ट",
    saveContact: "कॉन्टैक्ट सेव करें",
    updateContact: "कॉन्टैक्ट अपडेट करें",
    cancelEdit: "संपादन रद्द करें",
    contactSaved: "कॉन्टैक्ट सफलतापूर्वक सेव हुआ।",
    contactDeleted: "कॉन्टैक्ट हटाया गया।",
    primarySaved: "प्राइमरी कॉन्टैक्ट अपडेट हुआ।",
    noContacts: "अभी कोई कॉन्टैक्ट नहीं है। अपना पहला डॉक्टर या परिवार सदस्य जोड़ें।",
    filterAll: "सभी",
    filterDoctors: "डॉक्टर",
    filterFamily: "परिवार",
    settingsTitle: "व्यक्तिगत सेटिंग्स",
    settingsBody:
      "एक ही जगह से अपनी भाषा, रिमाइंडर, इमरजेंसी विकल्प और ऑडियो आराम को समायोजित करें।",
    settingsVolume: "मास्टर वॉल्यूम",
    settingsReminders: "दवा रिमाइंडर",
    settingsEmergency: "इमरजेंसी अलर्ट एक्सेस",
    settingsPrivacy: "प्राइवेसी-फर्स्ट मोड",
    settingsPreviewTitle: "ऑडियो प्रीव्यू",
    settingsPreviewBody: "यह प्रीव्यू चुनी गई भाषा और आवाज़ में छोटा हेल्थ नोट पढ़ेगा।",
    settingsPrivacyTitle: "भरोसा और गोपनीयता",
    settingsPrivacyBody:
      "इस डेमो में MedBuddy डेटा लोकली स्टोर करता है, अनावश्यक डेटा नहीं लेता और हमेशा याद दिलाता है कि यह डॉक्टर की सलाह का विकल्प नहीं है।",
    settingsPreviewReminder: "रिमाइंडर टोस्ट प्रीव्यू",
    disclaimer: "MedBuddy समझ और योजना में मदद करता है। यह डॉक्टरों या इमरजेंसी सेवाओं का विकल्प नहीं है।",
    audioUnavailable: "ऑडियो उपलब्ध नहीं है, कृपया फिर से कोशिश करें",
    playLabel: "प्ले",
    pauseLabel: "पॉज़",
    replayLabel: "फिर से चलाएं",
    volumeLabel: "वॉल्यूम",
    ageHelper: "उम्र सारांश और फॉलो-अप सलाह को बेहतर बनाती है।",
    footerNote: "स्पष्टता, सहानुभूति और वास्तविक हेल्थ मोमेंट्स के लिए बनाया गया।",
  },
  gu: {
    brandTitle: "MedBuddy",
    brandSubtitle: "તમારો હેલ્થ ફ્રેન્ડ",
    navHome: "હોમ",
    navDashboard: "ડેશબોર્ડ",
    navContacts: "ડોક્ટર અને પરિવાર",
    navSettings: "સેટિંગ્સ",
    navLogin: "લૉગિન",
    navSignup: "સાઇન અપ",
    navLogout: "લૉગ આઉટ",
    homeEyebrow: "પરિવારો માટે શાંત અને સરળ કાળજી",
    homeTitle: "પ્રિસ્ક્રિપ્શન સમજો, સમયસર રહો અને મદદ ઝડપથી મેળવો.",
    homeBody:
      "MedBuddy અંગ્રેજી, હિન્દી અને ગુજરાતી ભાષામાં મેડિકલ સૂચનાઓને સરળ ભાષા, હળવા રિમાઇન્ડર અને એક-ટૅપ ઇમરજન્સી સપોર્ટમાં ફેરવે છે.",
    homePrimaryCta: "ડેશબોર્ડ ખોલો",
    homeSecondaryCta: "એકાઉન્ટ બનાવો",
    homeWellnessTitle: "વૉઇસ સાથે કાળજી",
    homeWellnessBody:
      "તમારી પસંદની ભાષામાં સ્પષ્ટ પ્લેબેક કંટ્રોલ અને એડજસ્ટેબલ વોલ્યુમ સાથે સૂચનાઓ સાંભળો.",
    emergencyBadge: "ઇમરજન્સી અલર્ટ",
    emergencyTitle: "તાત્કાલિક મદદ જોઈએ છે?",
    emergencyBody:
      "એક કન્ફર્મેશન પછી પરિવારને SMS અને ડૉક્ટરને કૉલનું શાંત સિમ્યુલેશન મોકલો.",
    emergencyButton: "ઇમરજન્સી અલર્ટ મોકલો",
    emergencyModalTitle: "ઇમરજન્સી અલર્ટ કન્ફર્મ કરો",
    emergencyModalBody:
      "અમે તમારા પ્રાથમિક પરિવાર સંપર્ક અને ડૉક્ટરને સૂચિત કરવાની પ્રક્રિયાનું સિમ્યુલેશન કરીશું. શરૂઆત પહેલાં તમે રદ કરી શકો છો.",
    emergencyConfirm: "અલર્ટ કન્ફર્મ કરો",
    emergencyCancel: "રદ કરો",
    emergencySmsStep: "પરિવાર સંપર્કને SMS મોકલાઈ રહ્યો છે",
    emergencyDoctorStep: "ડૉક્ટરને કૉલ થઈ રહ્યો છે",
    emergencySuccess: "તમારા પરિવાર અને ડૉક્ટરને જાણ કરવામાં આવી રહી છે",
    trustTitle: "ગભરાટ નહીં, વિશ્વાસ માટે ડિઝાઇન",
    trustBody:
      "પેસ્ટલ વિઝ્યુઅલ્સ, સ્પષ્ટ એક્શન અને પ્રાઇવસી-ફર્સ્ટ ડિફોલ્ટ લોકોને શાંતિથી ઝડપથી પગલું ભરવામાં મદદ કરે છે.",
    trustPointOne: "ભાષા દરેક પેજ અને અવાજમાં એકસરખી રહે છે.",
    trustPointTwo: "ઇમરજન્સી ફ્લો સંપૂર્ણપણે યૂઝરના નિયંત્રણમાં છે.",
    trustPointThree: "ગોપનીયતા માટે ડેટા બ્રાઉઝરમાં લોકલી સ્ટોર થાય છે.",
    authLoginTitle: "પાછા આવકાર",
    authLoginBody: "તમારી કેર પ્લાન, રિમાઇન્ડર અને સેવ કરેલા સંપર્કો જોવા માટે સાઇન ઇન કરો.",
    authSignupTitle: "તમારું MedBuddy એકાઉન્ટ બનાવો",
    authSignupBody:
      "મલ્ટીલિંગ્યુઅલ પ્રિસ્ક્રિપ્શન મદદ, ઇમરજન્સી અલર્ટ અને ફોલો-અપ રિમાઇન્ડર માટે તમારી પ્રોફાઇલ સેટ કરો.",
    nameLabel: "પૂરું નામ",
    emailLabel: "ઇમેઇલ સરનામું",
    passwordLabel: "પાસવર્ડ",
    confirmPasswordLabel: "પાસવર્ડ કન્ફર્મ કરો",
    ageLabel: "ઉંમર",
    loginButton: "લૉગિન કરો",
    signupButton: "એકાઉન્ટ બનાવો",
    authSwitchLogin: "પહેલેથી એકાઉન્ટ છે?",
    authSwitchSignup: "નવું એકાઉન્ટ જોઈએ છે?",
    authInvalidEmail: "કૃપા કરીને માન્ય ઇમેઇલ દાખલ કરો.",
    authPasswordShort: "પાસવર્ડ ઓછામાં ઓછો 6 અક્ષરનો હોવો જોઈએ.",
    authPasswordMismatch: "પાસવર્ડ મેળ ખાતા નથી.",
    authRequired: "કૃપા કરીને બધા જરૂરી ક્ષેત્રો ભરો.",
    authLoginError: "ઇમેઇલ અથવા પાસવર્ડ મેળ ખાતા નથી.",
    authSignupExists: "આ ઇમેઇલથી એકાઉન્ટ પહેલેથી હાજર છે.",
    authSuccess: "તમે સાઇન ઇન થઈ ગયા છો અને તૈયાર છો.",
    dashboardGreeting: "કેર ડેશબોર્ડ",
    dashboardTitle: "તમારું પ્રિસ્ક્રિપ્શન આત્મવિશ્વાસથી સમજો",
    dashboardBody:
      "પ્રિસ્ક્રિપ્શન પેસ્ટ કરો અથવા ફાઇલ અપલોડ કરો. MedBuddy વિશ્લેષણનું સિમ્યુલેશન કરે છે, પ્લાન સરળ બનાવે છે અને વિશ્વસનીય રિમાઇન્ડર તૈયાર કરે છે.",
    languageLabel: "ભાષા",
    prescriptionLabel: "પ્રિસ્ક્રિપ્શન નોંધો",
    prescriptionPlaceholder:
      "અહીં પ્રિસ્ક્રિપ્શન પેસ્ટ કરો. ઉદાહરણ: Tab Paracetamol 650 mg SOS for fever, Azithromycin 500 mg once daily after food for 3 days.",
    analyzeButton: "પ્રિસ્ક્રિપ્શન સમજો",
    analyzingLabel: "તમારું પ્રિસ્ક્રિપ્શન સમજાઈ રહ્યું છે...",
    uploadTitle: "પ્રિસ્ક્રિપ્શન અપલોડ કરો",
    uploadBody: "JPG, PNG અથવા PDF ડ્રેગ અને ડ્રોપ કરો. OCR સિમ્યુલેશન ટેક્સ્ટ કાઢીને બોક્સમાં ભરી દેશે.",
    uploadIdle: "ફાઇલ અહીં છોડો અથવા પસંદ કરો",
    uploadActive: "અપલોડ કરવા છોડો",
    uploadReading: "ઇમેજમાંથી પ્રિસ્ક્રિપ્શન વાંચાઈ રહ્યું છે...",
    uploadUnsupported: "આ ફાઇલ સપોર્ટેડ નથી. JPG, PNG અથવા PDF અપલોડ કરો.",
    uploadGeneric: "અપલોડ નિષ્ફળ ગયું. કૃપા કરીને ફરી પ્રયાસ કરો.",
    uploadRetry: "ફરી પ્રયાસ કરો",
    uploadRemove: "દૂર કરો",
    uploadChange: "બદલો",
    uploadSuccess: "પ્રિસ્ક્રિપ્શન ટેક્સ્ટ કાઢીને ફોર્મમાં ઉમેરવામાં આવ્યું છે.",
    resultSummary: "ઝડપી સારાંશ",
    resultDiagnosis: "સંભવિત નિદાન",
    resultMedicines: "દવાઓ અને સમય",
    resultSideEffects: "સંભવિત સાઇડ ઇફેક્ટ્સ",
    resultWarnings: "ચેતવણીના લક્ષણો",
    resultChecklist: "ફોલો-અપ ચેકલિસ્ટ",
    resultFollowUp: "આગળના પગલાં",
    resultVoice: "તમારી ભાષામાં સાંભળો",
    reminderDisabled: "નોટિફિકેશન શેડ્યૂલ કરવા માટે સેટિંગ્સમાં રિમાઇન્ડર ચાલુ કરો.",
    reminderScheduledTitle: "રિમાઇન્ડર સેટ થયું",
    reminderScheduledBody: "થોડા સમયમાં એક કેર રિમાઇન્ડર પોપ-અપ દેખાશે.",
    checklistDone: "ચેકલિસ્ટ અપડેટ થયું",
    notificationMedicine: "રાત્રે 8 વાગ્યે દવા લો",
    notificationWater: "પાણી પીવાનું રિમાઇન્ડર",
    contactsTitle: "ડોક્ટર અને પરિવાર સંપર્કો",
    contactsBody:
      "તમારી કાળજીમાં મદદ કરતા લોકોને સરળ પહોંચમાં રાખો. કોઈ પણ સમયે ઉમેરો, બદલો, દૂર કરો અથવા પ્રાથમિક તરીકે માર્ક કરો.",
    addContactTitle: "સંપર્ક ઉમેરો",
    editContactTitle: "સંપર્ક સંપાદિત કરો",
    contactTypeLabel: "સંપર્ક પ્રકાર",
    doctorLabel: "ડોક્ટર",
    familyLabel: "પરિવાર",
    relationLabel: "સંબંધ / ભૂમિકા",
    phoneLabel: "ફોન નંબર",
    specialtyLabel: "સ્પેશિયાલિટી",
    notesLabel: "નોંધો",
    primaryLabel: "પ્રાથમિક સંપર્ક",
    saveContact: "સંપર્ક સેવ કરો",
    updateContact: "સંપર્ક અપડેટ કરો",
    cancelEdit: "સંપાદન રદ કરો",
    contactSaved: "સંપર્ક સફળતાપૂર્વક સેવ થયો.",
    contactDeleted: "સંપર્ક દૂર કર્યો.",
    primarySaved: "પ્રાથમિક સંપર્ક અપડેટ થયો.",
    noContacts: "હજુ સુધી કોઈ સંપર્ક નથી. તમારો પહેલો ડોક્ટર અથવા પરિવાર સભ્ય ઉમેરો.",
    filterAll: "બધા",
    filterDoctors: "ડોક્ટર",
    filterFamily: "પરિવાર",
    settingsTitle: "વ્યક્તિગત સેટિંગ્સ",
    settingsBody:
      "એક જ જગ્યાએથી તમારી ભાષા, રિમાઇન્ડર, ઇમરજન્સી વિકલ્પો અને ઑડિયો આરામને એડજસ્ટ કરો.",
    settingsVolume: "માસ્ટર વોલ્યુમ",
    settingsReminders: "દવા રિમાઇન્ડર",
    settingsEmergency: "ઇમરજન્સી અલર્ટ ઍક્સેસ",
    settingsPrivacy: "પ્રાઇવસી-ફર્સ્ટ મોડ",
    settingsPreviewTitle: "ઓડિયો પ્રિવ્યૂ",
    settingsPreviewBody: "આ પ્રિવ્યૂ પસંદ કરેલી ભાષા અને અવાજમાં નાનું હેલ્થ નોટ વાંચશે.",
    settingsPrivacyTitle: "વિશ્વાસ અને ગોપનીયતા",
    settingsPrivacyBody:
      "આ ડેમોમાં MedBuddy ડેટા લોકલી સ્ટોર કરે છે, અનાવશ્યક ડેટા એકત્રિત કરતું નથી અને હંમેશા યાદ અપાવે છે કે તે ડૉક્ટરની સલાહનો વિકલ્પ નથી.",
    settingsPreviewReminder: "રિમાઇન્ડર ટોસ્ટ પ્રિવ્યૂ",
    disclaimer: "MedBuddy સમજણ અને આયોજનમાં મદદ કરે છે. તે ડૉક્ટર અથવા ઇમરજન્સી સેવાઓનો વિકલ્પ નથી.",
    audioUnavailable: "ઑડિયો ઉપલબ્ધ નથી, કૃપા કરીને ફરી પ્રયાસ કરો",
    playLabel: "પ્લે",
    pauseLabel: "પોઝ",
    replayLabel: "ફરી વગાડો",
    volumeLabel: "વોલ્યુમ",
    ageHelper: "ઉંમર સારાંશ અને ફોલો-અપ સલાહને વધુ યોગ્ય બનાવે છે.",
    footerNote: "સ્પષ્ટતા, સહાનુભૂતિ અને સાચી હેલ્થ મોમેન્ટ્સ માટે બનાવ્યું છે.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export const defaultContacts: Contact[] = [
  {
    id: "doctor-primary",
    type: "doctor",
    name: "Dr. Meera Shah",
    relation: "Primary physician",
    phone: "+91 98989 21021",
    specialty: "Internal medicine",
    notes: "Best for medicine reviews and urgent follow-up.",
    isPrimary: true,
  },
  {
    id: "family-primary",
    type: "family",
    name: "Rohan Patel",
    relation: "Son",
    phone: "+91 98765 44321",
    notes: "Lives nearby and responds quickly.",
    isPrimary: true,
  },
  {
    id: "family-secondary",
    type: "family",
    name: "Kavita Patel",
    relation: "Daughter",
    phone: "+91 98111 20444",
    notes: "Can help with pharmacy pickups.",
    isPrimary: false,
  },
];

const ocrSamples = {
  en: "Patient complains of fever for 2 days. Tab Paracetamol 650 mg SOS after food. Tab Azithromycin 500 mg once daily for 3 days. Drink plenty of fluids. Review if fever persists or breathing worsens.",
  hi: "रोगी को 2 दिनों से बुखार है। Tab Paracetamol 650 mg SOS after food. Tab Azithromycin 500 mg once daily for 3 days. पर्याप्त पानी पिएं। बुखार बना रहे या सांस बढ़े तो रिव्यू कराएं।",
  gu: "દર્દીને 2 દિવસથી તાવ છે. Tab Paracetamol 650 mg SOS after food. Tab Azithromycin 500 mg once daily for 3 days. પૂરતું પાણી પીવું. તાવ ચાલુ રહે અથવા શ્વાસ વધારે થાય તો રિવ્યુ કરાવો.",
} satisfies Record<Language, string>;

const homeVoiceText = {
  en: "You are safe with MedBuddy. Your care plan, reminders, and emergency support stay simple and calm.",
  hi: "आप MedBuddy के साथ सुरक्षित हैं। आपकी केयर प्लान, रिमाइंडर और इमरजेंसी सपोर्ट सरल और शांत रहते हैं।",
  gu: "તમે MedBuddy સાથે સુરક્ષિત છો. તમારી કેર પ્લાન, રિમાઇન્ડર અને ઇમરજન્સી સપોર્ટ સરળ અને શાંત રહે છે.",
} satisfies Record<Language, string>;

const settingsVoiceText = {
  en: "This is your MedBuddy audio preview. Adjust the volume until the voice feels comfortable and easy to follow.",
  hi: "यह आपका MedBuddy ऑडियो प्रीव्यू है। आवाज़ आपके लिए आरामदायक और स्पष्ट लगे तब तक वॉल्यूम समायोजित करें।",
  gu: "આ તમારું MedBuddy ઑડિયો પ્રિવ્યૂ છે. અવાજ આરામદાયક અને સ્પષ્ટ લાગે ત્યાં સુધી વોલ્યુમ એડજસ્ટ કરો.",
} satisfies Record<Language, string>;
const analysisCatalog: Record<Language, Record<AnalysisKind, AnalysisResult>> = {
  en: {
    infection: {
      diagnosis: "Upper respiratory infection with fever",
      summary:
        "The prescription suggests a short infection plan focused on fever relief, hydration, and follow-up if breathing or fever gets worse.",
      medicines: [
        { id: "med-1", name: "Paracetamol 650 mg", timing: "Only if fever, after food", purpose: "Reduces fever and body ache", scheduleTimes: ["08:00", "14:00", "20:00"] },
        { id: "med-2", name: "Azithromycin 500 mg", timing: "Once daily after dinner for 3 days", purpose: "Treats the suspected infection", scheduleTimes: ["20:00"] },
      ],
      sideEffects: ["Mild stomach upset", "Loose stools", "Sleepiness if fever is high"],
      warningSigns: ["Breathing trouble", "Fever above 102 F for more than 2 days", "Severe weakness or confusion"],
      checklist: [
        { id: "check-1", label: "Take Azithromycin after dinner tonight", reminderText: "Take medicine at 8 PM" },
        { id: "check-2", label: "Drink at least 8 glasses of water", reminderText: "Drink water reminder" },
        { id: "check-3", label: "Check temperature again tomorrow morning", reminderText: "Check temperature reminder" },
      ],
      followUp: ["Review with doctor in 2-3 days if fever continues", "Seek urgent care if breathing worsens"],
      voiceText:
        "This prescription likely treats an upper respiratory infection. Take Paracetamol for fever, Azithromycin after dinner, drink plenty of fluids, and watch for breathing trouble.",
    },
    diabetes: {
      diagnosis: "Type 2 diabetes follow-up plan",
      summary:
        "The prescription looks like a blood sugar control plan with daily tablets, meal timing, hydration, and monitoring for dizziness or unusual fatigue.",
      medicines: [
        { id: "med-1", name: "Metformin 500 mg", timing: "After breakfast and dinner", purpose: "Helps control blood sugar", scheduleTimes: ["08:30", "20:30"] },
        { id: "med-2", name: "Glimepiride 1 mg", timing: "15 minutes before breakfast", purpose: "Supports morning glucose control", scheduleTimes: ["08:00"] },
      ],
      sideEffects: ["Low sugar feeling", "Nausea", "Mild stomach discomfort"],
      warningSigns: ["Sweating with shakiness", "Blurred vision", "Very high thirst with weakness"],
      checklist: [
        { id: "check-1", label: "Take Glimepiride before breakfast", reminderText: "Take morning medicine at 8 AM" },
        { id: "check-2", label: "Log post-dinner sugar reading", reminderText: "Check sugar after dinner" },
        { id: "check-3", label: "Keep a small snack nearby", reminderText: "Carry a snack reminder" },
      ],
      followUp: ["Review fasting sugar in one week", "Contact doctor if repeated low sugar episodes happen"],
      voiceText:
        "This appears to be a diabetes follow-up plan. Take Glimepiride before breakfast, Metformin after meals, and keep monitoring sugar levels and hydration.",
    },
    bloodPressure: {
      diagnosis: "High blood pressure maintenance plan",
      summary:
        "The prescription suggests a routine blood pressure management plan with daily medication, reduced salt intake, and follow-up monitoring.",
      medicines: [
        { id: "med-1", name: "Telmisartan 40 mg", timing: "Once every morning", purpose: "Supports blood pressure control", scheduleTimes: ["08:00"] },
        { id: "med-2", name: "Amlodipine 5 mg", timing: "Once at night", purpose: "Keeps blood pressure steady", scheduleTimes: ["21:00"] },
      ],
      sideEffects: ["Lightheadedness", "Ankle swelling", "Tiredness when standing suddenly"],
      warningSigns: ["Severe headache", "Chest discomfort", "Shortness of breath with dizziness"],
      checklist: [
        { id: "check-1", label: "Take morning blood pressure tablet", reminderText: "Take medicine at 8 AM" },
        { id: "check-2", label: "Measure blood pressure before lunch", reminderText: "Check blood pressure today" },
        { id: "check-3", label: "Reduce salty packaged food today", reminderText: "Healthy meal reminder" },
      ],
      followUp: ["Track readings for 5 days", "Review sooner if headache or chest discomfort appears"],
      voiceText:
        "This looks like a blood pressure plan. Take Telmisartan in the morning, Amlodipine at night, reduce salt, and track your blood pressure regularly.",
    },
  },
  hi: {
    infection: {
      diagnosis: "बुखार के साथ ऊपरी श्वसन संक्रमण",
      summary:
        "यह प्रिस्क्रिप्शन बुखार में राहत, पानी की मात्रा और सांस या बुखार बढ़ने पर फॉलो-अप पर केंद्रित एक छोटे संक्रमण प्लान जैसा लगता है।",
      medicines: [
        { id: "med-1", name: "Paracetamol 650 mg", timing: "बुखार होने पर, भोजन के बाद", purpose: "बुखार और बदन दर्द कम करता है", scheduleTimes: ["08:00", "14:00", "20:00"] },
        { id: "med-2", name: "Azithromycin 500 mg", timing: "रात के खाने के बाद, 3 दिन तक रोज़ एक बार", purpose: "संभावित संक्रमण का इलाज", scheduleTimes: ["20:00"] },
      ],
      sideEffects: ["हल्की पेट खराबी", "ढीला पेट", "बुखार ज़्यादा होने पर सुस्ती"],
      warningSigns: ["सांस लेने में दिक्कत", "102 F से अधिक बुखार 2 दिन से ज़्यादा", "बहुत कमजोरी या भ्रम"],
      checklist: [
        { id: "check-1", label: "आज रात खाने के बाद Azithromycin लें", reminderText: "रात 8 बजे दवा लें" },
        { id: "check-2", label: "कम से कम 8 गिलास पानी पिएं", reminderText: "पानी पीने का रिमाइंडर" },
        { id: "check-3", label: "कल सुबह फिर से तापमान जांचें", reminderText: "तापमान जांचने का रिमाइंडर" },
      ],
      followUp: ["अगर बुखार जारी रहे तो 2-3 दिन में डॉक्टर से रिव्यू कराएं", "सांस बढ़े तो तुरंत इलाज लें"],
      voiceText:
        "यह प्रिस्क्रिप्शन ऊपरी श्वसन संक्रमण जैसा लगता है। बुखार में Paracetamol लें, रात के खाने के बाद Azithromycin लें, पानी अधिक पिएं और सांस की दिक्कत पर ध्यान दें।",
    },
    diabetes: {
      diagnosis: "टाइप 2 डायबिटीज़ फॉलो-अप प्लान",
      summary:
        "यह ब्लड शुगर कंट्रोल की योजना लगती है जिसमें रोज़ की दवा, खाने का समय, पानी और चक्कर या ज़्यादा थकान पर नज़र शामिल है।",
      medicines: [
        { id: "med-1", name: "Metformin 500 mg", timing: "नाश्ते और रात के खाने के बाद", purpose: "ब्लड शुगर कंट्रोल में मदद", scheduleTimes: ["08:30", "20:30"] },
        { id: "med-2", name: "Glimepiride 1 mg", timing: "नाश्ते से 15 मिनट पहले", purpose: "सुबह की शुगर कंट्रोल में मदद", scheduleTimes: ["08:00"] },
      ],
      sideEffects: ["लो शुगर जैसा महसूस होना", "मतली", "हल्की पेट असहजता"],
      warningSigns: ["पसीने के साथ कंपकंपी", "धुंधला दिखना", "बहुत प्यास और कमजोरी"],
      checklist: [
        { id: "check-1", label: "नाश्ते से पहले Glimepiride लें", reminderText: "सुबह 8 बजे दवा लें" },
        { id: "check-2", label: "रात के खाने के बाद शुगर रीडिंग लिखें", reminderText: "डिनर के बाद शुगर जांचें" },
        { id: "check-3", label: "पास में हल्का स्नैक रखें", reminderText: "स्नैक साथ रखने का रिमाइंडर" },
      ],
      followUp: ["एक हफ्ते में फास्टिंग शुगर रिव्यू करें", "बार-बार लो शुगर हो तो डॉक्टर से संपर्क करें"],
      voiceText:
        "यह डायबिटीज़ फॉलो-अप प्लान लगता है। नाश्ते से पहले Glimepiride लें, खाने के बाद Metformin लें और शुगर व पानी की मात्रा पर नज़र रखें।",
    },
    bloodPressure: {
      diagnosis: "हाई ब्लड प्रेशर मेंटेनेंस प्लान",
      summary:
        "यह रोज़ की दवा, कम नमक और फॉलो-अप मॉनिटरिंग वाला ब्लड प्रेशर मैनेजमेंट प्लान लगता है।",
      medicines: [
        { id: "med-1", name: "Telmisartan 40 mg", timing: "हर सुबह एक बार", purpose: "ब्लड प्रेशर कंट्रोल में मदद", scheduleTimes: ["08:00"] },
        { id: "med-2", name: "Amlodipine 5 mg", timing: "हर रात एक बार", purpose: "ब्लड प्रेशर स्थिर रखता है", scheduleTimes: ["21:00"] },
      ],
      sideEffects: ["चक्कर जैसा लगना", "टखनों में सूजन", "अचानक खड़े होने पर थकान"],
      warningSigns: ["तेज़ सिरदर्द", "सीने में असहजता", "चक्कर के साथ सांस फूलना"],
      checklist: [
        { id: "check-1", label: "सुबह की ब्लड प्रेशर दवा लें", reminderText: "सुबह 8 बजे दवा लें" },
        { id: "check-2", label: "दोपहर से पहले ब्लड प्रेशर मापें", reminderText: "आज ब्लड प्रेशर जांचें" },
        { id: "check-3", label: "आज नमक वाला पैकेज्ड खाना कम करें", reminderText: "हेल्दी मील रिमाइंडर" },
      ],
      followUp: ["5 दिन तक रीडिंग ट्रैक करें", "सिरदर्द या सीने में असहजता हो तो जल्दी रिव्यू करें"],
      voiceText:
        "यह ब्लड प्रेशर प्लान लगता है। सुबह Telmisartan लें, रात में Amlodipine लें, नमक कम करें और ब्लड प्रेशर नियमित जांचें।",
    },
  },
  gu: {
    infection: {
      diagnosis: "તાવ સાથે ઉપરના શ્વસન માર્ગનો ચેપ",
      summary:
        "આ પ્રિસ્ક્રિપ્શન તાવમાં રાહત, પાણીનું પ્રમાણ અને શ્વાસ અથવા તાવ વધે તો ફોલો-અપ પર ધ્યાન આપતો ટૂંકો ચેપ પ્લાન લાગે છે.",
      medicines: [
        { id: "med-1", name: "Paracetamol 650 mg", timing: "તાવ હોય ત્યારે, ભોજન પછી", purpose: "તાવ અને શરીરના દુખાવામાં રાહત", scheduleTimes: ["08:00", "14:00", "20:00"] },
        { id: "med-2", name: "Azithromycin 500 mg", timing: "રાત્રે ભોજન પછી, 3 દિવસ માટે રોજ એક વાર", purpose: "સંભવિત ચેપનો ઉપચાર", scheduleTimes: ["20:00"] },
      ],
      sideEffects: ["હળવો પેટ બગડવો", "ઢીલા સ્ટૂલ", "તાવ વધારે હોય ત્યારે સુસ્તી"],
      warningSigns: ["શ્વાસ લેવામાં તકલીફ", "2 દિવસથી વધુ 102 F કરતા વધારે તાવ", "ઘણી નબળાઇ અથવા ગૂંચવણ"],
      checklist: [
        { id: "check-1", label: "આજ રાત્રે ભોજન પછી Azithromycin લો", reminderText: "રાત્રે 8 વાગ્યે દવા લો" },
        { id: "check-2", label: "ઓછામાં ઓછા 8 ગ્લાસ પાણી પીવો", reminderText: "પાણી પીવાનું રિમાઇન્ડર" },
        { id: "check-3", label: "કાલે સવારે ફરી તાપમાન ચેક કરો", reminderText: "તાપમાન ચેક કરવાનો રિમાઇન્ડર" },
      ],
      followUp: ["તાવ ચાલુ રહે તો 2-3 દિવસમાં ડૉક્ટર સાથે રિવ્યુ કરો", "શ્વાસ વધારે થાય તો તાત્કાલિક સારવાર લો"],
      voiceText:
        "આ પ્રિસ્ક્રિપ્શન ઉપરના શ્વસન ચેપ માટે હોઈ શકે છે. તાવ માટે Paracetamol લો, રાત્રે Azithromycin લો, વધારે પાણી પીવો અને શ્વાસની તકલીફ પર નજર રાખો.",
    },
    diabetes: {
      diagnosis: "ટાઇપ 2 ડાયાબિટીસ ફોલો-અપ પ્લાન",
      summary:
        "આ બ્લડ સુગર કંટ્રોલ પ્લાન લાગે છે જેમાં રોજની દવા, ભોજનનો સમય, પાણી અને ચક્કર અથવા વધારે થાક પર નજર રાખવાની સલાહ છે.",
      medicines: [
        { id: "med-1", name: "Metformin 500 mg", timing: "નાસ્તા અને રાત્રિભોજન પછી", purpose: "બ્લડ સુગર કંટ્રોલમાં મદદ કરે છે", scheduleTimes: ["08:30", "20:30"] },
        { id: "med-2", name: "Glimepiride 1 mg", timing: "નાસ્તા પહેલા 15 મિનિટ", purpose: "સવારના ગ્લુકોઝ કંટ્રોલમાં મદદ", scheduleTimes: ["08:00"] },
      ],
      sideEffects: ["લો શુગર જેવી લાગણી", "મિતલી", "હળવો પેટમાં અસ્વસ્થતા"],
      warningSigns: ["કંપારી સાથે પરસેવો", "ધૂંધળું દેખાવું", "ઘણી તરસ સાથે નબળાઈ"],
      checklist: [
        { id: "check-1", label: "નાસ્તા પહેલા Glimepiride લો", reminderText: "સવારે 8 વાગ્યે દવા લો" },
        { id: "check-2", label: "રાત્રે ભોજન પછી શુગર રીડિંગ નોંધો", reminderText: "ડિનર પછી શુગર ચેક કરો" },
        { id: "check-3", label: "પાસે નાનું નાસ્તું રાખો", reminderText: "સ્નેક સાથે રાખવાનો રિમાઇન્ડર" },
      ],
      followUp: ["એક અઠવાડિયામાં ફાસ્ટિંગ શુગર રિવ્યુ કરો", "વારંવાર લો શુગર થાય તો ડૉક્ટરને સંપર્ક કરો"],
      voiceText:
        "આ ડાયાબિટીસ ફોલો-અપ પ્લાન લાગે છે. નાસ્તા પહેલા Glimepiride લો, ભોજન પછી Metformin લો અને સુગર તેમજ પાણી પર નજર રાખો.",
    },
    bloodPressure: {
      diagnosis: "ઉચ્ચ રક્તચાપ મેંટેનન્સ પ્લાન",
      summary:
        "આ રોજની દવા, ઓછું મીઠું અને અનુસરણ મોનિટરિંગ સાથેનો બ્લડ પ્રેશર મેનેજમેન્ટ પ્લાન લાગે છે.",
      medicines: [
        { id: "med-1", name: "Telmisartan 40 mg", timing: "દર સવાર એક વાર", purpose: "બ્લડ પ્રેશર કંટ્રોલમાં મદદ", scheduleTimes: ["08:00"] },
        { id: "med-2", name: "Amlodipine 5 mg", timing: "દરરોજ રાત્રે એક વાર", purpose: "બ્લડ પ્રેશર સ્થિર રાખે છે", scheduleTimes: ["21:00"] },
      ],
      sideEffects: ["ચક્કર આવવું", "પગની સૂજન", "ઝટપટ ઊભા થવાથી થાક"],
      warningSigns: ["જોરદાર માથાનો દુખાવો", "છાતીમાં અસ્વસ્થતા", "ચક્કર સાથે શ્વાસ ફૂલવો"],
      checklist: [
        { id: "check-1", label: "સવારની બ્લડ પ્રેશર દવા લો", reminderText: "સવારે 8 વાગ્યે દવા લો" },
        { id: "check-2", label: "બપોર પહેલા બ્લડ પ્રેશર માપો", reminderText: "આજે બ્લડ પ્રેશર ચેક કરો" },
        { id: "check-3", label: "આજે ખારા પેકેજ્ડ ખોરાક ઓછા લો", reminderText: "હેલ્ધી મીલ રિમાઇન્ડર" },
      ],
      followUp: ["5 દિવસ સુધી રીડિંગ ટ્રેક કરો", "માથાનો દુખાવો અથવા છાતીમાં અસ્વસ્થતા હોય તો વહેલો રિવ્યુ કરો"],
      voiceText:
        "આ બ્લડ પ્રેશર પ્લાન લાગે છે. સવારે Telmisartan લો, રાત્રે Amlodipine લો, મીઠું ઓછું કરો અને બ્લડ પ્રેશર નિયમિત માપો.",
    },
  },
};

const ageSummary = {
  en: (age: string) => `For ${age}-year-old patients, gentle hydration and follow-up are especially important.`,
  hi: (age: string) => `${age} वर्ष के मरीजों के लिए पानी और फॉलो-अप पर विशेष ध्यान देना महत्वपूर्ण है।`,
  gu: (age: string) => `${age} વર્ષની ઉંમરના દર્દીઓ માટે પાણી અને ફોલો-અપ પર ખાસ ધ્યાન આપવું મહત્વપૂર્ણ છે.`,
} satisfies Record<Language, (age: string) => string>;

export function detectAnalysisKind(prescriptionText: string): AnalysisKind {
  const normalized = prescriptionText.toLowerCase();
  if (normalized.includes("metformin") || normalized.includes("glimepiride") || normalized.includes("sugar")) {
    return "diabetes";
  }
  if (
    normalized.includes("telmisartan") ||
    normalized.includes("amlodipine") ||
    normalized.includes("blood pressure") ||
    normalized.includes("bp")
  ) {
    return "bloodPressure";
  }
  return "infection";
}

export function getAnalysisResult(language: Language, age: string, prescriptionText: string): AnalysisResult {
  const result = analysisCatalog[language][detectAnalysisKind(prescriptionText)];
  if (!age.trim()) {
    return result;
  }

  return {
    ...result,
    summary: `${result.summary} ${ageSummary[language](age.trim())}`,
  };
}

export function getOcrSample(language: Language): string {
  return ocrSamples[language];
}

export function getHomeVoiceText(language: Language): string {
  return homeVoiceText[language];
}

export function getSettingsVoiceText(language: Language): string {
  return settingsVoiceText[language];
}


```

## src/components/AudioPlayer.tsx

`$ext
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { languageMeta } from "../data/content";
import { useLanguage } from "../context/AppProviders";
import { Language } from "../types";
import { GlassCard } from "./Feedback";
import { PauseIcon, PlayIcon, ReplayIcon, VolumeIcon } from "./Icons";

function pickVoice(voices: SpeechSynthesisVoice[], language: Language) {
  const locale = languageMeta[language].locale.toLowerCase();
  const languagePrefix = locale.split("-")[0];
  return (
    voices.find((voice) => voice.lang.toLowerCase() === locale) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith(languagePrefix)) ??
    voices.find((voice) => voice.default) ??
    null
  );
}

export function AudioPlayer({
  title,
  text,
  language,
  volume,
  onVolumeChange,
}: {
  title: string;
  text: string;
  language?: Language;
  volume?: number;
  onVolumeChange?: (volume: number) => void;
}) {
  const { t, language: globalLanguage } = useLanguage();
  const activeLanguage = language ?? globalLanguage;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [status, setStatus] = useState<"idle" | "speaking" | "paused" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [localVolume, setLocalVolume] = useState<number>(volume ?? 0.88);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setLocalVolume(volume ?? 0.88);
  }, [volume]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setErrorMessage(t("audioUnavailable"));
      setStatus("error");
      return;
    }

    const syncVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    syncVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", syncVoices);
    window.speechSynthesis.onvoiceschanged = syncVoices;
    const fallbackTimer = window.setTimeout(syncVoices, 500);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.speechSynthesis.removeEventListener?.("voiceschanged", syncVoices);
    };
  }, [t]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setStatus("idle");
  }, [text, activeLanguage]);

  const activeVoice = useMemo(() => pickVoice(voices, activeLanguage), [voices, activeLanguage]);

  const startSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !text.trim()) {
      setErrorMessage(t("audioUnavailable"));
      setStatus("error");
      return;
    }

    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("speaking");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMeta[activeLanguage].locale;
    utterance.rate = 0.96;
    utterance.pitch = 1.02;
    utterance.volume = localVolume;
    if (activeVoice) {
      utterance.voice = activeVoice;
    }

    utterance.onstart = () => {
      setErrorMessage("");
      setStatus("speaking");
    };
    utterance.onend = () => setStatus("idle");
    utterance.onpause = () => setStatus("paused");
    utterance.onresume = () => setStatus("speaking");
    utterance.onerror = () => {
      setErrorMessage(t("audioUnavailable"));
      setStatus("error");
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    window.speechSynthesis.pause();
    setStatus("paused");
  };

  const replaySpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    setStatus("idle");
    startSpeech();
  };

  const handleVolume = (next: number) => {
    setLocalVolume(next);
    if (utteranceRef.current) {
      utteranceRef.current.volume = next;
    }
    onVolumeChange?.(next);
  };

  return (
    <GlassCard className="audio-player-card">
      <div className="audio-headline">
        <div>
          <span className="eyebrow">{t("resultVoice")}</span>
          <h3>{title}</h3>
        </div>
        <span className={`status-pill ${status}`}>{status === "error" ? t("audioUnavailable") : languageMeta[activeLanguage].label}</span>
      </div>

      <div className="waveform" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.span
            key={index}
            className={`wave-bar ${status === "speaking" ? "active" : ""}`}
            animate={{
              scaleY: status === "speaking" ? [0.35, 1.15, 0.55, 0.95] : status === "paused" ? 0.3 : 0.2,
              opacity: status === "speaking" ? [0.45, 1, 0.65, 0.95] : 0.55,
            }}
            transition={{
              duration: 0.9,
              repeat: status === "speaking" ? Infinity : 0,
              delay: index * 0.06,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="audio-controls">
        <button type="button" className="button primary" onClick={startSpeech} disabled={!text.trim()}>
          {status === "paused" ? <PlayIcon size={18} /> : <PlayIcon size={18} />}
          {t("playLabel")}
        </button>
        <button type="button" className="button ghost" onClick={pauseSpeech} disabled={status !== "speaking"}>
          <PauseIcon size={18} />
          {t("pauseLabel")}
        </button>
        <button type="button" className="button ghost" onClick={replaySpeech} disabled={!text.trim()}>
          <ReplayIcon size={18} />
          {t("replayLabel")}
        </button>
      </div>

      <label className="range-row">
        <span>
          <VolumeIcon size={16} />
          {t("volumeLabel")}
        </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={localVolume}
          onChange={(event) => handleVolume(Number(event.target.value))}
        />
      </label>

      {errorMessage ? <p className="error-text compact">{errorMessage}</p> : null}
    </GlassCard>
  );
}

```

## src/components/AssistantDock.tsx

`$ext
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppData, useLanguage, useNotifications } from "../context/AppProviders";
import { GlassCard } from "./Feedback";
import { BellIcon, CloseIcon, MessageIcon, MicIcon, SendIcon, SparklesIcon, VolumeIcon } from "./Icons";
import { languageMeta } from "../data/content";
import { Language } from "../types";

type AssistantMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

type SpeechRecognitionCtor = new () => {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

declare global {
  interface Window {
    webkitSpeechRecognition?: SpeechRecognitionCtor;
    SpeechRecognition?: SpeechRecognitionCtor;
  }
}

function createId() {
  return `assistant-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function assistantWelcome(language: Language) {
  if (language === "hi") {
    return "à¤¨à¤®à¤¸à¥à¤¤à¥‡, à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¤¾ MedBuddy voice assistant à¤¹à¥‚à¤. à¤…à¤ªà¤¨à¥€ à¤­à¤¾à¤·à¤¾ à¤šà¥à¤¨à¤¿à¤ à¤”à¤° à¤®à¥à¤à¤¸à¥‡ à¤¦à¤µà¤¾, à¤¸à¤®à¤¯, à¤¸à¤¾à¤‡à¤¡ à¤‡à¤«à¥‡à¤•à¥à¤Ÿ à¤¯à¤¾ à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤° à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¥‚à¤›à¤¿à¤à¥¤";
  }
  if (language === "gu") {
    return "àª¨àª®àª¸à«àª¤à«‡, àª¹à«àª‚ àª¤àª®àª¾àª°à«‹ MedBuddy voice assistant àª›à«àª‚. àª¤àª®àª¾àª°à«€ àª­àª¾àª·àª¾ àªªàª¸àª‚àª¦ àª•àª°à«‹ àª…àª¨à«‡ àª¦àªµàª¾, àª¸àª®àª¯, àª¸àª¾àª‡àª¡ àª‡àª«à«‡àª•à«àªŸ àª…àª¥àªµàª¾ àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª° àªµàª¿àª¶à«‡ àªªà«‚àª›à«‹.";
  }
  return "Hello, I am your MedBuddy voice assistant. Choose your language and ask me about medicines, timings, side effects, or reminders.";
}

function takenPrompt(language: Language) {
  if (language === "hi") {
    return "à¤®à¥ˆà¤‚ à¤¦à¤µà¤¾ à¤•à¥‡ à¤¸à¤®à¤¯ à¤ªà¤° à¤†à¤ªà¤¸à¥‡ à¤ªà¥‚à¤›à¥‚à¤‚à¤—à¤¾ à¤•à¤¿ à¤¦à¤µà¤¾ à¤²à¥€ à¤¯à¤¾ à¤¨à¤¹à¥€à¤‚à¥¤";
  }
  if (language === "gu") {
    return "àª¹à«àª‚ àª¦àªµàª¾àª¨àª¾ àª¸àª®àª¯à«‡ àª¤àª®àª¨à«‡ àªªà«‚àª›àª¿àª¶ àª•à«‡ àª¦àªµàª¾ àª²à«€àª§à«€ àª•à«‡ àª¨àª¹à«€àª‚.";
  }
  return "I will ask you at medicine time whether you have taken it.";
}

function buildAssistantReply(language: Language, input: string, analysisText: string | null) {
  const query = input.toLowerCase();
  if (query.includes("language") || query.includes("à¤­à¤¾à¤·à¤¾") || query.includes("àª­àª¾àª·àª¾")) {
    return assistantWelcome(language);
  }
  if (query.includes("notification") || query.includes("reminder") || query.includes("à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤°") || query.includes("àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª°")) {
    if (language === "hi") {
      return "à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¥‡ à¤®à¥‡à¤¡à¤¿à¤¸à¤¿à¤¨ à¤¸à¤®à¤¯ à¤ªà¤° à¤†à¤µà¤¾à¤œà¤¼, à¤ªà¥‰à¤ªà¤…à¤ª à¤”à¤° à¤¦à¥‹à¤¬à¤¾à¤°à¤¾ à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤° à¤•à¥‡ à¤¸à¤¾à¤¥ à¤®à¤¦à¤¦ à¤•à¤°à¥‚à¤à¤—à¤¾à¥¤ à¤…à¤—à¤° à¤†à¤ªà¤¨à¥‡ à¤¦à¤µà¤¾ à¤¨à¤¹à¥€à¤‚ à¤²à¥€ à¤¤à¥‹ à¤®à¥ˆà¤‚ à¤«à¤¿à¤° à¤¸à¥‡ à¤¯à¤¾à¤¦ à¤¦à¤¿à¤²à¤¾ à¤¦à¥‚à¤à¤—à¤¾à¥¤";
    }
    if (language === "gu") {
      return "àª¹à«àª‚ àª¤àª®àª¨à«‡ àª¦àªµàª¾àª¨àª¾ àª¸àª®àª¯àª®àª¾àª‚ àª…àªµàª¾àªœ, àªªà«‹àªªàª…àªª àª…àª¨à«‡ àª«àª°à«€ àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª° àª¸àª¾àª¥à«‡ àª®àª¦àª¦ àª•àª°à«€àª¶. àª¤àª®à«‡ àª¦àªµàª¾ àª¨ àª²à«€àª§à«€ àª¹à«‹àª¯ àª¤à«‹ àª¹à«àª‚ àª«àª°à«€ àª¯àª¾àª¦ àª…àªªàª¾àªµà«€àª¶.";
    }
    return "I can help with on-time medicine alerts using sound, popup prompts, and repeat reminders if you have not taken the medicine yet.";
  }
  if (query.includes("medicine") || query.includes("à¤¦à¤µà¤¾") || query.includes("àª¦àªµàª¾")) {
    if (analysisText) {
      return analysisText;
    }
    if (language === "hi") {
      return "à¤…à¤­à¥€ à¤•à¥‹à¤ˆ à¤ªà¥à¤°à¤¿à¤¸à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤¶à¤¨ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¤à¥ˆà¤¯à¤¾à¤° à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ. à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚, à¤«à¤¿à¤° à¤®à¥ˆà¤‚ à¤¦à¤µà¤¾à¤“à¤‚ à¤”à¤° à¤¸à¤®à¤¯ à¤•à¥‹ à¤¸à¤®à¤à¤¾à¤Šà¤‚à¤—à¤¾à¥¤";
    }
    if (language === "gu") {
      return "àª¹àªœà« àªªà«àª°àª¿àª¸à«àª•à«àª°àª¿àªªà«àª¶àª¨ àªµàª¿àª¶à«àª²à«‡àª·àª£ àª¤à«ˆàª¯àª¾àª° àª¨àª¥à«€. àª«à«‹àªŸà«‹ àª…àªªàª²à«‹àª¡ àª•àª°à«‹, àªªàª›à«€ àª¹à«àª‚ àª¦àªµàª¾àª“ àª…àª¨à«‡ àª¸àª®àª¯ àª¸àª®àªœàª¾àªµà«€àª¶.";
    }
    return "There is no prescription analysis ready yet. Upload a photo first and I will explain the medicines and timings.";
  }
  if (query.includes("side effect") || query.includes("warning") || query.includes("à¤¸à¤¾à¤‡à¤¡") || query.includes("àªšà«‡àª¤àªµàª£à«€")) {
    if (analysisText) {
      return analysisText;
    }
  }

  if (language === "hi") {
    return "à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¥€ à¤¦à¤µà¤¾, à¤¸à¤®à¤¯, à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤°, à¤¸à¤¾à¤‡à¤¡ à¤‡à¤«à¥‡à¤•à¥à¤Ÿ à¤”à¤° à¤«à¥‰à¤²à¥‹-à¤…à¤ª à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥‚à¤. à¤†à¤ª à¤¬à¥‹à¤²à¤•à¤° à¤¯à¤¾ à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¤•à¥‡ à¤ªà¥‚à¤› à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤";
  }
  if (language === "gu") {
    return "àª¹à«àª‚ àª¤àª®àª¾àª°à«€ àª¦àªµàª¾, àª¸àª®àª¯, àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª°, àª¸àª¾àª‡àª¡ àª‡àª«à«‡àª•à«àªŸ àª…àª¨à«‡ àª«à«‹àª²à«‹-àª…àªªàª®àª¾àª‚ àª®àª¦àª¦ àª•àª°à«€ àª¶àª•à«àª‚ àª›à«àª‚. àª¤àª®à«‡ àª¬à«‹àª²à«€àª¨à«‡ àª•à«‡ àªŸàª¾àª‡àªª àª•àª°à«€àª¨à«‡ àªªà«‚àª›à«‹.";
  }
  return "I can help with your medicines, timings, reminders, side effects, and follow-up. You can speak or type your question.";
}

function speakText(text: string, language: Language) {
  if (!("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageMeta[language].locale;
  utterance.rate = 0.96;
  utterance.pitch = 1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

export function AssistantDock() {
  const { language, setLanguage } = useLanguage();
  const { latestAnalysis } = useAppData();
  const { notify } = useNotifications();
  const recognitionRef = useRef<InstanceType<SpeechRecognitionCtor> | null>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([
    { id: createId(), role: "assistant", text: assistantWelcome(language) },
    { id: createId(), role: "assistant", text: takenPrompt(language) },
  ]);

  useEffect(() => {
    setMessages([
      { id: createId(), role: "assistant", text: assistantWelcome(language) },
      { id: createId(), role: "assistant", text: takenPrompt(language) },
    ]);
  }, [language]);

  const analysisSummary = useMemo(() => {
    if (!latestAnalysis) {
      return null;
    }
    const meds = latestAnalysis.medicines.map((medicine) => `${medicine.name}: ${medicine.timing}. ${medicine.purpose}`).join(" ");
    return `${latestAnalysis.summary} ${meds}`;
  }, [latestAnalysis]);

  const pushReply = (text: string) => {
    setMessages((current) => [...current, { id: createId(), role: "assistant", text }]);
    speakText(text, language);
  };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [...current, { id: createId(), role: "user", text: trimmed }]);
    setInput("");
    const reply = buildAssistantReply(language, trimmed, analysisSummary);
    window.setTimeout(() => pushReply(reply), 240);
  };

  const startListening = () => {
    const Recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Recognition) {
      notify({ title: "Voice assistant", description: "Voice input is not available in this browser.", tone: "warning" });
      return;
    }

    const recognition = new Recognition();
    recognition.lang = languageMeta[language].locale;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => {
      setIsListening(false);
      notify({ title: "Voice assistant", description: "I could not hear clearly. Please try again.", tone: "warning" });
    };
    recognition.onend = () => {
      setIsListening(false);
    };
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  return (
    <>
      <button type="button" className="assistant-fab" onClick={() => setOpen(true)}>
        <SparklesIcon size={18} />
        Assistant
      </button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            className="assistant-shell"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
          >
            <GlassCard className="assistant-card">
              <div className="assistant-head">
                <div>
                  <span className="eyebrow">MedBuddy Assistant</span>
                  <h3>Voice + Chat help</h3>
                </div>
                <button type="button" className="icon-button subtle" onClick={() => setOpen(false)}>
                  <CloseIcon size={18} />
                </button>
              </div>

              <div className="assistant-language-row">
                {(["en", "hi", "gu"] as Language[]).map((entry) => (
                  <button key={entry} type="button" className={language === entry ? "language-pill active" : "language-pill"} onClick={() => setLanguage(entry)}>
                    {entry === "en" ? "EN" : entry === "hi" ? "à¤¹à¤¿à¤‚" : "àª—à«"}
                  </button>
                ))}
              </div>

              <div className="assistant-messages">
                {messages.map((message) => (
                  <div key={message.id} className={message.role === "assistant" ? "assistant-bubble assistant" : "assistant-bubble user"}>
                    {message.role === "assistant" ? <VolumeIcon size={14} /> : <MessageIcon size={14} />}
                    <span>{message.text}</span>
                  </div>
                ))}
              </div>

              <form className="assistant-form" onSubmit={handleSubmit}>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={language === "en" ? "Ask about medicines or reminders" : language === "hi" ? "à¤¦à¤µà¤¾ à¤¯à¤¾ à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤° à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¥‚à¤›à¥‡à¤‚" : "àª¦àªµàª¾ àª…àª¥àªµàª¾ àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª° àªµàª¿àª¶à«‡ àªªà«‚àª›à«‹"}
                />
                <div className="assistant-actions">
                  <button type="button" className={isListening ? "icon-button soft listening" : "icon-button soft"} onClick={startListening}>
                    <MicIcon size={16} />
                  </button>
                  <button type="submit" className="icon-button soft">
                    <SendIcon size={16} />
                  </button>
                </div>
              </form>

              <button type="button" className="button ghost full-width" onClick={() => pushReply(buildAssistantReply(language, "medicine", analysisSummary))}>
                <BellIcon size={16} />
                {language === "en" ? "Explain my medicines" : language === "hi" ? "à¤®à¥‡à¤°à¥€ à¤¦à¤µà¤¾à¤à¤‚ à¤¸à¤®à¤à¤¾à¤“" : "àª®àª¾àª°à«€ àª¦àªµàª¾àª“ àª¸àª®àªœàª¾àªµà«‹"}
              </button>
            </GlassCard>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

```

## src/components/Feedback.tsx

`$ext
import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes, ReactNode, createElement } from "react";
import { useNotifications } from "../context/AppProviders";
import { AlertIcon, BellIcon, CheckIcon, CloseIcon } from "./Icons";

type GlassCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "section" | "article" | "aside" | "div" | "header" | "nav";
};

export function GlassCard({ children, className = "", as = "section", ...props }: GlassCardProps) {
  const sharedClassName = `glass-card ${className}`.trim();
  return createElement(as, { ...props, className: sharedClassName }, children);
}

export function SectionIntro({ eyebrow, title, body }: { eyebrow?: string; title: string; body: string }) {
  return (
    <div className="section-intro">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export function LoadingPulse({ label }: { label: string }) {
  return (
    <div className="loading-panel" role="status" aria-live="polite">
      <div className="loading-orbit">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="loading-dot"
            animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.16, ease: "easeInOut" }}
          />
        ))}
      </div>
      <strong>{label}</strong>
    </div>
  );
}

export function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card glass-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <h3>{title}</h3>
              <button type="button" className="icon-button subtle" onClick={onClose} aria-label="Close modal">
                <CloseIcon size={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function NotificationStack() {
  const { toasts, dismiss } = useNotifications();

  return (
    <div className="toast-stack" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            className={`toast toast-${toast.tone ?? "info"}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="toast-icon">
              {toast.tone === "success" ? <CheckIcon size={18} /> : toast.tone === "warning" ? <AlertIcon size={18} /> : <BellIcon size={18} />}
            </div>
            <div className="toast-copy">
              <strong>{toast.title}</strong>
              <p>{toast.description}</p>
            </div>
            <button type="button" className="icon-button subtle" onClick={() => dismiss(toast.id)} aria-label="Dismiss notification">
              <CloseIcon size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

```

## src/components/Icons.tsx

`$ext
import { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function BaseIcon({ size = 20, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </BaseIcon>
  );
}

export function DashboardIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="11" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="18" width="7" height="3" rx="1.5" />
    </BaseIcon>
  );
}

export function ContactsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="11" r="3" />
      <path d="M5 19a3 3 0 0 1 3-3" />
      <path d="M19 19a3 3 0 0 0-3-3" />
    </BaseIcon>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 1.7 2.7 3.1.5-.8 3 2.2 2.3-2.2 2.3.8 3-3.1.5L12 21l-1.7-2.7-3.1-.5.8-3-2.2-2.3 2.2-2.3-.8-3 3.1-.5L12 3Z" />
      <circle cx="12" cy="12" r="3" />
    </BaseIcon>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </BaseIcon>
  );
}

export function VolumeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15 9a4 4 0 0 1 0 6" />
      <path d="M17.5 6.5a7.5 7.5 0 0 1 0 11" />
    </BaseIcon>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 6v12l10-6-10-6Z" />
    </BaseIcon>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 6h3v12H8z" />
      <path d="M13 6h3v12h-3z" />
    </BaseIcon>
  );
}

export function ReplayIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 4v6h6" />
      <path d="M20 20v-6h-6" />
      <path d="M20 10a8 8 0 0 0-14-4" />
      <path d="M4 14a8 8 0 0 0 14 4" />
    </BaseIcon>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3v12" />
      <path d="m7 8 5-5 5 5" />
      <path d="M5 16v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2" />
    </BaseIcon>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="m6 7 1 13h10l1-13" />
    </BaseIcon>
  );
}

export function EditIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 20h4l10-10-4-4L4 16v4Z" />
      <path d="m12 6 4 4" />
    </BaseIcon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.4l6-.9L12 3Z" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.5 4h3l1 4-2 1.5a14 14 0 0 0 5 5L16 12l4 1v3.5a2 2 0 0 1-2.2 2 17.8 17.8 0 0 1-12.3-12.3A2 2 0 0 1 7.5 4Z" />
    </BaseIcon>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4V6Z" />
    </BaseIcon>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 2.6 19.5A1 1 0 0 0 3.5 21h17a1 1 0 0 0 .9-1.5L12 3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4 4L19 6" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </BaseIcon>
  );
}

export function LogoutIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </BaseIcon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </BaseIcon>
  );
}

export function ReminderIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 10v4l2 2" />
      <path d="M7 3 4 6" />
      <path d="M17 3l3 3" />
    </BaseIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 2 1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z" />
      <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </BaseIcon>
  );
}

export function MicIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </BaseIcon>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 11.5 21 3l-6.5 18-3.5-6-8-3.5Z" />
      <path d="M21 3 11 13" />
    </BaseIcon>
  );
}


```

## src/components/Layout.tsx

`$ext
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import { useAuth, useLanguage } from "../context/AppProviders";
import { Language } from "../types";
import { GlassCard } from "./Feedback";
import {
  ContactsIcon,
  DashboardIcon,
  GlobeIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
} from "./Icons";

const languages: Language[] = ["en", "hi", "gu"];

export function BackgroundOrbs() {
  return (
    <div className="app-backdrop" aria-hidden="true">
      <span className="ambient-shape ambient-a" />
      <span className="ambient-shape ambient-b" />
      <span className="ambient-shape ambient-c" />
    </div>
  );
}

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`language-switcher ${compact ? "compact" : ""}`.trim()} role="group" aria-label="Language switcher">
      <span className="language-icon">
        <GlobeIcon size={16} />
      </span>
      {languages.map((entry) => (
        <button
          key={entry}
          type="button"
          className={language === entry ? "language-pill active" : "language-pill"}
          onClick={() => setLanguage(entry)}
        >
          {entry === "en" ? "EN" : entry === "hi" ? "हिं" : "ગુ"}
        </button>
      ))}
    </div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="page-shell"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

export function PublicHeader() {
  const { t } = useLanguage();
  const { user } = useAuth();

  return (
    <header className="public-header">
      <Link to="/" className="brand-link">
        <span className="brand-mark">M</span>
        <div>
          <strong>{t("brandTitle")}</strong>
          <span>{t("brandSubtitle")}</span>
        </div>
      </Link>
      <div className="public-actions">
        <LanguageSwitcher compact />
        {user ? (
          <Link className="button ghost" to="/dashboard">
            {t("navDashboard")}
          </Link>
        ) : (
          <>
            <Link className="button ghost" to="/login">
              {t("navLogin")}
            </Link>
            <Link className="button primary" to="/signup">
              {t("navSignup")}
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export function AppShell({ children }: PropsWithChildren) {
  const { t } = useLanguage();
  const { user, logout } = useAuth();

  const navItems = [
    { to: "/", label: t("navHome"), icon: HomeIcon },
    { to: "/dashboard", label: t("navDashboard"), icon: DashboardIcon },
    { to: "/contacts", label: t("navContacts"), icon: ContactsIcon },
    { to: "/settings", label: t("navSettings"), icon: SettingsIcon },
  ];

  return (
    <div className="app-shell">
      <GlassCard as="aside" className="sidebar">
        <Link to="/" className="brand-link brand-link-sidebar">
          <span className="brand-mark">M</span>
          <div>
            <strong>{t("brandTitle")}</strong>
            <span>{t("brandSubtitle")}</span>
          </div>
        </Link>
        <div className="sidebar-meta">
          <span className="eyebrow">{t("footerNote")}</span>
          <p>{user?.name ?? t("brandTitle")}</p>
        </div>
        <nav className="sidebar-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        <button type="button" className="button ghost full-width" onClick={logout}>
          <LogoutIcon size={18} />
          {t("navLogout")}
        </button>
      </GlassCard>

      <div className="shell-main">
        <GlassCard as="header" className="topbar">
          <div>
            <span className="eyebrow">{t("brandSubtitle")}</span>
            <h1>{user ? `${t("dashboardGreeting")}, ${user.name.split(" ")[0]}` : t("brandTitle")}</h1>
          </div>
          <div className="topbar-actions">
            <LanguageSwitcher compact />
            <div className="user-chip">
              <span>{user?.name?.[0] ?? "M"}</span>
              <div>
                <strong>{user?.name ?? t("brandTitle")}</strong>
                <small>{user?.email ?? t("brandSubtitle")}</small>
              </div>
            </div>
          </div>
        </GlassCard>
        <div className="shell-content">{children}</div>
      </div>

      <GlassCard as="nav" className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "mobile-nav-item active" : "mobile-nav-item")}>
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </GlassCard>
    </div>
  );
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export function GuestRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
}

export function RouteAnimator({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={location.pathname}>{children}</div>
    </AnimatePresence>
  );
}


```

## src/components/ReminderPrompt.tsx

`$ext
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppData, useLanguage, useNotifications } from "../context/AppProviders";
import { Modal } from "./Feedback";
import { BellIcon, CheckIcon, ReminderIcon } from "./Icons";

function askTaken(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤•à¥à¤¯à¤¾ à¤†à¤ªà¤¨à¥‡ à¤…à¤ªà¤¨à¥€ à¤¦à¤µà¤¾ à¤²à¥‡ à¤²à¥€?";
  }
  if (language === "gu") {
    return "àª¶à«àª‚ àª¤àª®à«‡ àª¤àª®àª¾àª°à«€ àª¦àªµàª¾ àª²àªˆ àª²à«€àª§à«€?";
  }
  return "Have you taken your medicine?";
}

function repeatCopy(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤«à¤¿à¤° à¤¸à¥‡ à¤¯à¤¾à¤¦ à¤¦à¤¿à¤²à¤¾à¤“";
  }
  if (language === "gu") {
    return "àª«àª°à«€ àª¯àª¾àª¦ àª…àªªàª¾àªµà«‹";
  }
  return "Remind me again";
}

function doneCopy(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤¹à¤¾à¤, à¤²à¥‡ à¤²à¥€";
  }
  if (language === "gu") {
    return "àª¹àª¾, àª²àªˆ àª²à«€àª§à«€";
  }
  return "Yes, taken";
}

function playReminderTone() {
  const AudioContextCtor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) {
    return;
  }
  const context = new AudioContextCtor();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = 880;
  gain.gain.value = 0.001;
  oscillator.connect(gain);
  gain.connect(context.destination);
  const now = context.currentTime;
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
  oscillator.start(now);
  oscillator.stop(now + 0.75);
}

export function ReminderPrompt() {
  const { activeReminder, confirmReminderTaken, snoozeReminder } = useAppData();
  const { language } = useLanguage();
  const { notify } = useNotifications();
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    if (!activeReminder) {
      return;
    }
    setTaken(false);
    playReminderTone();
  }, [activeReminder]);

  return (
    <AnimatePresence>
      {activeReminder ? (
        <Modal open={Boolean(activeReminder)} title={activeReminder.title} onClose={() => snoozeReminder(activeReminder.id, 10)}>
          <motion.div className="modal-body reminder-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="reminder-hero">
              <BellIcon size={20} />
              <div>
                <strong>{askTaken(language)}</strong>
                <p>{activeReminder.description}</p>
              </div>
            </div>

            <label className="taken-check-row">
              <input type="checkbox" checked={taken} onChange={(event) => setTaken(event.target.checked)} />
              <span>{doneCopy(language)}</span>
            </label>

            <div className="button-row">
              <button
                type="button"
                className="button primary"
                onClick={() => {
                  setTaken(true);
                  confirmReminderTaken(activeReminder.id);
                  notify({ title: activeReminder.title, description: doneCopy(language), tone: "success" });
                }}
              >
                <CheckIcon size={16} />
                {doneCopy(language)}
              </button>
              <button
                type="button"
                className="button ghost"
                onClick={() => {
                  snoozeReminder(activeReminder.id, 10);
                  notify({ title: activeReminder.title, description: repeatCopy(language), tone: "info" });
                }}
              >
                <ReminderIcon size={16} />
                {repeatCopy(language)}
              </button>
            </div>
          </motion.div>
        </Modal>
      ) : null}
    </AnimatePresence>
  );
}

```

## src/components/UploadDropzone.tsx

`$ext
import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { getOcrSample } from "../data/content";
import { useLanguage, useNotifications } from "../context/AppProviders";
import { GlassCard, LoadingPulse } from "./Feedback";
import { CloseIcon, ReplayIcon, UploadIcon } from "./Icons";

const supportedMimeTypes = ["image/jpeg", "image/png", "application/pdf"];
const supportedExtensions = [".jpg", ".jpeg", ".png", ".pdf"];

function isSupportedFile(file: File) {
  return supportedMimeTypes.includes(file.type) || supportedExtensions.some((entry) => file.name.toLowerCase().endsWith(entry));
}

function uploadBody(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ à¤”à¤° MedBuddy à¤¤à¥à¤°à¤‚à¤¤ à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ à¤ªà¤¢à¤¼à¤•à¤° à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤—à¤¾à¥¤";
  }
  if (language === "gu") {
    return "àª«à«‹àªŸà«‹ àª…àªªàª²à«‹àª¡ àª•àª°à«‹ àª…àª¨à«‡ MedBuddy àª¤àª°àª¤ àªŸà«‡àª•à«àª¸à«àªŸ àªµàª¾àª‚àªšà«€àª¨à«‡ àªµàª¿àª¶à«àª²à«‡àª·àª£ àª¶àª°à«‚ àª•àª°àª¶à«‡.";
  }
  return "Upload a prescription photo and MedBuddy will read it and start analysis right away.";
}

function uploadSuccess(language: "en" | "hi" | "gu", fileName: string) {
  if (language === "hi") {
    return `${fileName} à¤¸à¥‡ à¤ªà¥à¤°à¤¿à¤¸à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤¶à¤¨ à¤ªà¤¢à¤¼ à¤²à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ à¤”à¤° à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆà¥¤`;
  }
  if (language === "gu") {
    return `${fileName} àª®àª¾àª‚àª¥à«€ àªªà«àª°àª¿àª¸à«àª•à«àª°àª¿àªªà«àª¶àª¨ àªµàª¾àª‚àªšà«€ àª²à«‡àªµàª¾àª®àª¾àª‚ àª†àªµà«àª¯à«àª‚ àª›à«‡ àª…àª¨à«‡ àªµàª¿àª¶à«àª²à«‡àª·àª£ àª¶àª°à«‚ àª¥àªˆ àª—àª¯à«àª‚ àª›à«‡.`;
  }
  return `Prescription details were read from ${fileName} and analysis has started.`;
}

export function UploadDropzone({
  onExtractedText,
  onAnalysisReady,
}: {
  onExtractedText: (text: string) => void;
  onAnalysisReady?: (text: string, file: File) => void;
}) {
  const { language, t } = useLanguage();
  const { notify } = useNotifications();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [lastAttempt, setLastAttempt] = useState<File | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [previewUrl]);

  const updatePreview = (file: File | null) => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }

    if (file && file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const processFile = (file: File) => {
    setLastAttempt(file);
    if (!isSupportedFile(file)) {
      setErrorMessage(t("uploadUnsupported"));
      setSelectedFile(null);
      updatePreview(null);
      notify({ title: t("uploadTitle"), description: t("uploadUnsupported"), tone: "error" });
      return;
    }

    if (file.size === 0 || file.size > 8 * 1024 * 1024) {
      setErrorMessage(t("uploadGeneric"));
      setSelectedFile(file);
      updatePreview(file);
      notify({ title: t("uploadTitle"), description: t("uploadGeneric"), tone: "error" });
      return;
    }

    setSelectedFile(file);
    updatePreview(file);
    setErrorMessage("");
    setIsProcessing(true);
    notify({
      title: t("uploadTitle"),
      description: t("uploadReading"),
      tone: "info",
    });

    timeoutRef.current = window.setTimeout(() => {
      const extractedText = getOcrSample(language);
      onExtractedText(extractedText);
      onAnalysisReady?.(extractedText, file);
      notify({
        title: t("uploadTitle"),
        description: uploadSuccess(language, file.name),
        tone: "success",
      });
      setIsProcessing(false);
    }, 650);
  };

  const handleFile = (file: File | null) => {
    if (!file) {
      return;
    }
    processFile(file);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0] ?? null);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    handleFile(event.dataTransfer.files?.[0] ?? null);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setErrorMessage("");
    updatePreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <GlassCard className="upload-card">
      <div className="section-intro compact">
        <span className="eyebrow">{t("uploadTitle")}</span>
        <h3>{t("uploadTitle")}</h3>
        <p>{uploadBody(language)}</p>
      </div>

      <div
        className={`dropzone ${dragActive ? "drag-active" : ""}`.trim()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleInput}
          className="visually-hidden"
        />
        <UploadIcon size={26} />
        <strong>{dragActive ? t("uploadActive") : t("uploadIdle")}</strong>
        <small>JPG, PNG, PDF</small>
      </div>

      {isProcessing ? <LoadingPulse label={t("uploadReading")} /> : null}
      {errorMessage ? <p className="error-text">{errorMessage}</p> : null}

      {selectedFile ? (
        <div className="upload-preview-block">
          {previewUrl ? (
            <img src={previewUrl} alt="Uploaded prescription preview" className="upload-image-preview" />
          ) : (
            <div className="file-chip pdf-chip">
              <span>PDF</span>
              <strong>{selectedFile.name}</strong>
            </div>
          )}
          <div className="upload-actions">
            <button type="button" className="button ghost" onClick={removeFile}>
              <CloseIcon size={16} />
              {t("uploadRemove")}
            </button>
            <button type="button" className="button ghost" onClick={() => inputRef.current?.click()}>
              <UploadIcon size={16} />
              {t("uploadChange")}
            </button>
            {errorMessage && lastAttempt ? (
              <button type="button" className="button primary" onClick={() => processFile(lastAttempt)}>
                <ReplayIcon size={16} />
                {t("uploadRetry")}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </GlassCard>
  );
}

```

## src/pages/HomePage.tsx

`$ext
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getHomeVoiceText } from "../data/content";
import { useAppData, useAuth, useLanguage, useNotifications } from "../context/AppProviders";
import { AudioPlayer } from "../components/AudioPlayer";
import { GlassCard, Modal, SectionIntro } from "../components/Feedback";
import { PageTransition, PublicHeader } from "../components/Layout";
import { AlertIcon, BellIcon, MessageIcon, PhoneIcon, ShieldIcon, SparklesIcon } from "../components/Icons";

function emergencyAccessMessage(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤‡à¤®à¤°à¤œà¥‡à¤‚à¤¸à¥€ à¤…à¤²à¤°à¥à¤Ÿ à¤…à¤­à¥€ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸ à¤®à¥‡à¤‚ à¤¬à¤‚à¤¦ à¤¹à¥ˆà¥¤ à¤¸à¤‚à¤ªà¤°à¥à¤•à¥‹à¤‚ à¤•à¥‹ à¤¸à¥‚à¤šà¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤¸à¥‡ à¤«à¤¿à¤° à¤¸à¥‡ à¤šà¤¾à¤²à¥‚ à¤•à¤°à¥‡à¤‚à¥¤";
  }
  if (language === "gu") {
    return "àª‡àª®àª°àªœàª¨à«àª¸à«€ àª…àª²àª°à«àªŸ àª¹àª¾àª²àª®àª¾àª‚ àª¸à«‡àªŸàª¿àª‚àª—à«àª¸àª®àª¾àª‚ àª¬àª‚àª§ àª›à«‡. àª¸àª‚àªªàª°à«àª•à«‹àª¨à«‡ àªœàª¾àª£ àª•àª°àªµàª¾ àª®àª¾àªŸà«‡ àª¤à«‡àª¨à«‡ àª«àª°à«€ àªšàª¾àª²à« àª•àª°à«‹.";
  }
  return "Emergency alerts are paused in Settings. Re-enable access to notify contacts.";
}

function mapTitle(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤ªà¤¾à¤¸ à¤•à¥‡ à¤…à¤¸à¥à¤ªà¤¤à¤¾à¤²";
  }
  if (language === "gu") {
    return "àª¨àªœà«€àª•àª¨à«€ àª¹à«‹àª¸à«àªªàª¿àªŸàª²";
  }
  return "Nearby hospitals";
}

function mapBody(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤œà¤°à¥‚à¤°à¤¤ à¤ªà¤¡à¤¼à¤¨à¥‡ à¤ªà¤° Google Maps à¤®à¥‡à¤‚ à¤¤à¥à¤°à¤‚à¤¤ à¤¨à¤œà¤¼à¤¦à¥€à¤•à¥€ à¤…à¤¸à¥à¤ªà¤¤à¤¾à¤² à¤¦à¥‡à¤–à¥‡à¤‚à¥¤";
  }
  if (language === "gu") {
    return "àªœàª°à«‚àª° àªªàª¡à«‡ àª¤à«àª¯àª¾àª°à«‡ Google Maps àª®àª¾àª‚ àª¤àª°àª¤ àª¨àªœà«€àª•àª¨à«€ àª¹à«‹àª¸à«àªªàª¿àªŸàª² àªœà«àª“.";
  }
  return "Check nearby hospitals instantly in Google Maps when urgent care is needed.";
}

function sanitizePhone(phone?: string) {
  return (phone ?? "").replace(/[^\d+]/g, "");
}

function getMapSrc(coords: { latitude: number; longitude: number } | null) {
  if (coords) {
    return `https://www.google.com/maps?q=hospitals+near+${coords.latitude},${coords.longitude}&z=13&output=embed`;
  }

  return "https://www.google.com/maps?q=hospitals+near+me&z=12&output=embed";
}

function getMapHref(coords: { latitude: number; longitude: number } | null) {
  if (coords) {
    return `https://www.google.com/maps/search/?api=1&query=hospitals+near+${coords.latitude},${coords.longitude}`;
  }

  return "https://www.google.com/maps/search/?api=1&query=hospitals+near+me";
}

export function HomePage() {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { contacts, settings } = useAppData();
  const { notify } = useNotifications();
  const [modalOpen, setModalOpen] = useState(false);
  const [alertState, setAlertState] = useState<"idle" | "sending" | "success">("idle");
  const [smsDone, setSmsDone] = useState(false);
  const [doctorDone, setDoctorDone] = useState(false);
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      () => {
        setCoords(null);
      },
      { maximumAge: 600000, timeout: 5000 },
    );
  }, []);

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const primaryDoctor = useMemo(
    () => contacts.find((entry) => entry.type === "doctor" && entry.isPrimary) ?? contacts.find((entry) => entry.type === "doctor"),
    [contacts],
  );
  const primaryFamily = useMemo(
    () => contacts.find((entry) => entry.type === "family" && entry.isPrimary) ?? contacts.find((entry) => entry.type === "family"),
    [contacts],
  );

  const smsHref = `sms:${sanitizePhone(primaryFamily?.phone)}?body=${encodeURIComponent("MedBuddy emergency alert: please call me now.")}`;
  const callHref = `tel:${sanitizePhone(primaryDoctor?.phone)}`;

  const startEmergencyFlow = () => {
    if (!settings.emergencyOptIn) {
      notify({
        title: t("emergencyTitle"),
        description: emergencyAccessMessage(language),
        tone: "warning",
      });
      setModalOpen(false);
      return;
    }

    setAlertState("sending");
    setSmsDone(false);
    setDoctorDone(false);
    notify({ title: t("emergencyTitle"), description: "Emergency workflow started.", tone: "warning" });

    timers.current = [
      window.setTimeout(() => {
        setSmsDone(true);
        notify({
          title: t("emergencySmsStep"),
          description: primaryFamily?.phone ?? primaryFamily?.name ?? "",
          tone: "info",
        });
      }, 500),
      window.setTimeout(() => {
        setDoctorDone(true);
        notify({
          title: t("emergencyDoctorStep"),
          description: primaryDoctor?.phone ?? primaryDoctor?.specialty ?? primaryDoctor?.name ?? "",
          tone: "info",
        });
      }, 1000),
      window.setTimeout(() => {
        setAlertState("success");
        notify({
          title: t("emergencyTitle"),
          description: t("emergencySuccess"),
          tone: "success",
        });
      }, 1500),
    ];
  };

  return (
    <PageTransition>
      <div className="page-wrap public-page">
        <PublicHeader />

        <section className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{t("homeEyebrow")}</span>
            <h1>{t("homeTitle")}</h1>
            <p>{t("homeBody")}</p>
            <div className="button-row">
              <Link className="button primary" to={user ? "/dashboard" : "/login"}>
                <SparklesIcon size={18} />
                {t("homePrimaryCta")}
              </Link>
              {!user ? (
                <Link className="button ghost" to="/signup">
                  {t("homeSecondaryCta")}
                </Link>
              ) : null}
            </div>
            <div className="hero-stats">
              <GlassCard as="article" className="stat-card">
                <strong>3</strong>
                <span>Languages</span>
              </GlassCard>
              <GlassCard as="article" className="stat-card">
                <strong>24/7</strong>
                <span>Voice playback</span>
              </GlassCard>
              <GlassCard as="article" className="stat-card">
                <strong>Local</strong>
                <span>Privacy-first storage</span>
              </GlassCard>
            </div>
          </div>

          <motion.div className="hero-side" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard className="emergency-spotlight alert-soft">
              <div className="spotlight-head">
                <span className="badge-pill warning">
                  <AlertIcon size={16} />
                  {t("emergencyBadge")}
                </span>
                <h2>{t("emergencyTitle")}</h2>
                <p>{t("emergencyBody")}</p>
              </div>
              <div className="emergency-contacts">
                <div>
                  <MessageIcon size={18} />
                  <div>
                    <strong>{primaryFamily?.name ?? "Family"}</strong>
                    <span>{primaryFamily?.phone ?? "+91 98xxxx4321"}</span>
                  </div>
                </div>
                <div>
                  <PhoneIcon size={18} />
                  <div>
                    <strong>{primaryDoctor?.name ?? "Doctor"}</strong>
                    <span>{primaryDoctor?.specialty ?? "Primary care"}</span>
                  </div>
                </div>
              </div>
              <button type="button" className="button primary full-width" onClick={() => setModalOpen(true)}>
                <BellIcon size={18} />
                {t("emergencyButton")}
              </button>
              <div className="button-row">
                <a className="button ghost" href={smsHref}>
                  <MessageIcon size={16} />
                  SMS family
                </a>
                <a className="button ghost" href={callHref}>
                  <PhoneIcon size={16} />
                  Call doctor
                </a>
              </div>
            </GlassCard>

            <GlassCard className="map-card">
              <SectionIntro eyebrow={mapTitle(language)} title={mapTitle(language)} body={mapBody(language)} />
              <iframe
                className="hospital-map"
                src={getMapSrc(coords)}
                title="Nearby hospitals map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a className="button ghost full-width" href={getMapHref(coords)} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </GlassCard>
          </motion.div>
        </section>

        <section className="feature-grid three-up">
          <GlassCard as="article">
            <SectionIntro eyebrow={t("homeWellnessTitle")} title={t("homeWellnessTitle")} body={t("homeWellnessBody")} />
            <AudioPlayer title={t("homeWellnessTitle")} text={getHomeVoiceText(language)} />
          </GlassCard>
          <GlassCard as="article">
            <SectionIntro eyebrow={t("trustTitle")} title={t("trustTitle")} body={t("trustBody")} />
            <ul className="feature-list">
              <li>
                <ShieldIcon size={18} />
                {t("trustPointOne")}
              </li>
              <li>
                <ShieldIcon size={18} />
                {t("trustPointTwo")}
              </li>
              <li>
                <ShieldIcon size={18} />
                {t("trustPointThree")}
              </li>
            </ul>
          </GlassCard>
          <GlassCard as="article">
            <SectionIntro eyebrow="Trust" title={t("brandSubtitle")} body={t("disclaimer")} />
            <div className="feature-list compact-list">
              <div>
                <SparklesIcon size={18} />
                <span>User-controlled reminders and alerts</span>
              </div>
              <div>
                <SparklesIcon size={18} />
                <span>Clear text-to-speech in English, Hindi, Gujarati</span>
              </div>
              <div>
                <SparklesIcon size={18} />
                <span>Not a replacement for doctors or emergency services</span>
              </div>
            </div>
          </GlassCard>
        </section>

        <Modal open={modalOpen} title={t("emergencyModalTitle")} onClose={() => setModalOpen(false)}>
          {alertState === "idle" ? (
            <div className="modal-body">
              <p>{t("emergencyModalBody")}</p>
              <div className="modal-steps">
                <div className="timeline-step">
                  <MessageIcon size={18} />
                  <span>{primaryFamily?.name ?? "Family contact"}</span>
                </div>
                <div className="timeline-step">
                  <PhoneIcon size={18} />
                  <span>{primaryDoctor?.name ?? "Doctor"}</span>
                </div>
              </div>
              <div className="button-row end">
                <button type="button" className="button ghost" onClick={() => setModalOpen(false)}>
                  {t("emergencyCancel")}
                </button>
                <button type="button" className="button primary" onClick={startEmergencyFlow}>
                  {t("emergencyConfirm")}
                </button>
              </div>
            </div>
          ) : null}

          {alertState === "sending" ? (
            <div className="modal-body">
              <div className="loading-panel inline">
                <div className="loading-orbit small">
                  <span className="loading-dot" />
                  <span className="loading-dot" />
                  <span className="loading-dot" />
                </div>
                <strong>{t("emergencyTitle")}</strong>
              </div>
              <div className="modal-steps vertical">
                <div className={`timeline-step ${smsDone ? "done" : ""}`}>
                  <MessageIcon size={18} />
                  <span>{t("emergencySmsStep")}</span>
                </div>
                <div className={`timeline-step ${doctorDone ? "done" : ""}`}>
                  <PhoneIcon size={18} />
                  <span>{t("emergencyDoctorStep")}</span>
                </div>
              </div>
            </div>
          ) : null}

          {alertState === "success" ? (
            <div className="modal-body success-pane">
              <motion.div className="success-badge" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <ShieldIcon size={24} />
              </motion.div>
              <h4>{t("emergencySuccess")}</h4>
              <p>{t("disclaimer")}</p>
              <div className="button-row">
                <a className="button ghost" href={smsHref}>
                  <MessageIcon size={16} />
                  Open SMS
                </a>
                <a className="button ghost" href={callHref}>
                  <PhoneIcon size={16} />
                  Call doctor
                </a>
              </div>
              <button
                type="button"
                className="button primary"
                onClick={() => {
                  setModalOpen(false);
                  setAlertState("idle");
                }}
              >{language === "en" ? "Done" : language === "hi" ? "à¤ªà¥‚à¤°à¤¾ à¤¹à¥à¤†" : "àªªà«‚àª°à«àª£ àª¥àª¯à«àª‚"}</button>
            </div>
          ) : null}
        </Modal>
      </div>
    </PageTransition>
  );
}

```

## src/pages/LoginPage.tsx

`$ext
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlassCard } from "../components/Feedback";
import { PageTransition, PublicHeader } from "../components/Layout";
import { ShieldIcon } from "../components/Icons";
import { useAuth, useLanguage, useNotifications } from "../context/AppProviders";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();
  const { notify } = useNotifications();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage(t("authRequired"));
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(t("authInvalidEmail"));
      return;
    }

    setIsSubmitting(true);
    try {
      await login(email.trim(), password);
      notify({ title: t("authSuccess"), description: t("dashboardBody"), tone: "success" });
      navigate("/dashboard");
    } catch {
      setErrorMessage(t("authLoginError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="page-wrap public-page auth-page">
        <PublicHeader />
        <div className="auth-grid">
          <GlassCard className="auth-panel feature-panel">
            <span className="eyebrow">{t("brandSubtitle")}</span>
            <h1>{t("authLoginTitle")}</h1>
            <p>{t("authLoginBody")}</p>
            <div className="feature-list compact-list">
              <div>
                <ShieldIcon size={18} />
                <span>{t("trustPointOne")}</span>
              </div>
              <div>
                <ShieldIcon size={18} />
                <span>{t("trustPointTwo")}</span>
              </div>
              <div>
                <ShieldIcon size={18} />
                <span>{t("trustPointThree")}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="auth-panel form-panel">
            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                <span>{t("emailLabel")}</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
              </label>
              <label>
                <span>{t("passwordLabel")}</span>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
              </label>
              {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
              <button type="submit" className="button primary full-width" disabled={isSubmitting}>
                {isSubmitting ? "..." : t("loginButton")}
              </button>
            </form>
            <p className="auth-switch-copy">
              {t("authSwitchSignup")} <Link to="/signup">{t("navSignup")}</Link>
            </p>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
}

```

## src/pages/SignupPage.tsx

`$ext
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlassCard } from "../components/Feedback";
import { PageTransition, PublicHeader } from "../components/Layout";
import { SparklesIcon } from "../components/Icons";
import { useAuth, useLanguage, useNotifications } from "../context/AppProviders";

export function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { t } = useLanguage();
  const { notify } = useNotifications();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage(t("authRequired"));
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(t("authInvalidEmail"));
      return;
    }

    if (password.length < 6) {
      setErrorMessage(t("authPasswordShort"));
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(t("authPasswordMismatch"));
      return;
    }

    setIsSubmitting(true);
    try {
      await signup({ name: name.trim(), email: email.trim(), password, age: age.trim() });
      notify({ title: t("authSuccess"), description: t("homeBody"), tone: "success" });
      navigate("/dashboard");
    } catch {
      setErrorMessage(t("authSignupExists"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="page-wrap public-page auth-page">
        <PublicHeader />
        <div className="auth-grid">
          <GlassCard className="auth-panel feature-panel">
            <span className="eyebrow">{t("brandSubtitle")}</span>
            <h1>{t("authSignupTitle")}</h1>
            <p>{t("authSignupBody")}</p>
            <div className="feature-list compact-list">
              <div>
                <SparklesIcon size={18} />
                <span>{t("homeWellnessBody")}</span>
              </div>
              <div>
                <SparklesIcon size={18} />
                <span>{t("trustPointTwo")}</span>
              </div>
              <div>
                <SparklesIcon size={18} />
                <span>{t("disclaimer")}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="auth-panel form-panel">
            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                <span>{t("nameLabel")}</span>
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Aarav Patel" />
              </label>
              <div className="inline-fields">
                <label>
                  <span>{t("emailLabel")}</span>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
                </label>
                <label>
                  <span>{t("ageLabel")}</span>
                  <input value={age} onChange={(event) => setAge(event.target.value)} placeholder="62" />
                </label>
              </div>
              <label>
                <span>{t("passwordLabel")}</span>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
              </label>
              <label>
                <span>{t("confirmPasswordLabel")}</span>
                <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="••••••••" />
              </label>
              {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
              <button type="submit" className="button primary full-width" disabled={isSubmitting}>
                {isSubmitting ? "..." : t("signupButton")}
              </button>
            </form>
            <p className="auth-switch-copy">
              {t("authSwitchLogin")} <Link to="/login">{t("navLogin")}</Link>
            </p>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
}

```

## src/pages/DashboardPage.tsx

`$ext
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import QRCode from "qrcode";
import { AudioPlayer } from "../components/AudioPlayer";
import { GlassCard, LoadingPulse, SectionIntro } from "../components/Feedback";
import { LanguageSwitcher, PageTransition } from "../components/Layout";
import { UploadDropzone } from "../components/UploadDropzone";
import { BellIcon, CheckIcon, ReminderIcon, ReplayIcon, SparklesIcon } from "../components/Icons";
import { useAppData, useAuth, useLanguage, useNotifications } from "../context/AppProviders";
import { getAnalysisResult, languageMeta } from "../data/content";
import { AnalysisResult, Language } from "../types";

function reminderInfo(language: Language) {
  if (language === "hi") {
    return "à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤° à¤¸à¤®à¤¯ à¤ªà¤° à¤ªà¥‰à¤ª-à¤…à¤ª à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡à¤—à¤¾à¥¤";
  }
  if (language === "gu") {
    return "àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª° àª¸àª®àª¯ àª†àªµà«‡ àª¤à«àª¯àª¾àª°à«‡ àªªà«‹àªª-àª…àªª àª¤àª°à«€àª•à«‡ àª¦à«‡àª–àª¾àª¶à«‡.";
  }
  return "The reminder will appear as a popup at the scheduled time.";
}

function dashboardHint(language: Language) {
  if (language === "hi") {
    return "à¤…à¤¬ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ. à¤«à¥‹à¤Ÿà¥‹ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¤à¥‡ à¤¹à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾à¥¤";
  }
  if (language === "gu") {
    return "àª¹àªµà«‡ àªªà«‡àª¸à«àªŸ àª•àª°àªµàª¾àª¨à«€ àªœàª°à«‚àª° àª¨àª¥à«€. àª«à«‹àªŸà«‹ àª…àªªàª²à«‹àª¡ àª¥àª¤àª¾àª‚ àªœ àªµàª¿àª¶à«àª²à«‡àª·àª£ àª¶àª°à«‚ àª¥àª¶à«‡.";
  }
  return "No pasted notes needed now. Upload a prescription photo and analysis starts automatically.";
}

function extractedHeading(language: Language) {
  if (language === "hi") {
    return "à¤«à¥‹à¤Ÿà¥‹ à¤¸à¥‡ à¤ªà¤¢à¤¼à¤¾ à¤—à¤¯à¤¾ à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ";
  }
  if (language === "gu") {
    return "àª«à«‹àªŸàª¾àª®àª¾àª‚àª¥à«€ àªµàª¾àª‚àªšàª¾àª¯à«‡àª² àªŸà«‡àª•à«àª¸à«àªŸ";
  }
  return "Read from uploaded photo";
}

function analysisDoneText(language: Language, fileName: string) {
  if (language === "hi") {
    return `${fileName} à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¥‚à¤°à¤¾ à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¦à¤µà¤¾ à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤° à¤¤à¥ˆà¤¯à¤¾à¤° à¤¹à¥ˆà¤‚à¥¤`;
  }
  if (language === "gu") {
    return `${fileName} àª¨à«àª‚ àªµàª¿àª¶à«àª²à«‡àª·àª£ àªªà«‚àª°à«àª‚ àª¥àª¯à«àª‚ àª›à«‡ àª…àª¨à«‡ àª¦àªµàª¾àª¨àª¾ àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª° àª¤à«ˆàª¯àª¾àª° àª›à«‡.`;
  }
  return `${fileName} has been analyzed and the medicine reminders are ready.`;
}

function autoReminderSummary(language: Language, count: number) {
  if (language === "hi") {
    return `${count} à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤° à¤¸à¤®à¤¯ à¤ªà¤° à¤ªà¥‰à¤ª-à¤…à¤ª à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥ˆà¤¯à¤¾à¤° à¤•à¤¿à¤ à¤—à¤ à¤¹à¥ˆà¤‚à¥¤`;
  }
  if (language === "gu") {
    return `${count} àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª° àª¸àª®àª¯àª¸àª° àªªà«‹àªª-àª…àªª àª®àª¾àªŸà«‡ àª¤à«ˆàª¯àª¾àª° àª•àª°àªµàª¾àª®àª¾àª‚ àª†àªµà«àª¯àª¾ àª›à«‡.`;
  }
  return `${count} reminders were prepared for timed popups.`;
}

function scheduleButtonCopy(language: Language, time: string) {
  if (language === "hi") {
    return `${time} à¤•à¥‡ à¤²à¤¿à¤ à¤°à¤¿à¤®à¤¾à¤‡à¤‚à¤¡à¤°`;
  }
  if (language === "gu") {
    return `${time} àª®àª¾àªŸà«‡ àª°àª¿àª®àª¾àª‡àª¨à«àª¡àª°`;
  }
  return `Reminder for ${time}`;
}

function waterReminderCopy(language: Language) {
  if (language === "hi") {
    return "30 à¤®à¤¿à¤¨à¤Ÿ à¤¬à¤¾à¤¦ à¤ªà¤¾à¤¨à¥€ à¤ªà¥€à¤¨à¥‡ à¤•à¥€ à¤¯à¤¾à¤¦ à¤¦à¤¿à¤²à¤¾à¤à¤‚";
  }
  if (language === "gu") {
    return "30 àª®àª¿àª¨àª¿àªŸ àªªàª›à«€ àªªàª¾àª£à«€ àªªà«€àªµàª¾àª¨à«àª‚ àª¯àª¾àª¦ àª…àªªàª¾àªµà«‹";
  }
  return "Remind me to drink water in 30 minutes";
}

function nextOccurrenceTimestamp(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const scheduledAt = new Date();
  scheduledAt.setSeconds(0, 0);
  scheduledAt.setHours(hours, minutes, 0, 0);

  if (scheduledAt.getTime() <= Date.now()) {
    scheduledAt.setDate(scheduledAt.getDate() + 1);
  }

  return scheduledAt.getTime();
}

function formatClock(time: string, language: Language) {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat(languageMeta[language].locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function DashboardPage() {
  const { user } = useAuth();
  const { settings, updateSettings, scheduleReminder, setLatestAnalysis, saveDoctorReport, medicineStocks, restockMedicine, syncMedicineStockFromAnalysis } = useAppData();
  const { t, language } = useLanguage();
  const { notify } = useNotifications();
  const analyzeTimer = useRef<number | null>(null);
  const [prescription, setPrescription] = useState("");
  const [lastUploadName, setLastUploadName] = useState("");
  const [age, setAge] = useState(user?.age ?? "");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [doctorReportUrl, setDoctorReportUrl] = useState("");
  const [doctorQr, setDoctorQr] = useState("");

  useEffect(() => {
    return () => {
      if (analyzeTimer.current) {
        window.clearTimeout(analyzeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!prescription.trim() || isAnalyzing) {
      return;
    }

    const nextAnalysis = getAnalysisResult(language, age, prescription);
    setAnalysis(nextAnalysis);
    setLatestAnalysis(nextAnalysis);
  }, [language, age, prescription, isAnalyzing]);

  useEffect(() => {
    if (!doctorReportUrl) {
      setDoctorQr("");
      return;
    }

    QRCode.toDataURL(doctorReportUrl, {
      margin: 1,
      width: 220,
      color: {
        dark: "#22304d",
        light: "#ffffff",
      },
    }).then(setDoctorQr);
  }, [doctorReportUrl]);

  const insightHighlights = useMemo(() => {
    if (!analysis) {
      return [];
    }
    return [analysis.diagnosis, analysis.medicines[0]?.timing, analysis.followUp[0]].filter(Boolean);
  }, [analysis]);

  const scheduleTimedReminder = (title: string, description: string, scheduledFor: number, source: "medicine" | "checklist" | "hydration" | "system") => {
    if (!settings.remindersEnabled) {
      notify({ title: t("settingsReminders"), description: t("reminderDisabled"), tone: "warning" });
      return;
    }

    scheduleReminder({
      title,
      description,
      scheduledFor,
      source,
    });
  };

  const scheduleMedicineReminder = (medicineName: string, time: string, purpose: string) => {
    const formattedTime = formatClock(time, language);
    scheduleTimedReminder(
      medicineName,
      `${scheduleButtonCopy(language, formattedTime)}. ${purpose}. ${reminderInfo(language)}`,
      nextOccurrenceTimestamp(time),
      "medicine",
    );
    notify({
      title: medicineName,
      description: `${formattedTime}. ${reminderInfo(language)}`,
      tone: "success",
    });
  };

  const scheduleWaterReminder = () => {
    const target = Date.now() + 30 * 60 * 1000;
    scheduleTimedReminder(t("notificationWater"), reminderInfo(language), target, "hydration");
    notify({
      title: t("notificationWater"),
      description: waterReminderCopy(language),
      tone: "success",
    });
  };

  const queueAutomaticReminders = (nextAnalysis: AnalysisResult) => {
    if (!settings.remindersEnabled) {
      return;
    }

    let reminderCount = 0;
    nextAnalysis.medicines.forEach((medicine) => {
      medicine.scheduleTimes.forEach((time) => {
        scheduleTimedReminder(
          medicine.name,
          `${scheduleButtonCopy(language, formatClock(time, language))}. ${medicine.purpose}. ${reminderInfo(language)}`,
          nextOccurrenceTimestamp(time),
          "medicine",
        );
        reminderCount += 1;
      });
    });

    scheduleTimedReminder(t("notificationWater"), reminderInfo(language), Date.now() + 30 * 60 * 1000, "hydration");
    reminderCount += 1;
    notify({ title: t("reminderScheduledTitle"), description: autoReminderSummary(language, reminderCount), tone: "info" });
  };

  const handlePhotoAnalysis = (extractedText: string, file: File) => {
    setPrescription(extractedText);
    setLastUploadName(file.name);
    setErrorMessage("");
    setIsAnalyzing(true);
    setAnalysis(null);
    setCompleted([]);

    if (analyzeTimer.current) {
      window.clearTimeout(analyzeTimer.current);
    }

    analyzeTimer.current = window.setTimeout(() => {
      const nextAnalysis = getAnalysisResult(language, age, extractedText);
      const report = saveDoctorReport({ language, prescriptionText: extractedText, analysis: nextAnalysis });
      setAnalysis(nextAnalysis);
      setLatestAnalysis(nextAnalysis);
      syncMedicineStockFromAnalysis(nextAnalysis);
      setDoctorReportUrl(`${window.location.origin}/doctor-report/${report.id}`);
      setIsAnalyzing(false);
      queueAutomaticReminders(nextAnalysis);
      notify({
        title: t("resultSummary"),
        description: analysisDoneText(language, file.name),
        tone: "success",
      });
  }, 850);
  };

  const handleReanalyze = () => {
    if (!prescription.trim()) {
      setErrorMessage(dashboardHint(language));
      return;
    }

    handlePhotoAnalysis(prescription, new File(["medbuddy"], lastUploadName || "prescription-photo.jpg", { type: "image/jpeg" }));
  };

  const toggleChecklist = (id: string) => {
    setCompleted((current) => {
      const exists = current.includes(id);
      const next = exists ? current.filter((entry) => entry !== id) : [...current, id];
      if (!exists) {
        notify({ title: t("checklistDone"), description: t("resultChecklist"), tone: "success" });
      }
      return next;
    });
  };

  const scheduleChecklistReminder = (message: string) => {
    const scheduledFor = Date.now() + 15 * 60 * 1000;
    scheduleTimedReminder(message, reminderInfo(language), scheduledFor, "checklist");
    notify({ title: message, description: reminderInfo(language), tone: "success" });
  };

  return (
    <PageTransition>
      <div className="page-wrap app-page">
        <section className="dashboard-grid">
          <GlassCard className="dashboard-form-card">
            <SectionIntro eyebrow={t("dashboardGreeting")} title={t("dashboardTitle")} body={t("dashboardBody")} />
            <div className="inline-panel">
              <div>
                <span className="field-label">{t("languageLabel")}</span>
                <LanguageSwitcher />
              </div>
              <label className="compact-field">
                <span>{t("ageLabel")}</span>
                <input value={age} onChange={(event) => setAge(event.target.value)} placeholder="62" />
                <small>{t("ageHelper")}</small>
              </label>
            </div>

            <GlassCard className="photo-only-banner">
              <div className="feature-list compact-list">
                <div>
                  <SparklesIcon size={18} />
                  <span>{dashboardHint(language)}</span>
                </div>
              </div>
            </GlassCard>

            <UploadDropzone onExtractedText={setPrescription} onAnalysisReady={handlePhotoAnalysis} />

            {prescription ? (
              <div className="ocr-preview">
                <span className="field-label">{extractedHeading(language)}</span>
                <p>{prescription}</p>
              </div>
            ) : null}

            {errorMessage ? <p className="error-text">{errorMessage}</p> : null}

            <div className="button-row space-between">
              <div className="button-group-soft">
                <button type="button" className="button ghost" onClick={scheduleWaterReminder}>
                  <BellIcon size={16} />
                  {t("notificationWater")}
                </button>
              </div>
              <button type="button" className="button primary" onClick={handleReanalyze}>
                <ReplayIcon size={18} />
                {lastUploadName ? `${t("analyzeButton")} again` : t("analyzeButton")}
              </button>
            </div>
          </GlassCard>

          <div className="results-column">
            {isAnalyzing ? (
              <GlassCard className="result-card hero-result loading-card">
                <LoadingPulse label={t("analyzingLabel")} />
              </GlassCard>
            ) : null}

            {!analysis && !isAnalyzing ? (
              <GlassCard className="result-card hero-result placeholder-card">
                <SectionIntro eyebrow={t("resultSummary")} title={t("dashboardTitle")} body={dashboardHint(language)} />
                <div className="feature-list compact-list">
                  <div>
                    <CheckIcon size={18} />
                    <span>{t("resultDiagnosis")}</span>
                  </div>
                  <div>
                    <CheckIcon size={18} />
                    <span>{t("resultMedicines")}</span>
                  </div>
                  <div>
                    <CheckIcon size={18} />
                    <span>{t("resultSideEffects")}</span>
                  </div>
                  <div>
                    <CheckIcon size={18} />
                    <span>{t("resultChecklist")}</span>
                  </div>
                </div>
              </GlassCard>
            ) : null}

            {analysis ? (
              <>
                <GlassCard className="result-card hero-result">
                  <span className="eyebrow">{t("resultSummary")}</span>
                  <h2>{analysis.diagnosis}</h2>
                  <p>{analysis.summary}</p>
                  <div className="pill-row">
                    {insightHighlights.map((item) => (
                      <span key={item} className="info-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>

                <AudioPlayer
                  title={t("resultVoice")}
                  text={analysis.voiceText}
                  volume={settings.masterVolume}
                  onVolumeChange={(nextVolume) => updateSettings({ masterVolume: nextVolume })}
                />

                <div className="result-grid two-col">
                  <GlassCard className="result-card">
                    <h3>{t("resultMedicines")}</h3>
                    <div className="medicine-list">
                      {analysis.medicines.map((medicine) => (
                        <motion.article key={medicine.id} className="medicine-card" whileHover={{ y: -4 }}>
                          <strong>{medicine.name}</strong>
                          <span>{medicine.timing}</span>
                          <p>{medicine.purpose}</p>
                          <div className="timing-row">
                            {medicine.scheduleTimes.map((time) => (
                              <button
                                key={time}
                                type="button"
                                className="time-pill"
                                onClick={() => scheduleMedicineReminder(medicine.name, time, medicine.purpose)}
                              >
                                <BellIcon size={14} />
                                {formatClock(time, language)}
                              </button>
                            ))}
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="result-card">
                    <h3>{t("resultSideEffects")}</h3>
                    <ul className="bullet-list">
                      {analysis.sideEffects.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                    <h3 className="subheading">{t("resultWarnings")}</h3>
                    <ul className="bullet-list warning-list">
                      {analysis.warningSigns.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>

                <GlassCard className="result-card checklist-card">
                  <h3>{t("resultChecklist")}</h3>
                  <div className="checklist-list">
                    {analysis.checklist.map((item) => {
                      const done = completed.includes(item.id);
                      return (
                        <motion.div key={item.id} className={`checklist-item ${done ? "done" : ""}`.trim()} layout>
                          <label>
                            <input type="checkbox" checked={done} onChange={() => toggleChecklist(item.id)} />
                            <span>{item.label}</span>
                          </label>
                          <button type="button" className="icon-button soft" onClick={() => scheduleChecklistReminder(item.reminderText)}>
                            <ReminderIcon size={18} />
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </GlassCard>

                <GlassCard className="result-card followup-card">
                  <h3>{t("resultFollowUp")}</h3>
                  <ul className="bullet-list">
                    {analysis.followUp.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </GlassCard>

                {doctorReportUrl ? (
                  <GlassCard className="result-card">
                    <h3>Doctor QR report</h3>
                    <p>Ask the doctor to scan this QR code to open the full report automatically.</p>
                    <div className="qr-report-panel">
                      {doctorQr ? <img src={doctorQr} alt="Doctor report QR code" className="qr-code-image" /> : null}
                      <div className="feature-list compact-list">
                        <div>
                          <CheckIcon size={18} />
                          <span>{doctorReportUrl}</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ) : null}

                <GlassCard className="result-card">
                  <h3>Medicine stock</h3>
                  <div className="medicine-list">
                    {medicineStocks.map((stock) => (
                      <article key={stock.id} className="medicine-card">
                        <strong>{stock.name}</strong>
                        <span>{stock.count} doses left</span>
                        <p>Daily use: {stock.dailyUse}</p>
                        <div className="button-row">
                          <button type="button" className="button ghost" onClick={() => restockMedicine(stock.id, 15)}>
                            <BellIcon size={16} />
                            Add 15 more
                          </button>
                          <a className="button primary" href={`https://www.1mg.com/search/all?name=${encodeURIComponent(stock.name)}`} target="_blank" rel="noreferrer">
                            <CheckIcon size={16} />
                            Order now
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </GlassCard>
              </>
            ) : null}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

```

## src/pages/ContactsPage.tsx

`$ext
import { FormEvent, useMemo, useState } from "react";
import { GlassCard, SectionIntro } from "../components/Feedback";
import { PageTransition } from "../components/Layout";
import { useAppData, useLanguage, useNotifications } from "../context/AppProviders";
import { Contact, ContactType } from "../types";
import { ContactsIcon, EditIcon, PhoneIcon, PlusIcon, StarIcon, TrashIcon } from "../components/Icons";

const blankForm: Omit<Contact, "id"> = {
  type: "doctor",
  name: "",
  relation: "",
  phone: "",
  specialty: "",
  notes: "",
  isPrimary: false,
};

export function ContactsPage() {
  const { contacts, addContact, updateContact, deleteContact, setPrimaryContact } = useAppData();
  const { t, language } = useLanguage();
  const { notify } = useNotifications();
  const [filter, setFilter] = useState<ContactType | "all">("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formState, setFormState] = useState<Omit<Contact, "id">>(blankForm);
  const [errorMessage, setErrorMessage] = useState("");

  const filteredContacts = useMemo(() => {
    if (filter === "all") {
      return contacts;
    }
    return contacts.filter((entry) => entry.type === filter);
  }, [contacts, filter]);

  const resetForm = () => {
    setFormState(blankForm);
    setEditingId(null);
    setErrorMessage("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (!formState.name.trim() || !formState.relation.trim() || !formState.phone.trim()) {
      setErrorMessage(t("authRequired"));
      return;
    }

    if (editingId) {
      updateContact(editingId, { ...formState, name: formState.name.trim(), relation: formState.relation.trim(), phone: formState.phone.trim() });
      notify({ title: t("updateContact"), description: t("contactSaved"), tone: "success" });
    } else {
      addContact({ ...formState, name: formState.name.trim(), relation: formState.relation.trim(), phone: formState.phone.trim() });
      notify({ title: t("saveContact"), description: t("contactSaved"), tone: "success" });
    }

    resetForm();
  };

  const beginEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setFormState({
      type: contact.type,
      name: contact.name,
      relation: contact.relation,
      phone: contact.phone,
      specialty: contact.specialty ?? "",
      notes: contact.notes ?? "",
      isPrimary: contact.isPrimary,
    });
  };

  const removeContact = (id: string) => {
    deleteContact(id);
    notify({ title: t("contactDeleted"), description: t("contactsBody"), tone: "warning" });
    if (editingId === id) {
      resetForm();
    }
  };

  const makePrimary = (id: string) => {
    setPrimaryContact(id);
    notify({ title: t("primarySaved"), description: t("contactsBody"), tone: "success" });
  };

  return (
    <PageTransition>
      <div className="page-wrap app-page">
        <section className="contacts-grid">
          <GlassCard className="contacts-form-panel">
            <SectionIntro
              eyebrow={t("contactsTitle")}
              title={editingId ? t("editContactTitle") : t("addContactTitle")}
              body={t("contactsBody")}
            />
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>{t("contactTypeLabel")}</span>
                <select value={formState.type} onChange={(event) => setFormState((current) => ({ ...current, type: event.target.value as ContactType }))}>
                  <option value="doctor">{t("doctorLabel")}</option>
                  <option value="family">{t("familyLabel")}</option>
                </select>
              </label>
              <label>
                <span>{t("nameLabel")}</span>
                <input value={formState.name} onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))} placeholder="Dr. Meera Shah" />
              </label>
              <div className="inline-fields">
                <label>
                  <span>{t("relationLabel")}</span>
                  <input value={formState.relation} onChange={(event) => setFormState((current) => ({ ...current, relation: event.target.value }))} placeholder="Primary physician" />
                </label>
                <label>
                  <span>{t("phoneLabel")}</span>
                  <input value={formState.phone} onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))} placeholder="+91 98xxxx4321" />
                </label>
              </div>
              <label>
                <span>{t("specialtyLabel")}</span>
                <input value={formState.specialty} onChange={(event) => setFormState((current) => ({ ...current, specialty: event.target.value }))} placeholder="Internal medicine" />
              </label>
              <label>
                <span>{t("notesLabel")}</span>
                <textarea rows={4} value={formState.notes} onChange={(event) => setFormState((current) => ({ ...current, notes: event.target.value }))} placeholder="Fast response during emergencies" />
              </label>
              <label className="toggle-row checkbox-row">
                <input
                  type="checkbox"
                  checked={formState.isPrimary}
                  onChange={(event) => setFormState((current) => ({ ...current, isPrimary: event.target.checked }))}
                />
                <span>{t("primaryLabel")}</span>
              </label>
              {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
              <div className="button-row">
                <button type="submit" className="button primary">
                  <PlusIcon size={16} />
                  {editingId ? t("updateContact") : t("saveContact")}
                </button>
                {editingId ? (
                  <button type="button" className="button ghost" onClick={resetForm}>
                    {t("cancelEdit")}
                  </button>
                ) : null}
              </div>
            </form>
          </GlassCard>

          <div className="contacts-list-panel">
            <GlassCard className="filter-bar">
              <div className="pill-row">
                <button type="button" className={filter === "all" ? "info-pill active" : "info-pill"} onClick={() => setFilter("all")}>{t("filterAll")}</button>
                <button type="button" className={filter === "doctor" ? "info-pill active" : "info-pill"} onClick={() => setFilter("doctor")}>{t("filterDoctors")}</button>
                <button type="button" className={filter === "family" ? "info-pill active" : "info-pill"} onClick={() => setFilter("family")}>{t("filterFamily")}</button>
              </div>
            </GlassCard>

            <div className="contact-card-grid">
              {filteredContacts.length === 0 ? (
                <GlassCard className="empty-card">
                  <ContactsIcon size={28} />
                  <p>{t("noContacts")}</p>
                </GlassCard>
              ) : null}
              {filteredContacts.map((contact) => (
                <GlassCard key={contact.id} as="article" className="contact-card">
                  <div className="contact-card-head">
                    <div>
                      <span className="eyebrow">{contact.type === "doctor" ? t("doctorLabel") : t("familyLabel")}</span>
                      <h3>{contact.name}</h3>
                      <p>{contact.relation}</p>
                    </div>
                    {contact.isPrimary ? (
                      <span className="badge-pill success">
                        <StarIcon size={16} />
                        {t("primaryLabel")}
                      </span>
                    ) : null}
                  </div>
                  <div className="contact-meta-list">
                    <div>
                      <PhoneIcon size={16} />
                      <span>{contact.phone}</span>
                    </div>
                    {contact.specialty ? (
                      <div>
                        <ContactsIcon size={16} />
                        <span>{contact.specialty}</span>
                      </div>
                    ) : null}
                  </div>
                  {contact.notes ? <p className="contact-notes">{contact.notes}</p> : null}
                  <div className="contact-actions">
                    <button type="button" className="button ghost" onClick={() => beginEdit(contact)}>
                      <EditIcon size={16} />
                      {t("editContactTitle")}
                    </button>
                    <button type="button" className="button ghost" onClick={() => removeContact(contact.id)}>
                      <TrashIcon size={16} />
                      {language === "en" ? "Delete" : language === "hi" ? "हटाएं" : "દૂર કરો"}
                    </button>
                    {!contact.isPrimary ? (
                      <button type="button" className="button primary" onClick={() => makePrimary(contact.id)}>
                        <StarIcon size={16} />
                        {t("primaryLabel")}
                      </button>
                    ) : null}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}


```

## src/pages/SettingsPage.tsx

`$ext
import { useEffect, useState } from "react";
import { AudioPlayer } from "../components/AudioPlayer";
import { GlassCard, SectionIntro } from "../components/Feedback";
import { LanguageSwitcher, PageTransition } from "../components/Layout";
import { useAppData, useLanguage, useNotifications } from "../context/AppProviders";
import { getSettingsVoiceText } from "../data/content";
import { BellIcon, ShieldIcon, SparklesIcon, VolumeIcon } from "../components/Icons";

function browserNotificationBody(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤¦à¤µà¤¾ à¤¸à¤®à¤¯ à¤ªà¤° à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤ªà¥‰à¤ª-à¤…à¤ª à¤¨à¥‹à¤Ÿà¤¿à¤«à¤¿à¤•à¥‡à¤¶à¤¨ à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤¦à¥‡à¤‚à¥¤";
  }
  if (language === "gu") {
    return "àª¦àªµàª¾àª¨à«€ àª¸àª®àª¯à«‡ àª¬à«àª°àª¾àª‰àªàª° àªªà«‹àªª-àª…àªª àª¨à«‹àªŸàª¿àª«àª¿àª•à«‡àª¶àª¨àª¨à«€ àª®àª‚àªœà«‚àª°à«€ àª†àªªà«‹.";
  }
  return "Allow browser popup notifications for exact medicine times.";
}

function smsBody(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤¸à¥‡à¤µ à¤•à¤°à¥‡à¤‚, à¤•à¥‹à¤¡ à¤­à¥‡à¤œà¥‡à¤‚, à¤”à¤° à¤‡à¤®à¤°à¤œà¥‡à¤‚à¤¸à¥€ SMS à¤¡à¥€à¤ª à¤²à¤¿à¤‚à¤• à¤•à¥‹ à¤¤à¥ˆà¤¯à¤¾à¤° à¤°à¤–à¥‡à¤‚à¥¤";
  }
  if (language === "gu") {
    return "àª«à«‹àª¨ àª¨àª‚àª¬àª° àª¸à«‡àªµ àª•àª°à«‹, àª•à«‹àª¡ àª®à«‹àª•àª²à«‹ àª…àª¨à«‡ àª‡àª®àª°àªœàª¨à«àª¸à«€ SMS àª¡à«€àªª àª²àª¿àª‚àª• àª¤à«ˆàª¯àª¾àª° àª°àª¾àª–à«‹.";
  }
  return "Save a phone number, send a code, and keep SMS deep links ready for emergency use.";
}

function sentCodeCopy(language: "en" | "hi" | "gu", code: string, phone: string) {
  if (language === "hi") {
    return `${phone} à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥‹à¤¡ ${code} à¤¤à¥ˆà¤¯à¤¾à¤° à¤¹à¥ˆà¥¤ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤ªà¤° SMS à¤à¤ª à¤–à¥à¤²à¤¨à¥‡ à¤•à¥€ à¤•à¥‹à¤¶à¤¿à¤¶ à¤•à¥€ à¤—à¤ˆ à¤¹à¥ˆà¥¤`;
  }
  if (language === "gu") {
    return `${phone} àª®àª¾àªŸà«‡ àª•à«‹àª¡ ${code} àª¤à«ˆàª¯àª¾àª° àª›à«‡. àª®à«‹àª¬àª¾àª‡àª² àªªàª° SMS àªàªª àª–à«‹àª²àªµàª¾àª¨à«‹ àªªà«àª°àª¯àª¤à«àª¨ àª•àª°à«àª¯à«‹ àª›à«‡.`;
  }
  return `Code ${code} is ready for ${phone}. An SMS app handoff was attempted on mobile.`;
}

function verifiedCopy(language: "en" | "hi" | "gu") {
  if (language === "hi") {
    return "à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆà¥¤";
  }
  if (language === "gu") {
    return "àª«à«‹àª¨ àª¨àª‚àª¬àª° àªšàª•àª¾àª¸àª¾àªˆ àª—àª¯à«‹ àª›à«‡.";
  }
  return "Phone number verified.";
}

export function SettingsPage() {
  const { settings, updateSettings, scheduleReminder } = useAppData();
  const { t, language } = useLanguage();
  const { notify } = useNotifications();
  const [phoneNumber, setPhoneNumber] = useState(settings.verifiedPhoneNumber);
  const [otpInput, setOtpInput] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [permissionState, setPermissionState] = useState<NotificationPermission | "unsupported">("unsupported");

  useEffect(() => {
    if ("Notification" in window) {
      setPermissionState(Notification.permission);
    }
  }, []);

  const toggleSetting = (key: "remindersEnabled" | "emergencyOptIn" | "privacyMode") => {
    const nextValue = !settings[key];
    if (key === "remindersEnabled") {
      updateSettings({ remindersEnabled: nextValue });
    }
    if (key === "emergencyOptIn") {
      updateSettings({ emergencyOptIn: nextValue });
    }
    if (key === "privacyMode") {
      updateSettings({ privacyMode: nextValue });
    }
    notify({
      title: t("settingsTitle"),
      description: nextValue ? t("reminderScheduledBody") : t("reminderDisabled"),
      tone: nextValue ? "success" : "warning",
    });
  };

  const requestBrowserNotifications = async () => {
    if (!("Notification" in window)) {
      notify({ title: t("settingsTitle"), description: t("audioUnavailable"), tone: "error" });
      return;
    }

    const permission = await Notification.requestPermission();
    setPermissionState(permission);
    updateSettings({ browserNotifications: permission === "granted" });
    notify({
      title: t("settingsTitle"),
      description: permission === "granted" ? browserNotificationBody(language) : t("reminderDisabled"),
      tone: permission === "granted" ? "success" : "warning",
    });
  };

  const sendCode = () => {
    if (!phoneNumber.trim()) {
      notify({ title: t("phoneLabel"), description: t("authRequired"), tone: "warning" });
      return;
    }

    const code = `${Math.floor(100000 + Math.random() * 900000)}`;
    const normalizedPhone = phoneNumber.trim();
    setGeneratedCode(code);
    setOtpInput("");
    updateSettings({ verifiedPhoneNumber: normalizedPhone, otpVerified: false });
    notify({ title: "OTP", description: sentCodeCopy(language, code, normalizedPhone), tone: "success" });

    const smsUrl = `sms:${normalizedPhone}?body=${encodeURIComponent(`MedBuddy verification code: ${code}`)}`;
    window.open(smsUrl, "_blank", "noopener,noreferrer");
  };

  const verifyCode = () => {
    if (!generatedCode || otpInput.trim() !== generatedCode) {
      notify({ title: "OTP", description: t("authLoginError"), tone: "error" });
      return;
    }

    updateSettings({ verifiedPhoneNumber: phoneNumber.trim(), otpVerified: true });
    notify({ title: "OTP", description: verifiedCopy(language), tone: "success" });
  };

  const previewTimedReminder = () => {
    scheduleReminder({
      title: t("notificationMedicine"),
      description: browserNotificationBody(language),
      scheduledFor: Date.now() + 60 * 1000,
      source: "system",
    });
    notify({ title: t("notificationMedicine"), description: "Preview reminder scheduled for 1 minute from now.", tone: "info" });
  };

  return (
    <PageTransition>
      <div className="page-wrap app-page">
        <section className="settings-grid">
          <GlassCard className="settings-panel">
            <SectionIntro eyebrow={t("settingsTitle")} title={t("settingsTitle")} body={t("settingsBody")} />
            <div className="settings-block">
              <span className="field-label">{t("languageLabel")}</span>
              <LanguageSwitcher />
            </div>

            <div className="settings-block">
              <label className="range-row wide">
                <span>
                  <VolumeIcon size={16} />
                  {t("settingsVolume")}
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.masterVolume}
                  onChange={(event) => updateSettings({ masterVolume: Number(event.target.value) })}
                />
              </label>
            </div>

            <div className="toggle-stack">
              <button type="button" className={settings.remindersEnabled ? "switch-row active" : "switch-row"} onClick={() => toggleSetting("remindersEnabled")}>
                <div>
                  <strong>{t("settingsReminders")}</strong>
                  <p>{t("reminderScheduledBody")}</p>
                </div>
                <span className="switch-thumb" />
              </button>
              <button type="button" className={settings.emergencyOptIn ? "switch-row active" : "switch-row"} onClick={() => toggleSetting("emergencyOptIn")}>
                <div>
                  <strong>{t("settingsEmergency")}</strong>
                  <p>{t("trustPointTwo")}</p>
                </div>
                <span className="switch-thumb" />
              </button>
              <button type="button" className={settings.privacyMode ? "switch-row active" : "switch-row"} onClick={() => toggleSetting("privacyMode")}>
                <div>
                  <strong>{t("settingsPrivacy")}</strong>
                  <p>{t("trustPointThree")}</p>
                </div>
                <span className="switch-thumb" />
              </button>
              <button type="button" className={settings.browserNotifications ? "switch-row active" : "switch-row"} onClick={requestBrowserNotifications}>
                <div>
                  <strong>Browser popups</strong>
                  <p>{browserNotificationBody(language)}</p>
                </div>
                <span className="switch-thumb" />
              </button>
            </div>
          </GlassCard>

          <GlassCard className="settings-panel">
            <SectionIntro eyebrow={t("settingsPreviewTitle")} title={t("settingsPreviewTitle")} body={t("settingsPreviewBody")} />
            <AudioPlayer
              title={t("settingsPreviewTitle")}
              text={getSettingsVoiceText(language)}
              volume={settings.masterVolume}
              onVolumeChange={(nextVolume) => updateSettings({ masterVolume: nextVolume })}
            />
            <button type="button" className="button ghost full-width" onClick={previewTimedReminder}>
              <BellIcon size={16} />
              {t("settingsPreviewReminder")}
            </button>
            <div className="permission-chip">
              <strong>Notification status</strong>
              <span>{permissionState}</span>
            </div>
          </GlassCard>

          <GlassCard className="settings-panel privacy-panel">
            <SectionIntro eyebrow="SMS + OTP" title="Phone verification" body={smsBody(language)} />
            <div className="settings-form">
              <label>
                <span>{t("phoneLabel")}</span>
                <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="+91 98765 43210" />
              </label>
              <div className="button-row">
                <button type="button" className="button primary" onClick={sendCode}>
                  Send code
                </button>
              </div>
              <label>
                <span>Verification code</span>
                <input value={otpInput} onChange={(event) => setOtpInput(event.target.value)} placeholder="123456" />
              </label>
              <button type="button" className="button ghost" onClick={verifyCode}>
                Verify code
              </button>
              {generatedCode ? <p className="info-note">Demo code: {generatedCode}</p> : null}
              {settings.otpVerified ? (
                <div className="feature-list compact-list">
                  <div>
                    <ShieldIcon size={18} />
                    <span>{verifiedCopy(language)}</span>
                  </div>
                </div>
              ) : null}
            </div>
          </GlassCard>

          <GlassCard className="settings-panel privacy-panel">
            <SectionIntro eyebrow={t("settingsPrivacyTitle")} title={t("settingsPrivacyTitle")} body={t("settingsPrivacyBody")} />
            <div className="feature-list compact-list">
              <div>
                <ShieldIcon size={18} />
                <span>{t("trustPointThree")}</span>
              </div>
              <div>
                <SparklesIcon size={18} />
                <span>{t("disclaimer")}</span>
              </div>
              <div>
                <ShieldIcon size={18} />
                <span>User-controlled alerts, local-only demo storage, and clear consent patterns.</span>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageTransition>
  );
}

```

## src/pages/DoctorReportPage.tsx

`$ext
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { GlassCard, SectionIntro } from "../components/Feedback";
import { PageTransition, PublicHeader } from "../components/Layout";
import { BellIcon, CheckIcon, ShieldIcon } from "../components/Icons";
import { useAppData, useLanguage } from "../context/AppProviders";

export function DoctorReportPage() {
  const { reportId } = useParams();
  const { reports, medicineStocks, restockMedicine } = useAppData();
  const { t } = useLanguage();

  const report = useMemo(() => reports.find((entry) => entry.id === reportId), [reports, reportId]);

  if (!report) {
    return (
      <PageTransition>
        <div className="page-wrap public-page">
          <PublicHeader />
          <GlassCard className="result-card">
            <SectionIntro eyebrow="Doctor View" title="Report not found" body="Ask the patient to generate a fresh QR report from the dashboard." />
            <Link className="button primary" to="/dashboard">
              Back to dashboard
            </Link>
          </GlassCard>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="page-wrap public-page">
        <PublicHeader />
        <section className="feature-grid three-up doctor-report-grid">
          <GlassCard className="result-card">
            <SectionIntro eyebrow="Doctor View" title={report.analysis.diagnosis} body={report.analysis.summary} />
            <div className="feature-list compact-list">
              <div>
                <ShieldIcon size={18} />
                <span>{report.prescriptionText}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="result-card">
            <h3>{t("resultMedicines")}</h3>
            <div className="medicine-list">
              {report.analysis.medicines.map((medicine) => (
                <article key={medicine.id} className="medicine-card">
                  <strong>{medicine.name}</strong>
                  <span>{medicine.timing}</span>
                  <p>{medicine.purpose}</p>
                </article>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="result-card">
            <h3>Stock monitor</h3>
            <div className="medicine-list">
              {medicineStocks.map((stock) => (
                <article key={stock.id} className="medicine-card">
                  <strong>{stock.name}</strong>
                  <span>{stock.count} doses left</span>
                  <p>Daily use: {stock.dailyUse}</p>
                  <div className="button-row">
                    <button type="button" className="button ghost" onClick={() => restockMedicine(stock.id, 15)}>
                      <BellIcon size={16} />
                      Add stock
                    </button>
                    <a className="button primary" href={`https://www.1mg.com/search/all?name=${encodeURIComponent(stock.name)}`} target="_blank" rel="noreferrer">
                      <CheckIcon size={16} />
                      Order medicine
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </GlassCard>
        </section>
      </div>
    </PageTransition>
  );
}

```

