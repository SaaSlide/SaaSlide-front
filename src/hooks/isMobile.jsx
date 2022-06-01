import React, { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const isMobile = width <= 768

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return isMobile
}
