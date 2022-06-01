import React, { Component } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Input, AlertDialogModal } from "../../Component/index";
import { Link } from "react-router-dom";
import en from '../../i18n/en.json';
import { stringFormat } from "../../Utility/helper";
import { HTTP_STATUS, MAXLENGTH, REGEX } from '../../constants/AppConstants';
import * as Services from './service';
import "../../assets/sass/auth.scss";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.captchaRef = React.createRef();
    this.state = {
      confirmationCode: '',
      username: '',
      confirmNewPassword: '',
      showInfoAlert: false,
      isLoading: false,
      disabled: true,
      showAlert: false,
      newPassword: '',
      showErrorAlert: false,
      showLockedAlert: false,
      alertTitle: '',
      alertMsg: '',
      errorMsg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = async () => {

    const key = new URLSearchParams(location.search).get('username');
    this.setState({ username: key })

  }

  /**
 * Common Method to update multiple states
 * @param {*} state 
 */
  updateStates(state) {
    this.setState(state);
  }

  /**
   * Onsubmit the Form
   * @param {*} event 
   */
  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, newPassword, confirmationCode } = this.state;

    if (this.handleValidationResetPassword()) {
      try {
        const res = await Services.resetPassword(username, confirmationCode, newPassword);

        if (res.code == HTTP_STATUS.SUCCESS) {
          this.updateStates({
            isLoading: false,
            showAlert: !this.state.showAlert,
          })
        }
        else if (res.code == HTTP_STATUS.INVALID_REQUEST) {
          this.updateStates({
            isLoading: false,
            showErrorAlert: !this.state.showErrorAlert,
            alertTitle: en.INVALID_CODE_TITLE,
            alertMsg: en.INVALID_VERIFICATION_CODE
          })
        } else {
          this.updateStates({
            isLoading: false,
            showErrorAlert: !this.state.showErrorAlert,
            alertTitle: en.ERROR,
            alertMsg: en.SOMETHING_WENT_WRONG
          })
        }
      } catch (e) {
        this.setState({
          isLoading: false,
          showErrorAlert: !this.state.showErrorAlert,
          alertTitle: en.ERROR,
          alertMsg: en.SOMETHING_WENT_WRONG
        })
      }
    }

  }


  /**
   * Inline Error validation
   * @returns 
   */
  handleValidationResetPassword() {
    const { confirmNewPassword, newPassword, confirmationCode } = this.state;
    let errors = '';
    let formIsValid = true;
    const isValidPassword = REGEX.PASSWORD_REGEX.test(newPassword);

    // password
    if (!newPassword) {
      formIsValid = false;
      errors = en.REQUIRED_NEW_PASSWORD;
    }

    // Confirm password
    if (!confirmNewPassword) {
      formIsValid = false;
      errors = en.REQUIRED_CONFIRM_NEW_PASSWORD;
    }

    // Confirmation code
    if (!confirmationCode) {
      formIsValid = false;
      errors = en.REQUIRED_CONFIRMATION_CODE;
    }

    //password does not meet password policy
    if (newPassword && !isValidPassword) {
      formIsValid = false;
      errors = en.PASSWORD_POLICY_ERROR;
    }

    //password and Confirm password does not match
    if (confirmNewPassword && confirmNewPassword != newPassword) {
      formIsValid = false;
      errors = en.CONFIRM_PASSWORD_ERROR;
    }

    //password and Confirm password both blank
    if (!newPassword && !confirmNewPassword) {
      errors = en.REQUIRED_PASSWORD_AND_CONFIRM_NEW_PASSWORD;
    }

    //password and Confirm password both blank
    if (!confirmNewPassword && !newPassword && !confirmationCode) {
      errors = en.ALL_FIELDS_REQUIRED;
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }


  /**
   *  Updating states on changing username and password
   */
  changeHandlerResetPassword = (stateHolder, e) => {
    this.setState({
      [stateHolder]: stringFormat(e.target.value)
    }, () => this.handleValidationResetPassword());
  }

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
      confirmationCode: '',
      confirmNewPassword: '',
      newPassword: '',
    })
  }



  render() {
    const { isLoading, errorMsg, showLockedAlert, showAlert, confirmNewPassword, newPassword, confirmationCode, showErrorAlert, alertMsg, alertTitle } = this.state;

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
                  <h3>Reset Password</h3>
                  <span>Please update your Password</span>
                </div>
              </div>
              <form onSubmit={(e) => { this.handleSubmit(e) }}>
                <div className="form-group">
                  <Label for="password">{en.VERIFICATION_CODE_LABEL}<sup>*</sup></Label>
                  <Input
                    type="password"
                    name="confirmationCode"
                    onchange={(e) => { this.changeHandlerResetPassword('confirmationCode', e); }}
                    hasIcon={false}
                    placeholder={en.VERIFICATION_CODE_LABEL}
                    value={confirmationCode}
                    maxlength={MAXLENGTH.VERIFICATION_CODE}
                    testid="verification-code"
                    error={errorMsg}
                  />
                </div>
                <div className="form-group">
                  <Label for="password">{en.NEW_PASSWORD}<sup>*</sup></Label>
                  <Input
                    type="password"
                    name="newPassword"
                    onchange={(e) => { this.changeHandlerResetPassword('newPassword', e); }}
                    hasIcon={true}
                    value={newPassword}
                    placeholder={en.NEW_PASSWORD}
                    testid="new-password"
                    maxlength={MAXLENGTH.PASSWORD}
                    error={errorMsg}
                  />

                </div>
                <div className="form-group">
                  <Label for="password">{en.CONFIRM_NEW_PASSWORD}<sup>*</sup></Label>
                  <Input
                    type="password"
                    name="confirmNewPassword"
                    onchange={(e) => { this.changeHandlerResetPassword('confirmNewPassword', e); }}
                    hasIcon={true}
                    placeholder={en.CONFIRM_NEW_PASSWORD}
                    testid="confirm-new-password"
                    value={confirmNewPassword}
                    maxlength={MAXLENGTH.PASSWORD}
                    error={errorMsg}
                  />
                  <span data-testid="message" className="error">{errorMsg}</span>
                </div>
                <div className="bottom-btn">
                  <ul className="nav navbar">
                    <li></li>
                    <li><Button onClick={(e) => this.handleSubmit(e)} color="primary">Submit</Button></li>
                  </ul>
                </div>
              </form>
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

export default ResetPassword;
