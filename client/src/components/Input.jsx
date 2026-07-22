export default function Input({ label, hint, error, id, ...rest }) {
  return (
    <div className={`field ${error ? 'error' : ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input className="input" id={id} {...rest} />
      {(hint || error) && <div className="hint">{error || hint}</div>}
    </div>
  )
}
