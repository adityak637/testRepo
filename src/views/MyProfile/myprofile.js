import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  COL,
  Col,
} from "reactstrap";
import "./myprofile.scss";
import { Link } from "react-router-dom";
import { Input, Sidebar } from "../../Component/index";
import en from '../../i18n/en.json';
import { HTTP_STATUS, MAXLENGTH } from '../../constants/AppConstants';
import { stringFormat } from "../../Utility/helper";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      mobileNo: '',
      dob: '',
      email: '',
      pincode: '',
      city: '',
      introduction: '',
      facebook: '',
      instagram: '',
      twitter: '',
      errorMsg: '',
      shortDescription: ''
    }
  }

  componentDidMount = () => { };

  componentDidUpdate(prevProps) { }

  onSubmit = async (e) => {
    e.preventDefault();
    /**
     *  Setting the loader & submiting the form based on user input
     */
    const { firstName, lastName, mobileNo, pincode, city, instagram, facebook, introduction, shortDescription, email, dob } = this.state;
    this.setState({ isLoading: true })

    if (this.handleValidation()) {
      let data = {
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "mobile": mobileNo,
        "city": city,
        "pincode": pincode,
        "profile_pic": "",
        "insta_handle": instagram,
        "short_intro": shortDescription,
        "dob": dob
      }
      Services.updateProfile(data).then(response => {
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
   * Inline Error validation
   * @returns 
   */
  handleValidation() {
    const { firstName, lastName, dob, mobileNo, email, pincode, city, introduction, } = this.state;
    let errors = '';
    let formIsValid = true;

    // password
    if (!firstName) {
      formIsValid = false;
      errors = 'Firsname is Required';
    }

    // pancardNo
    if (!lastName) {
      formIsValid = false;
      errors = 'Lastname is Required';
    }

    // Confirm password
    if (!dob) {
      formIsValid = false;
      errors = 'Date of birth is Required';
    }

    // Confirm password
    if (!mobileNo) {
      formIsValid = false;
      errors = 'Mobile number is Required';
    }

    // Confirm password
    if (!email) {
      formIsValid = false;
      errors = 'Email address is Required';
    }

    // Confirm password
    if (!city) {
      formIsValid = false;
      errors = 'City is Required';
    }

    // Confirm password
    if (!pincode) {
      formIsValid = false;
      errors = 'Pincode is Required';
    }

    //password and Confirm password both blank
    if (!firstName && !lastname && !dob && !mobileNo && !city && !pincode && !introduction && !email) {
      errors = 'all fields are required';
    }

    this.setState({ errorMsg: errors })
    return formIsValid;

  }

  /**
  *  Updating states on changing username and password
  */
  changeHandler = (stateHolder, e) => {
    this.setState({ [stateHolder]: stringFormat(e.target.value) }, () => this.handleValidation());
  }

  render() {

    const { firstName, errorMsg, lastName, pincode, dob, city, facebook, shortDescription, instagram, twitter, email, mobileNo } = this.state;
    return (
      <div className="dashboard">
        <div className="profile-wrapper">
          <Sidebar />
          <div className="profile-content">
            <h4>Profile</h4>
            <Form>
              <Row>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">First Name</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('firstName', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={firstName}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Last Name</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('lastName', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={lastName}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">DOB</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('dob', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={dob}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Contact No</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('mobileNo', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={mobileNo}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="4">
                  <div className="form-group">
                    <label data-testid="username-label">Email ID</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('email', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={email}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="4">
                  <div className="form-group">
                    <label data-testid="username-label">City</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('city', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={city}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="4">
                  <div className="form-group">
                    <label data-testid="username-label">Pincode</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('pincode', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={MAXLENGTH.EMAIL}
                      testid="username-input"
                      value={pincode}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="12">
                  <div className="form-group">
                    <label data-testid="username-label">Short Description</label>
                    <textarea
                      onChange={(e) => { this.changeHandler('shortDescription', e); }}
                      value={shortDescription}
                      className="form-control"
                    ></textarea>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="form-group">
                    <label data-testid="username-label">Facebook</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('facebook', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      testid="username-input"
                      value={facebook}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="4">
                  <div className="form-group">
                    <label data-testid="username-label">Instagram</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('instagram', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      testid="username-input"
                      value={instagram}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="4">
                  <div className="form-group">
                    <label data-testid="username-label">Twitter</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('twitter', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      testid="username-input"
                      value={twitter}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm='12'>
                  <div className="form-group">
                    <span className="error">{errorMsg}</span>
                  </div>
                </Col>
              </Row>

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

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
