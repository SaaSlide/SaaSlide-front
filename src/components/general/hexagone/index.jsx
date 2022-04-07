import { useState } from 'react'
import './index.scss'
import { motion } from 'framer-motion'

export const Hexa = ({ color = 'white' }) => {
  return (
    <svg
      width="580"
      height="562"
      viewBox="0 0 580 562"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M420.001 535.146L562.402 367.691C579.415 347.686 584.827 320.374 575.291 295.677L502.352 88.1813C493.555 64.1121 472.135 45.909 446.956 41.1044L230.985 1.80383C204.437 -2.88751 178.344 6.84853 161.332 26.8541L18.3002 195.05C1.28766 215.055 -4.12402 242.367 5.41164 267.064L78.9805 473.819C87.7775 497.888 109.197 516.091 134.377 520.896L351.716 560.083C376.895 564.887 402.988 555.151 420.001 535.146Z"
        fill={color}
      />
    </svg>
  )
}
