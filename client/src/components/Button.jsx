export default function Button({
  children,
  loading = false,
  variant = 'primary',
  block = false,
  ...rest
}) {
  const classes = [
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-ghost',
    block ? 'btn-block' : '',
    loading ? 'loading' : ''
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} disabled={loading} {...rest}>
      <span className="spinner"></span>
      <span className="btn-label">{children}</span>
    </button>
  )
}
