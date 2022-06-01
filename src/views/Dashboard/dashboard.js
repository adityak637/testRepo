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
import "./dashboard.scss";
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
      lastname: '',
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
              </Row>

              

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
