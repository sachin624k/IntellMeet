// Standalone spinner — Button already renders its own via the .spinner class,
// but this is here for any place you need a bare loading indicator.
export function Loader() {
  return <span className="spinner" style={{ display: 'inline-block' }}></span>
}

// Toast shown after a dummy form submit resolves.
export function Toast({ message, show }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <span className="dot"></span>
      <span>{message}</span>
    </div>
  )
}
