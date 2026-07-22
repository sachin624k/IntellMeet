import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { Toast } from '../components/Loader.jsx'
import { useDummySubmit } from '../hooks/useDummySubmit.js'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const { loading, toast, submit } = useDummySubmit('forgot')

  function onSubmit(e) {
    e.preventDefault()
    submit({ email }, `Reset link sent (dummy) to ${email || 'your email'}.`)
  }

  return (
    <AuthLayout
      backTo="/login"
      backLabel="Back to sign in"
      heading="We'll get you back to your dashboard."
      subtext="Reset links expire in 30 minutes for your workspace's security."
    >
      <h1>Reset your password</h1>
      <p className="sub">Enter your work email and we'll send a reset link.</p>

      <form onSubmit={onSubmit}>
        <Input
          label="Work email"
          id="forgot-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Button type="submit" block loading={loading}>Send reset link</Button>
      </form>

      <div className="switcher">Remembered it? <Link to="/login">Sign in</Link></div>

      <Toast message={toast.message} show={toast.show} />
    </AuthLayout>
  )
}
