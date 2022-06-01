import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import storageHelper from '../../Utility/storageHelper';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = storageHelper.getItem('isLogin');
    return (
      isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
    )
  }
  } />
)

export default ProtectedRoute;