import React, { Component } from "react";
import { HTTP_STATUS } from "../../../constants/AppConstants";
import * as Services from '../../LogIn/reducer/service'

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    Services.userLogout().then(res => {
      if (res.code == HTTP_STATUS.SUCCESS) {
        localStorage.clear();
        this.props.history.push('/home')
      }
    }).catch(e => {
      console.log('error..', e)
    })

  };



  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
    );
  }
}


export default Logout;
