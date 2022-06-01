import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import ProtectedRoute from '../Component/ProtectedRoute/ProtectedRoute'
const login = React.lazy(() => import('../views/LogIn'));
const forgotPassword = React.lazy(() => import('../views/ForgotPassword'));
const home = React.lazy(() => import('../views/HomePage'));
const dashboard = React.lazy(() => import('../views/Dashboard'));
const register = React.lazy(() => import('../views/Register'));
const myProfile = React.lazy(() => import('../views/MyProfile'));
const registerTraveller = React.lazy(() => import('../views/RegisterTraveller'));
const verifyPassword = React.lazy(() => import('../views/VerifyPassword'));
const logout = React.lazy(() => import('../views/Logout'));
const searchPage = React.lazy(() => import('../views/SearchPage'));
const newTripForm = React.lazy(() => import('../views/NewTripform'));
const productDetail = React.lazy(() => import('../views/ProductDetail'));
const bookingPage = React.lazy(() => import('../views/BookingPage'));
const resetPassword = React.lazy(() => import('../views/ResetPassword'));
const kyc = React.lazy(() => import('../views/KYC'));
const changePassword = React.lazy(() => import('../views/ChangePassword'));
const about = React.lazy(() => import('../views/About'));
const community = React.lazy(() => import('../views/Community'));


const Routes = withRouter(({ location }) => {
    return (
        <Switch location={location}>
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
            <Route path="/forgot-password" component={forgotPassword} />
            <Route path="/reset-password" component={resetPassword} />
            <Route path="/home" component={home} />
            <Route path="/update-password" component={verifyPassword} />
            <Route path="/register-traveller" component={registerTraveller} />
            <Route path="/search" component={searchPage} />
            <Route path="/new-trip-form" component={newTripForm} />
            <Route path="/product-detail" component={productDetail} />
            <Route path="/booking-page" component={bookingPage} />
            <Route exact={true} path="/logout" component={logout} />
            <ProtectedRoute path="/my-profile" component={myProfile} />
            <ProtectedRoute path="/change-password" component={changePassword} />
            <ProtectedRoute path="/update-kyc/:id" component={kyc} />
            <ProtectedRoute path="/dashboard" component={dashboard} />
            <Route path="/about-us" component={about} />
            <Route path="/community" component={community} />
            <ProtectedRoute exact={true} path="/dashboard" component={dashboard} />
            <ProtectedRoute component={dashboard} />
        </Switch>
    );
});

export default Routes;
