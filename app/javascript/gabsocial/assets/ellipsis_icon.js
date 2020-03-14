const EllipsisIcon = ({
  className = '',
  width = '16px',
  height = '16px',
  viewBox = '0 0 24 24',
  title = 'Ellipsis',
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
      <circle cx='5' cy='12' r='2' />
      <circle cx='12' cy='12' r='2' />
      <circle cx='19' cy='12' r='2' />
    </g>
  </svg>
)

export default EllipsisIcon