# loop-auth-ui (React / Vite version)

React rebuild of the LOOP auth flow for the `feature/auth-ui` task.
Same design as the HTML version, now as real components with routing.
Dummy data only — every submit just `console.log`s the form values and
shows a fake success toast. No backend, no Axios calls.

## Run it

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Structure

```
src/
├── main.jsx              # app entry, wraps everything in BrowserRouter
├── App.jsx                # defines the 4 routes
├── index.css              # design tokens + all component styles
├── components/
│   ├── AuthLayout.jsx      # split-screen wrapper (dark brand panel + form)
│   ├── Input.jsx           # labeled input with optional error/hint
│   ├── Button.jsx          # primary/ghost button with built-in loading state
│   ├── Loader.jsx          # standalone spinner + Toast component
│   └── FeedbackTicker.jsx  # the scrolling sentiment-feed visual
├── hooks/
│   └── useDummySubmit.js   # shared loading + toast + console.log logic
└── pages/
    ├── Landing.jsx         # route: /
    ├── Login.jsx           # route: /login
    ├── Register.jsx        # route: /register
    └── ForgotPassword.jsx  # route: /forgot-password
```

## Routes

| Path | Page |
|---|---|
| `/` | Landing |
| `/login` | Login |
| `/register` | Register |
| `/forgot-password` | Forgot Password |

## Next steps (when the backend is ready)

Replace the body of `submit()` inside `src/hooks/useDummySubmit.js` with a real
`fetch`/`axios` call to Sachin/Ritik's API (`/register`, `/login`, `/logout`,
`/profile`), instead of the `setTimeout` + `console.log`.
