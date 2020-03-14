const CloseIcon = ({
  className = '',
  width = '16px',
  height = '16px',
  viewBox = '0 0 48 48',
  title = 'Close',
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
      <path d='M 43.82 8.18 C 43.11 7.86 42.27 7.98 41.68 8.5 L 38.96 10.92 C 35.23 6.53 29.76 4 24 4 C 13.82 3.99 5.27 11.62 4.11 21.73 C 2.96 31.84 9.57 41.2 19.49 43.49 C 29.4 45.77 39.45 40.25 42.84 30.66 C 43.2 29.62 42.65 28.47 41.61 28.11 C 40.57 27.75 39.43 28.3 39 29.34 C 36.34 37 28.3 41.42 20.37 39.59 C 12.44 37.75 7.15 30.26 8 22.18 C 9 14 15.86 7.99 24 8 C 28.62 8 33 10 36 13.56 L 32.68 16.5 C 32 17 31.84 17.94 32.14 18.72 C 32.44 19.49 33.18 20 34 20 L 43 20 C 44.11 20 45 19.11 45 18 L 45 10 C 45 9.21 44.54 8.5 43.82 8.18 Z M 43.82 8.18' />
    </g>
  </svg>
)

export default CloseIcon