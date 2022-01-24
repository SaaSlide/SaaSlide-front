import React from 'react'
import { Route } from 'react-router-dom'

export const RouteWithLayout = ({ Layout, Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}
