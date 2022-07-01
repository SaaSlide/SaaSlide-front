import RoutesApp from './Routes'
import React, { useState } from 'react'

export const TokenContext = React.createContext()
const App = () => {
  const [context, setContext] = useState('')
  return (
    <div>
      <TokenContext.Provider value={[context, setContext]}>
        <RoutesApp />
      </TokenContext.Provider>
    </div>
  )
}
export default App
