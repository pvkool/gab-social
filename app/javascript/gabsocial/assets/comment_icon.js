const CommentIcon = ({
  className = '',
  width = '26px',
  height = '26px',
  viewBox = '0 0 48 48',
  title = 'Comment',
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
      <path d='M 34.51 47 C 34 47 33.66 46.86 33.32 46.58 L 20.86 36.34 L 4.49 36.34 C 2 36.34 0 34.27 0 31.75 L 0 4.54 C 0 2 2 0 4.49 0 L 43.49 0 C 45.98 0 48 2 48 4.54 L 48 31.75 C 48 34.27 45.98 36.34 43.49 36.34 L 36.37 36.34 L 36.37 45.13 C 36.37 45.85 35.96 46.51 35.3 46.82 C 35 46.94 34.79 47 34.51 47 Z M 4.49 3.77 C 4.1 3.77 3.77 4.1 3.77 4.54 L 3.77 31.75 C 3.77 32.2 4.1 32.6 4.49 32.6 L 21.52 32.6 C 21.96 32.6 22.38 32.74 22.71 33 L 32.63 41.16 L 32.63 34.45 C 32.63 33.42 33.48 32.6 34.51 32.6 L 43.49 32.6 C 43.89 32.6 44.25 32.18 44.25 31.75 L 44.25 4.54 C 44.25 4.11 43.9 3.77 43.49 3.77 Z M 4.49 3.77' />
    </g>
  </svg>
)

export default CommentIcon