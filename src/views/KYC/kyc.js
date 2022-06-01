import React, { Component } from "react";
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
import "./kyc.scss";
import { Link } from "react-router-dom";
import { Input, Sidebar } from "../../Component/index";
import en from '../../i18n/en.json';
import { HTTP_STATUS, MAXLENGTH } from '../../constants/AppConstants';
import { stringFormat } from "../../Utility/helper";
import * as Services from './service'

class KYC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhaarNo: '',
      pancardNo: '',
      bankAccountNo: '',
      confirmBankAccountNo: '',
      IFSCCode: '',
      mobile: '',
      errorMsg: '',
    }
  }

  componentDidMount = () => { };

  componentDidUpdate(prevProps) { }

  /**
   * Inline Error validation
   * @returns 
   */
  handleValidation() {
    const { aadhaarNo, pancardNo, bankAccountNo, confirmBankAccountNo, IFSCCode, mobile } = this.state;
    let errors = '';
    let formIsValid = true;

    // password
    if (!aadhaarNo) {
      formIsValid = false;
      errors = 'AADHAAR number is Required';
    }

    // pancardNo
    if (!pancardNo) {
      formIsValid = false;
      errors = 'Pancard number is Required';
    }

    // Confirm password
    if (!bankAccountNo) {
      formIsValid = false;
      errors = 'Bank Account number is Required';
    }

    // Confirm password
    if (!confirmBankAccountNo) {
      formIsValid = false;
      errors = 'Confirm Bank Account number is Required';
    }

    //password and Confirm password does not match
    if (confirmBankAccountNo && confirmBankAccountNo != bankAccountNo) {
      formIsValid = false;
      errors = 'Confirm Bank Account number is not match';
    }

    // Confirm password
    if (!IFSCCode) {
      formIsValid = false;
      errors = 'IFSC Code is Required';
    }

    // Confirm password
    if (!mobile) {
      formIsValid = false;
      errors = 'Mobile number is Required';
    }

    //password and Confirm password both blank
    if (!aadhaarNo && !pancardNo && !bankAccountNo && !confirmBankAccountNo && !IFSCCode && !mobile) {
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
    const { aadhaarNo, pancardNo, IFSCCode, bankAccountNo, confirmBankAccountNo, mobile } = this.state;
    this.setState({ isLoading: true })

    if (this.handleValidation()) {
      let data = {
        "aadhaarno": aadhaarNo,
        "pancardno": pancardNo,
        "ifsc_code": IFSCCode,
        "accountno": bankAccountNo,
        "mobile": mobile
      }
      Services.updateKYC(data).then(response => {
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

    const { aadhaarNo, errorMsg, pancardNo, IFSCCode, bankAccountNo, confirmBankAccountNo, mobile } = this.state;
    return (
      <div className="dashboard">
        <div className="profile-wrapper">
          <Sidebar />
          <div className="profile-content">
            <h4>KYC</h4>
            <Form>
              <Row>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Enter Aadhar Card Number</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('aadhaarNo', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={14}
                      testid="username-input"
                      value={aadhaarNo}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Pan Card Number</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('pancardNo', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={10}
                      testid="username-input"
                      value={pancardNo}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Bank Account Number</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('bankAccountNo', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={50}
                      testid="username-input"
                      value={bankAccountNo}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Re-enter Bank Account Number</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('confirmBankAccountNo', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={50}
                      testid="username-input"
                      value={confirmBankAccountNo}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">IFSC Code</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('IFSCCode', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={50}
                      testid="username-input"
                      value={IFSCCode}
                      error={errorMsg}
                    />
                  </div>
                </Col>
                <Col sm="6">
                  <div className="form-group">
                    <label data-testid="username-label">Phone Number</label>
                    <Input
                      type="text"
                      name="F-name"
                      onchange={(e) => { this.changeHandler('mobile', e); }}
                      hasIcon={false}
                      placeholder={en.USERNAME}
                      maxlength={10}
                      testid="username-input"
                      value={mobile}
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


export default KYC;
