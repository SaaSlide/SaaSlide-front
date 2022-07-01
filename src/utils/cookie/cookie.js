import React, { useContext, useEffect } from 'react'
import { TokenContext } from '../../App'

export const useCookie = () => {
  const [context, setContext] = useContext(TokenContext)

  useEffect(() => {
    if (!context && document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';')
      cookies.forEach((cookie) => {
        const cookieName = cookie.split('=')[0]
        const cookieValue = cookie.split('=')[1]
        if (cookieName === 'cookieUser') {
          setContext(cookieValue)
        }
      })
    }
  }, [])

  return context
}
