const FullscreenIcon = ({
  className = '',
  width = '24px',
  height = '24px',
  viewBox = '0 0 32 32',
  title = 'Fullscreen',
}) => (
  <svg
    className={className}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width={width}
    height={height}
    viewBox={viewBox}
    xmlSpace='preserve'
    aria-label={title}
  >
    <g>
      <path d='M 10.91 0 L 0.73 0 C 0.32 0 0 0.32 0 0.73 L 0 10.91 C 0 11.31 0.32 11.64 0.73 11.64 L 2.18 11.64 C 2.58 11.64 2.91 11.31 2.91 10.91 L 2.91 2.91 L 10.91 2.91 C 11.31 2.91 11.64 2.58 11.64 2.18 L 11.64 0.73 C 11.64 0.32 11.31 0 10.91 0 Z M 10.91 0' />
      <path d='M 31.27 0 L 21 0 C 20.69 0 20.36 0.32 20.36 0.73 L 20.36 2.18 C 20.36 2.58 20.69 2.91 21 2.91 L 29 2.91 L 29 10.91 C 29 11.31 29.42 11.64 29.82 11.64 L 31.27 11.64 C 31.68 11.64 32 11.31 32 10.91 L 32 0.73 C 32 0.32 31.68 0 31.27 0 Z M 31.27 0' />
      <path d='M 31.27 20.36 L 29.82 20.36 C 29.42 20.36 29 20.69 29 21 L 29 29 L 21 29 C 20.69 29 20.36 29.42 20.36 29.82 L 20.36 31.27 C 20.36 31.68 20.69 32 21 32 L 31.27 32 C 31.68 32 32 31.68 32 31.27 L 32 21 C 32 20.69 31.68 20.36 31.27 20.36 Z M 31.27 20.36' />
      <path d='M 10.91 29 L 2.91 29 L 2.91 21 C 2.91 20.69 2.58 20.36 2.18 20.36 L 0.73 20.36 C 0.32 20.36 0 20.69 0 21 L 0 31.27 C 0 31.68 0.32 32 0.73 32 L 10.91 32 C 11.31 32 11.64 31.68 11.64 31.27 L 11.64 29.82 C 11.64 29.42 11.31 29 10.91 29 Z M 10.91 29' />
    </g>
  </svg>
)

export default FullscreenIcon