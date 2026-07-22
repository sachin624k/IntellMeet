import { Link } from 'react-router-dom'
import FeedbackTicker from './FeedbackTicker.jsx'

export default function AuthLayout({ heading, subtext, backTo, backLabel, children }) {
  return (
    <div className="auth-layout">
      <aside className="auth-brand">
        <div className="auth-brand-top">
          <Link to="/" className="logo">
            <span className="logo-mark"></span>
            <span className="brand-word">LOOP</span>
          </Link>
        </div>
        <div className="auth-brand-copy">
          <h2>{heading}</h2>
          <p>{subtext}</p>
        </div>
        <div className="auth-brand-feed">
          <FeedbackTicker />
        </div>
      </aside>

      <div className="auth-form-side">
        <Link className="auth-back" to={backTo}>&larr; {backLabel}</Link>
        <div className="auth-card">{children}</div>
      </div>
    </div>
  )
}
