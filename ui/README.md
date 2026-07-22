# loop-auth-ui

Static HTML/CSS/JS build of LOOP's auth flow — four separate pages, matching the
routes in the `feature/auth-ui` task (`/`, `/login`, `/register`, `/forgot-password`).
Dummy data only, no backend or Axios calls — buttons `console.log` their form data.

## Files

| File | Route it maps to |
|---|---|
| `index.html` | `/` — Landing |
| `login.html` | `/login` |
| `register.html` | `/register` |
| `forgot-password.html` | `/forgot-password` |
| `style.css` | shared styles for every page (design tokens + components) |
| `script.js` | shared behavior for every page (loader, dummy submit, feedback ticker) |

## Run it

No build step. Either:

- Double-click `index.html`, or
- In VS Code, install the **Live Server** extension → right-click `index.html` →
  **Open with Live Server** (recommended — the Google Fonts `@import` in
  `style.css` can be blocked when opened via plain `file://`).

Click around: Landing → Sign in / Create workspace → Forgot password, and back.
Open DevTools console to see the dummy payload logged on each form submit.

## Components (for porting into Next.js later)

| CSS class in `style.css` | Becomes this component | Used on |
|---|---|---|
| `.auth-layout` / `.auth-brand` / `.auth-form-side` | `<AuthLayout>` | login, register, forgot-password |
| `.field` + `.input` | `<Input>` | all forms |
| `.btn` (+ `.loading`) | `<Button loading={...}>` | all forms |
| `.spinner` / `setLoading()` | `<Loader>` | all forms |
| `.feed-track` / `renderFeed()` | (optional) `<FeedbackTicker>` | landing, login, register, forgot-password |

When this moves into the real Next.js app, each `.html` file becomes a route
under `app/(auth)/`, and `handleSubmit()` in `script.js` gets replaced with a
real API call once the backend (Sachin/Ritik's routes) is ready.
