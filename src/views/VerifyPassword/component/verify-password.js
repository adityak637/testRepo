import React, { Component } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Input, AlertDialogModal } from "../../../Component/index";
import "../../../assets/sass/auth.scss";
import en from '../../../i18n/en.json'
import { stringFormat } from "../../../Utility/helper";
import { HTTP_STATUS, MAXLENGTH, REGEX } from '../../../constants/AppConstants';
import * as Services from '../reducer/service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class VerifyPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      password: '',
      confirmPassword: '',
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
    const { confirmPassword, password } = this.state;
    let errors = '';
    let formIsValid = true;
    const isValidPassword = REGEX.PASSWORD_REGEX.test(password);

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
    if (!confirmPassword && !password) {
      errors = en.REQUIRED_PASSWORD_AND_CONFIRM_PASSWORD;
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }

  onSubmit = async (e) => {
    e.preventDefault();
    /**
     *  Setting the loader & submiting the form based on user input
     */
    const { password } = this.state;
    const key = new URLSearchParams(location.search).get('key');
    this.setState({ isLoading: true })

    if (this.handleValidation()) {
      if (key) {
        Services.verifyPassword(key, password).then(response => {
          if (response.code == HTTP_STATUS.SUCCESS) {
            this.setState({
              isLoading: false,
              showAlert: true
            })
          } else if (response.code == HTTP_STATUS.INVALID_REQUEST) {
            this.setState({
              isLoading: false,
              showErrorAlert: true,
              alertMsg: 'Link has been expire.',
              alertTitle: 'Error'
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
  }

  /**
  *  Updating states on changing username and password
  */
  changeHandler = (stateHolder, e) => {
    this.setState({ [stateHolder]: stringFormat(e.target.value) }, () => this.handleValidation());
  }

  render() {
    const { password, confirmPassword, errorMsg, alertMsg, alertTitle, showAlert, showErrorAlert } = this.state;
    return (
      <div className="auth-container">
        <div className="auth-box">
          <div className="img-box">
            <span className="logo"></span>
          </div>
          <div className="inner-box">
            <aside>
              <div className="auth-text">
                <div className="title">
                  <h3>Change Password</h3>
                  <span>Pleace create your Password</span>
                </div>
              </div>

              <Form onSubmit={(e) => this.onSubmit(e)}>
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
            </aside>
          </div>
        </div>
        {/* // success Alert Modal */}
        <AlertDialogModal
          title={en.ALL_DONE}
          isOpen={showAlert}
          alertMsg={en.SUCCESS_CHANGE_PASSWORD}
          buttonTitle={en.OK}
          handleButtonClick={this.handleSuccessCallback}
          testid={'success-popup'}
        />

        {/* // Failure Alert Modal */}
        <AlertDialogModal
          title={alertTitle}
          isOpen={showErrorAlert}
          alertMsg={alertMsg}
          buttonTitle={en.OK}
          handleButtonClick={this.handleFailureCallback}
          testid={'failure-popup'}
        />
      </div>
    );
  }
}


export default VerifyPassword;
