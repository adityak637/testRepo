import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Routes from "../../../Navigation/Routes";
import { bindActionCreators } from 'redux';
import { Header, Footer } from "../../../Component/index"
import storageHelper from '../../../Utility/storageHelper';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLogin: storageHelper.getItem('isLogin'),
      user: JSON.parse(storageHelper.getItem('user'))
    };
  }

  render() {
    const { hasLogin, user } = this.state;
    const { loginState } = this.props;
    const isLogin = loginState && loginState.isLogin;
    const userDetails = loginState && loginState.response && loginState.response.user;
    console.log('user', user)
    return (
      <div className="main">
        <React.Suspense fallback={<div className="loader"></div>}>
          <BrowserRouter>
            <Header isLogin={isLogin || hasLogin} userData={user || userDetails} />
            <Routes />
            <Footer />
          </BrowserRouter>
        </React.Suspense>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
