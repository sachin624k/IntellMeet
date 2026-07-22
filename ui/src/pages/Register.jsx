import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { Toast } from '../components/Loader.jsx'
import { useDummySubmit } from '../hooks/useDummySubmit.js'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, toast, submit } = useDummySubmit('register')

  function onSubmit(e) {
    e.preventDefault()
    submit({ name, email, password }, 'Workspace created (dummy) — you are Admin.')
  }

  return (
    <AuthLayout
      backTo="/"
      backLabel="Back to LOOP"
      heading="Set up your workspace in under a minute."
      subtext="You'll be the admin — invite your team once you're in."
    >
      <h1>Create your workspace</h1>
      <p className="sub">Takes about a minute. No credit card.</p>

      <form onSubmit={onSubmit}>
        <Input
          label="Full name"
          id="reg-name"
          type="text"
          placeholder="Jordan Lee"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          label="Work email"
          id="reg-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          id="reg-password"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Button type="submit" block loading={loading}>Create workspace</Button>

        <div className="role-note">
          You'll be set as <strong>Admin</strong> for this workspace and can invite Analysts and Viewers afterward.
        </div>
      </form>

      <div className="switcher">Already have a workspace? <Link to="/login">Sign in</Link></div>

      <Toast message={toast.message} show={toast.show} />
    </AuthLayout>
  )
}
