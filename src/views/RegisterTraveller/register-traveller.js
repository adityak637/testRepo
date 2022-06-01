import React, { Component } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Input, AlertDialogModal } from "../../Component/index";
import "../../assets/sass/auth.scss";
import en from '../../i18n/en.json'
import { stringFormat } from "../../Utility/helper";
import { HTTP_STATUS, MAXLENGTH } from '../../constants/AppConstants';
import * as Services from './service';

class RegisterTraveller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      email: '',
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
   * Inline Error validation
   * @returns 
   */
  handleValidation() {
    const { email } = this.state;
    let errors = '';
    let formIsValid = true;

    // Username
    if (!email) {
      formIsValid = false;
      errors = en.REQUIRED_USERNAME;
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }

  onSubmit = async (e) => {
    e.preventDefault();
    /**
     *  Setting the loader & submiting the form based on user input
     */

    const { email } = this.state;
    if (this.handleValidation()) {

      this.setState({ isLoading: true })
      Services.registerUser(email).then(res => {
        if (res.code == HTTP_STATUS.SUCCESS) {
          this.setState({
            isLoading: false,
            showAlert: true
          })
        } else if (res.code == HTTP_STATUS.ALREADY_EXIST) {
          this.setState({
            isLoading: false,
            showErrorAlert: true,
            alertMsg: 'The email has already been taken.',
            alertTitle: 'Error'
          })
        } else {
          this.setState({
            isLoading: false,
            showErrorAlert: true,
            alertMsg: 'Something Went wrong',
            alertTitle: 'Error'
          })
        }
      }).catch(err => {
        this.setState({
          isLoading: false,
          showErrorAlert: true,
          alertMsg: 'Something Went wrong',
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
      email: '',
    })
  }

  render() {
    const { email, errorMsg, isLoading, alertMsg, alertTitle, showAlert, showErrorAlert } = this.state;
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
                  <li><Link to='/register' className="btn btn-primary">Back</Link></li>
                </ul>
                <div className="title">
                  <h3>Welcome Traveller</h3>
                  <span>Pleace create your account</span>
                </div>
              </div>

              <Form onSubmit={(e) => this.onSubmit(e)}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    onchange={(e) => { this.changeHandler('email', e); }}
                    hasIcon={false}
                    placeholder={en.EMAIL}
                    maxlength={MAXLENGTH.EMAIL}
                    testid="email-input"
                    value={email}
                    error={errorMsg}
                  />
                  <span className="error">{errorMsg}</span>
                </FormGroup>
                <div className="bottom-btn">
                  <ul className="nav navbar">
                    <li><Link to="/register-traveller">Facing Any Issues?</Link></li>
                    <li><Button onClick={(e) => this.onSubmit(e)} color="primary">Send OTP</Button></li>
                  </ul>
                </div>
              </Form>


              <div className="social-login">
                <div className="types">
                  <Link to="javascript:void(0)" ><i></i> login with Gmail</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
        {/* // success Alert Modal */}
        <AlertDialogModal
          title={'Success'}
          isOpen={showAlert}
          alertMsg={'verification link has been sent to your Email, Please verify and create password.'}
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

export default RegisterTraveller;
