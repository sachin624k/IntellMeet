import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { Toast } from '../components/Loader.jsx'
import { useDummySubmit } from '../hooks/useDummySubmit.js'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [stayIn, setStayIn] = useState(false)
  const { loading, toast, submit } = useDummySubmit('login')

  function onSubmit(e) {
    e.preventDefault()
    submit({ email, password, stayIn }, 'Signed in (dummy) — dashboard not wired yet.')
  }

  return (
    <AuthLayout
      backTo="/"
      backLabel="Back to LOOP"
      heading="Every ticket, review, and survey — read the moment it arrives."
      subtext="Sign in to see what's spiking across your workspace this week."
    >
      <h1>Welcome back</h1>
      <p className="sub">Sign in to your workspace.</p>

      <form onSubmit={onSubmit}>
        <Input
          label="Work email"
          id="login-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          id="login-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <div className="form-foot">
          <label style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--dim-on-paper)' }}>
            <input
              type="checkbox"
              style={{ accentColor: 'var(--violet)' }}
              checked={stayIn}
              onChange={e => setStayIn(e.target.checked)}
            />
            Stay signed in
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <Button type="submit" block loading={loading}>Sign in</Button>
      </form>

      <div className="switcher">New to LOOP? <Link to="/register">Create a workspace</Link></div>

      <Toast message={toast.message} show={toast.show} />
    </AuthLayout>
  )
}
