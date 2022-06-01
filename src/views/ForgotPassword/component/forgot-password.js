import React, { Component } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Input, AlertDialogModal } from '../../../Component/index'
import { Link } from "react-router-dom";
import "../../../assets/sass/auth.scss";
import en from '../../../i18n/en.json';
import { HTTP_STATUS, MAXLENGTH } from "../../../constants/AppConstants";
import { stringFormat } from "../../../Utility/helper";
import * as Services from '../reducer/service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      errorMsg: '',
      showAlert: false,
      showErrorAlert: false,
      alertTitle: '',
      alertMsg: '',
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => { };

  componentDidUpdate(prevProps) { }

  /**
   *  Updating states on changing username and password
   */
  changeHandler = (stateHolder, e) => {
    this.setState({ [stateHolder]: stringFormat(e.target.value) }, () => this.handleValidation());
  }

  /**
     * Inline Error validation
     * @returns 
     */
  handleValidation() {
    const { username } = this.state;
    let errors = '';
    let formIsValid = true;

    // Username
    if (!username) {
      formIsValid = false;
      errors = en.REQUIRED_USERNAME;
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }

  /**
    *  Handle onsubmit click
    */
  onSubmit = (e) => {
    e.preventDefault();
    const { username } = this.state;
    if (this.handleValidation()) {
      this.setState({ isLoading: true });
      Services.forgotPassword(username)
        .then(res => {
          if (res.code == HTTP_STATUS.SUCCESS) {
            this.setState({
              isLoading: false,
              showAlert: true,
            })
          } else if (res.code == HTTP_STATUS.NOT_EXIST) {
            this.setState({
              isLoading: false,
              errorMsg: 'user not found'
            })
          } else {
            this.setState({
              isLoading: false,
              showErrorAlert: true,
              alertMsg: 'Something went wrong',
              alertTitle: 'Error'
            })
          }
        })
        .catch(() => {
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
      username: '',
    })
  }

  render() {
    const { username, isLoading, errorMsg, showAlert, showErrorAlert, alertMsg, alertTitle } = this.state;
    return (
      <div className="auth-container">
        {isLoading ? <div className="loader"></div> : null}
        <div className="auth-box">
          <div className="img-box">
            <span className="logo"></span>
          </div>
          <div className="inner-box">
            <aside>
              <div className="auth-text">
                <ul className="nav navbar">
                  <li><Link to='/login' className="btn btn-primary">Login</Link></li>
                  <li><Link to='/register'>Sign Up</Link></li>
                </ul>
                <div className="title">
                  <h3>Forgot Password</h3>
                  <span>enter your email address</span>
                </div>
              </div>

              <Form>
                <div className="form-group">
                  <label data-testid="username-label">{en.USERNAME}<sup>*</sup></label>
                  <Input
                    type="text"
                    name="username"
                    onchange={(e) => { this.changeHandler('username', e); }}
                    hasIcon={false}
                    placeholder={en.USERNAME}
                    maxlength={MAXLENGTH.EMAIL}
                    testid="username-input"
                    value={username}
                    error={errorMsg}
                  />
                  <span className="error">{errorMsg}</span>

                </div>
                <div className="bottom-btn">
                  <Button onClick={(e) => this.onSubmit(e)} color="primary">Submit</Button>
                </div>
              </Form>
            </aside>
          </div>
        </div>
        {/* // success Alert Modal */}
        <AlertDialogModal
          title={'Success'}
          isOpen={showAlert}
          alertMsg={'Email has been sent to your registered email address.'}
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


export default ForgotPassword;
