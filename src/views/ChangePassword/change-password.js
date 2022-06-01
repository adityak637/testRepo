import React, { Component } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Input, AlertDialogModal, Sidebar } from "../../Component/index";
import "./change-password.scss";
import en from '../../i18n/en.json'
import { stringFormat } from "../../Utility/helper";
import { HTTP_STATUS, MAXLENGTH, REGEX } from '../../constants/AppConstants';
import * as Services from './service';

class ChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      password: '',
      confirmPassword: '',
      oldPassword: '',
      errorMsg: '',
      showAlert: false,
      showErrorAlert: false,
      alertTitle: '',
      alertMsg: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => { };

  /**
   * Handle Success Alert Callback
   */
  handleSuccessCallback = () => {
    this.setState({
      showAlert: !this.state.showAlert,
    })
    this.props.history.push('/login');
  }


  /**
   * Handle Faliure Alert Callback
   */
  handleFailureCallback = () => {
    this.setState({
      showErrorAlert: !this.state.showErrorAlert,
      password: '',
      confirmPassword: ''
    })
  }


  /**
   * Inline Error validation
   * @returns 
   */
  handleValidation() {
    const { confirmPassword, password, oldPassword } = this.state;
    let errors = '';
    let formIsValid = true;
    const isValidPassword = REGEX.PASSWORD_REGEX.test(password);

    // password
    if (!oldPassword) {
      formIsValid = false;
      errors = 'old password is required';
    }

    // password
    if (!password) {
      formIsValid = false;
      errors = en.REQUIRED_PASSWORD;
    }

    // Confirm password
    if (!confirmPassword) {
      formIsValid = false;
      errors = en.REQUIRED_CONFIRM_PASSWORD;
    }

    //password does not meet password policy
    if (password && !isValidPassword) {
      formIsValid = false;
      errors = en.PASSWORD_POLICY_ERROR;
    }

    //password and Confirm password does not match
    if (confirmPassword && confirmPassword != password) {
      formIsValid = false;
      errors = en.CONFIRM_PASSWORD_ERROR;
    }

    //password and Confirm password both blank
    if (!confirmPassword && !password && !oldPassword) {
      errors = 'all fields are required';
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }

  onSubmit = async (e) => {
    e.preventDefault();
    /**
     *  Setting the loader & submiting the form based on user input
     */
    const { password, oldPassword, confirmPassword } = this.state;
    const key = new URLSearchParams(location.search).get('key');
    this.setState({ isLoading: true })

    if (this.handleValidation()) {
      Services.changePassword(oldPassword, password, confirmPassword).then(response => {
        if (response.code == HTTP_STATUS.SUCCESS) {
          this.setState({
            isLoading: false,
            showAlert: true
          })
        } else {
          this.setState({
            isLoading: false,
            showErrorAlert: true,
            alertMsg: 'Something went wrong',
            alertTitle: 'Error'
          })
        }
      }).catch(err => {
        this.setState({
          isLoading: false,
          showErrorAlert: true,
          alertMsg: 'Something went wrong',
          alertTitle: 'Error'
        })
      })
    }
  }

  /**
  *  Updating states on changing username and password
  */
  changeHandler = (stateHolder, e) => {
    this.setState({ [stateHolder]: stringFormat(e.target.value) }, () => this.handleValidation());
  }

  render() {
    const { password, confirmPassword, oldPassword, errorMsg, alertMsg, alertTitle, showAlert, showErrorAlert } = this.state;
    return (
      <div className="change-password dashboard">
        <div className="profile-wrapper">
          <Sidebar />
          <div className="profile-content">
            <h4>Change Password</h4>
            <Form onSubmit={(e) => this.onSubmit(e)}>
              <FormGroup>
                <Label for="password">Current Password</Label>
                <Input
                  type="password"
                  name="email"
                  onchange={(e) => { this.changeHandler('oldPassword', e); }}
                  hasIcon={true}
                  placeholder={en.PASSWORD}
                  maxlength={MAXLENGTH.PASSWORD}
                  testid="email-input"
                  value={oldPassword}
                  error={errorMsg}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">New Password</Label>
                <Input
                  type="password"
                  name="email"
                  onchange={(e) => { this.changeHandler('password', e); }}
                  hasIcon={true}
                  placeholder={en.PASSWORD}
                  maxlength={MAXLENGTH.PASSWORD}
                  testid="email-input"
                  value={password}
                  error={errorMsg}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Confirm New Password</Label>
                <Input
                  type="password"
                  name="email"
                  onchange={(e) => { this.changeHandler('confirmPassword', e); }}
                  hasIcon={true}
                  placeholder={en.PASSWORD}
                  maxlength={MAXLENGTH.PASSWORD}
                  testid="email-input"
                  value={confirmPassword}
                  error={errorMsg}
                />
                <span className="error">{errorMsg}</span>
              </FormGroup>
              <div className="bottom-btn">
                <ul className="nav navbar">
                  <li></li>
                  <li><Button onClick={(e) => this.onSubmit(e)} color="primary">Submit</Button></li>
                </ul>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}


export default ChangePassword;
