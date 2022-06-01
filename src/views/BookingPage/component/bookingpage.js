import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  COL,
  Col,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import './booking-page.scss';
import { SelectBox, PackageSlider, ProductCard, RatingStar, ProductCardWOFooter, CustomerReview } from "../../../Component/index";
import cardImg from '../../../assets/img/test-img.jpg';
import location from '../../../assets/img/icons/location.svg';
import TestImg from '../../../assets/img/test-img.jpg';


class bookingpage extends Component {
  render() {
    return (
      <div className="booking-page">
        <section className="section1">
          <Row className='row1'>
            <Col md="7" className="col1">
              <Row>
                <p className='trip-name'>Snow Forest</p>
                <p className="product-code">#112345</p>
                <p className='location-info'>Taste the cold and beauty of the Russian forest in winter.Taste the cold and beauty of the Russian forest in winter.</p>
                <p className="location"><img src={location} alt="location"></img>Camchatka, Russia</p>
                <p className="start-end">Start Point : Goa | 16th December 2021 | 09:00 AM  <br></br>
                  End Point : Rishikesh | 21st December 2021 | 05:00 AM</p>
              </Row>
            </Col>

            <Col md="5" className="col2">
              <Row className="trip-row">
                <img src={TestImg} alt="test-img" className="img1"></img>
                <p className="guide-name">Chris Evennet</p>
                <p className='rating-star'><RatingStar size="15px" /></p>
                <p className='trips-completed'>203 trips completed</p>
                <div className="guide-msg">
                  <p className='message-title'>Message from Chris : </p>
                  <p className='message-content'>Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros... Nullam aliquam interdumNunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros...</p>
                </div>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="section2">
          <Row className='row2'>
            <Col md="7" className="form">
              <h5 className='number-of-travellers'>Number of Travellers : </h5>
              <Form>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="Name">Profile Name</Label>
                      <Input type="input" name="ProfileName" id="Name">
                      </Input>

                      <Label for="Email id">Email id</Label>
                      <Input type="input" name="EmailId" id="Email id">
                      </Input>

                      <Label for="Full Name">Full Name (as per gov. records)*</Label>
                      <Input type="input" name="FullName" id="Full Name">
                      </Input>

                      <Label for="Full Name">Full Name (as per gov. records)*</Label>
                      <Input type="input" name="FullName" id="Full Name">
                      </Input>

                    </FormGroup>
                  </Col>

                  <Col>
                    <FormGroup>
                      <Label for="Age">Age</Label>
                      <Input type="input" name="Age" id="Age">
                      </Input>

                      <Label for="Contact No.">Contact No.</Label>
                      <Input type="input" name="ContactNo" id="Contact No.">
                      </Input>

                      <Label for="Age">Age</Label>
                      <Input type="input" name="Age" id="Age">
                      </Input>

                      <Label for="Age">Age</Label>
                      <Input type="input" name="Age" id="Age">
                      </Input>

                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col md="5" className="col3">
              <Row className='trip-final'>
                <p className="price">Price per person : Rs 9000</p>
                <p className="total-pax">Total Pax : 2</p>
                <p className="discover">Discover : 100</p>
                <p className="total-cost">Total Trip Cost : Rs 18000</p>
                <p className="policy">By Clicking on Book Now you confirm that all the details provided by you are correct, and accepting our TnC and Cancellation Policy.</p>
                <Button color='primary' className="book-now" >Book Now</Button>
                <FormGroup className='promocode'>
                  <Label for="Promo">Enter Promo Code</Label>
                  <Input type="input" name="Promo" id="Promo"></Input>
                </FormGroup>
              </Row>
            </Col>
          </Row>

        </section>
      </div>



    )
  }
}
export default bookingpage;


