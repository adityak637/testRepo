import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Input, AlertDialogModal } from "../../../Component/index";
import { Link } from "react-router-dom";
import "../../../assets/sass/auth.scss";
import en from '../../../i18n/en.json';
import { stringFormat } from "../../../Utility/helper";
import { HTTP_STATUS, MAXLENGTH } from '../../../constants/AppConstants';
import * as loginActions from '../reducer/actions';
import storageHelper from "../../../Utility/storageHelper";
import * as Services from '../reducer/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      password: '',
      errorMsg: '',
      showAlert: false,
      showErrorAlert: false,
      alertTitle: '',
      alertMsg: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount = async () => { }


  /**
   * Inline Error validation
   * @returns 
   */
  handleValidation() {
    const { username, password } = this.state;
    let errors = '';
    let formIsValid = true;

    // Username
    if (!username) {
      formIsValid = false;
      errors = en.REQUIRED_USERNAME;
    }

    // password
    if (!password) {
      formIsValid = false;
      errors = en.REQUIRED_PASSWORD;
    }

    //password and username
    if (!username && !password) {
      errors = en.REQUIRED_PASSWORD_USERNAME;
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }


  loginGoogleSignIn = () => {
    this.setState({ isLoading: true })
    Services.googleLogin().then(res => {
      this.setState({ isLoading: false })
      console.log('resss...', res)
    }).catch(err => {
      this.setState({ isLoading: false })
      console.log('error...', err)
    })
  }




  onSubmit = async (e) => {
    e.preventDefault();
    /**
     *  Setting the loader & submiting the form based on user input
     */
    const { actions: { signIn } } = this.props;
    const { username, password } = this.state;
    if (this.handleValidation()) {
      this.setState({ isLoading: true })
      Services.userAuthenticate(username, password).then(res => {
        if (res.code == HTTP_STATUS.SUCCESS) {
          this.setState({ isLoading: false })
          signIn(res);
          const sessionTokenValue = res.token;
          let user = {
            ...res.user
          }
          storageHelper.setItem('token', sessionTokenValue);
          storageHelper.setItem('user', JSON.stringify(user));
          storageHelper.setItem('isLogin', JSON.stringify(true));
          this.props.history.push('/home');
        } else {
          this.setState({ isLoading: false, errorMsg: 'incorrect Username and Password' });
        }
      }).catch(err => {
        this.setState({
          isLoading: false,
          showErrorAlert: true,
          alertMsg: 'Something went wrong',
          alertTitle: 'Error'
        });

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
      username: '',
      password: ''
    })
  }


  render() {

    const { isLoading, username, password, errorMsg, alertMsg, alertTitle, showAlert, showErrorAlert } = this.state;

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
                  <h3>Welcome</h3>
                  <span>Pleace login to your account</span>
                </div>
              </div>

              <Form onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-group">
                  <label data-testid="username-label">{en.USERNAME}</label>
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

                </div>
                <div className="form-group">
                  <label data-testid="password-label" >{en.PASSWORD}</label>
                  <Input
                    type="password"
                    name="password"
                    onchange={(e) => { this.changeHandler('password', e); }}
                    hasIcon={true}
                    placeholder={en.PASSWORD}
                    maxlength={MAXLENGTH.PASSWORD}
                    testid="password-input"
                    value={password}
                    error={errorMsg}
                  />

                  <span className="error">{errorMsg}</span>
                </div>

                <div className="bottom-btn">
                  <ul className="nav navbar">
                    <li><Link to="/forgot-password">Forgot Pasword</Link></li>
                    <li><Button onClick={(e) => this.onSubmit(e)} color="primary">Login</Button></li>
                  </ul>

                </div>
              </Form>

              <div className="social-login">
                <div className="types">
                  <a onClick={(e) => this.loginGoogleSignIn(e)}><i></i> login with Gmail</a>
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

function mapStateToProps(state) {
  const { loginReducer } = state;
  return {
    loginState: loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...loginActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
