import { Link } from 'react-router-dom'
import FeedbackTicker from '../components/FeedbackTicker.jsx'

export default function Landing() {
  return (
    <section className="landing-page">
      <nav className="landing-nav">
        <Link to="/" className="logo">
          <span className="logo-mark"></span>
          <span className="brand-word">LOOP</span>
        </Link>
        <div className="landing-nav-links">
          <Link to="/login">Sign in</Link>
          <Link className="btn btn-primary" to="/register" style={{ padding: '9px 16px' }}>
            Start free
          </Link>
        </div>
      </nav>

      <div className="hero">
        <div>
          <span className="eyebrow"><span className="dot"></span>AI Customer-Feedback Intelligence</span>
          <h1>Turn scattered feedback into your next roadmap.</h1>
          <p>
            LOOP reads every support ticket, review, and survey response, then tells you
            what customers actually want — with evidence, not guesswork.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/register">Create a workspace</Link>
            <Link className="btn btn-ghost" to="/login">Sign in</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-label mono">live feedback stream</div>
          <FeedbackTicker />
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <span className="num mono">Classify</span>
          <h3>Auto-tagged, instantly</h3>
          <p>Every item gets sentiment, theme, and feature-area labels the moment it lands — no manual triage.</p>
        </div>
        <div className="feature">
          <span className="num mono">Cluster</span>
          <h3>Themes that spike</h3>
          <p>Similar feedback groups itself, so you see what's trending this week versus last.</p>
        </div>
        <div className="feature">
          <span className="num mono">Ask</span>
          <h3>Answers, grounded</h3>
          <p>Ask a plain-English question, get a reply backed by the exact feedback it came from.</p>
        </div>
      </div>
    </section>
  )
}
