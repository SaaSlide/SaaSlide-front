import React from 'react'
import './style.scss'

const Hexagon = ({ className, width, backgroundColor }) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height="346"
        viewBox="0 0 345 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M236.254 332.78L330.799 239.929C342.094 228.836 346.821 212.729 342.435 197.382L309.887 68.8311C305.91 53.9012 294.038 41.8108 279.184 37.5628L151.673 2.2737C135.991 -1.98034 119.801 2.45402 108.506 13.5468L13.5432 106.808C2.24805 117.901 -2.47911 134.009 1.90756 149.356L34.8734 277.496C38.8507 292.426 50.7227 304.516 65.5768 308.764L193.915 344.059C208.769 348.307 224.959 343.873 236.254 332.78Z"
          fill={backgroundColor}
        />
      </svg>
    </div>
  )
}

export default Hexagon
