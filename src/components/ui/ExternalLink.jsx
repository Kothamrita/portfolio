export function ExternalLink({ href, className = '', children, ariaLabel }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className} aria-label={ariaLabel}>
      {children}
    </a>
  )
}
