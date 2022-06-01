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
import './newTripform.scss';
import { SelectBox, PackageSlider, ProductCard, RatingStar, ProductCardWOFooter, CustomerReview } from "../../../Component/index";
import cardImg from '../../../assets/img/test-img.jpg';
import location from '../../../assets/img/icons/location.svg';
import TestImg from '../../../assets/img/test-img.jpg';



class newTripform extends Component {
    render() {
        return (
            <div className="newTripForm">
                <div className="form-container">
                    <div className="form-header">
                        <h3>Create a New Trip</h3>
                        <button><i class="fas fa-times"></i></button>
                    </div>

                    <div className="tripTitle">
                        <form>
                            <FormGroup className='triptitle-form'>
                                <Label for="tripTitle">Trip Title</Label>
                                <Input type="text" name="tripTitle" id="tripTitle" />
                            </FormGroup>
                        </form>
                    </div>

                    <div className="destination-name">
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='destination-form1'>
                                        <Label for="destinationName">Destination Name</Label>
                                        <Input type="text" name="destinationName" id="destinationName" placeholder="Enter Destination Name" />
                                    </FormGroup>
                                </form>
                            </Col>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='destination-form2'>
                                        <Label for="destinationName">Destination Name</Label>
                                        <Input type="text" name="destinationName" id="destinationName" placeholder="Enter Destination Name" />
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    <div className='short-introduction'>
                        <form>
                            <FormGroup className='short-introduction-form'>
                                <Label for="shortIntroduction">Short Introduction</Label>
                                <Input type="textarea" name="shortIntroduction" id="shortIntroduction" placeholder="Enter Short Introduction" />
                            </FormGroup>
                        </form>
                    </div>



                    <div className='start-end-details'>
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='start-form'>
                                        <Label for="startpoint">Start Point</Label>
                                        <Input type="select" name="select" id="startpoint">
                                            <option>Select Start Point</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </Input>
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="6">
                                <form>
                                    <FormGroup className='end-form'>
                                        <Label for="endpoint">End Point</Label>
                                        <Input type="select" name="select" id="endpoint">
                                            <option>Select End Point</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </Input>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>


                    {/* Start and end date part-1 */}
                    <div className='start-end-dates'>
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='startDate-form'>
                                        <Label for="startDate">Start Date</Label>
                                        <Input type="date" name="date" id="startDate">
                                        </Input>
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="6">
                                <form>
                                    <FormGroup className='endDate-form'>
                                        <Label for="endDate">End Date</Label>
                                        <Input type="date" name="date" id="endDate">
                                        </Input>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    {/* Start and end date part-2 */}
                    <div className='start-end-dates'>
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='startDate-form'>
                                        <Label for="startDate">Start Date</Label>
                                        <Input type="date" name="date" id="startDate">
                                        </Input>
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="6">
                                <form>
                                    <FormGroup className='endDate-form'>
                                        <Label for="endDate">End Date</Label>
                                        <Input type="date" name="date" id="endDate">
                                        </Input>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    {/*Day 1 itinerary*/}
                    <div className='day-1-itinerary'>
                        <form>
                            <FormGroup className='day1-itinerary-form'>
                                <Label for="day1Itinerary">Day 1 Itinerary</Label>
                                <Input type="textarea" name="day1Itinerary" id="day1Itinerary" placeholder="Enter Day 1 Itinerary" />
                            </FormGroup>
                        </form>
                    </div>

                    {/*Day 2 itinerary*/}
                    <div className='day-2-itinerary'>
                        <form>
                            <FormGroup className='day2-itinerary-form'>
                                <Label for="day2Itinerary">Day 2 Itinerary</Label>
                                <Input type="textarea" name="day2Itinerary" id="day2Itinerary" placeholder="Enter Day 2 Itinerary" />
                            </FormGroup>
                        </form>
                    </div>

                    {/*Day 3 itinerary*/}
                    <div className='day-3-itinerary'>
                        <form>
                            <FormGroup className='day3-itinerary-form'>
                                <Label for="day3Itinerary">Day 3 Itinerary</Label>
                                <Input type="textarea" name="day3Itinerary" id="day3Itinerary" placeholder="Enter Day 3 Itinerary" />
                            </FormGroup>
                        </form>
                    </div>

                    {/*Number of day,nights,booking closing time*/}
                    <div className='day-nights-booking-closing-time'>
                        <Row>
                            <Col sm="4">
                                <form>
                                    <FormGroup className='night-form'>
                                        <Label for="nights">No. of Nights</Label>
                                        <Input type="input" name="nights" id="nights" />
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="4">
                                <form>
                                    <FormGroup className='day-form'>
                                        <Label for="days">No. of Days</Label>
                                        <Input type="input" name="days" id="days" />
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="4">
                                <form>
                                    <FormGroup className='booking-closing-time-form'>
                                        <Label for="bookingClosingTime">Booking Closing Time</Label>
                                        <Input type="date" name="date" id="bookingClosingTime" />
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    {/*Advice , Guidelines*/}
                    <div className='advice-guidelines'>
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='advice-form'>
                                        <Label for="advice">Advice</Label>
                                        <Input type="textarea" name="advice" id="advice" />
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="6">
                                <form>
                                    <FormGroup className='guidelines-form'>
                                        <Label for="guidelines">Guidelines</Label>
                                        <Input type="textarea" name="guidelines" id="guidelines" />
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    {/*Cost per person & maximum person in batch*/}
                    <div className='cost-per-person-batch'>
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='cost-per-person-form'>
                                        <Label for="costPerPerson">Cost Per Person</Label>
                                        <Input type="input" name="costPerPerson" id="costPerPerson" />
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="6">
                                <form>
                                    <FormGroup className='maximum-person-form'>
                                        <Label for="maximumPerson">Maximum Person in Batch</Label>
                                        <Input type="input" name="maximumPerson" id="maximumPerson" />
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    {/*Promo code & discount type and amount*/}
                    <div className='promo-code-discount-type-amount'>
                        <Row>
                            <Col sm="6">
                                <form>
                                    <FormGroup className='promo-code-form'>
                                        <Label for="promoCode">Promo Code</Label>
                                        <Input type="input" name="promoCode" id="promoCode" />
                                    </FormGroup>
                                </form>
                            </Col>

                            <Col sm="6">
                                <form>
                                    <FormGroup className='discount-type-form'>
                                        <Label for="discountType">Discount Type and Amount</Label>
                                        <Input type="input" name="discountType" id="discountType" />
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    {/*Upload thumbnail*/}
                    <div className='upload-thumbnail'>
                        <form>
                            <FormGroup as={Row} className='upload-thumbnail-form'>
                                <Label for="uploadThumbnail">Thumbnail Image</Label>
                                <div class="input-group">
                                    <Input type="input" name="input" id="uploadThumbnail" />
                                    <i class="fa fa-solid fa-upload"></i>
                                </div>
                            </FormGroup>
                        </form>
                    </div>

                    {/*Upload cover*/}
                    <div className='upload-cover'>
                        <form>
                            <FormGroup className='upload-cover-form'>
                                <Label for="uploadCover">Cover Image</Label>
                                {/*Add icon at end of row to show upload button*/}
                                <div class="input-group">
                                    <Input type="input" name="input" id="uploadCover" />
                                    <i class="fa fa-solid fa-upload"></i>
                                </div>
                            </FormGroup>
                        </form>
                    </div>

                    {/*Upload location images*/}
                    <div className='upload-location-images'>
                        <form>
                            <FormGroup className='upload-location-images-form'>
                                <Label for="uploadLocationImages">Location Images</Label>
                                <div class="input-group">
                                    <Input type="input" name="input" id="uploadLocationImages" />
                                    <i class="fa fa-solid fa-upload"></i>
                                </div>
                            </FormGroup>
                        </form>
                    </div>

                    {/*message for users*/}
                    <div className='message-for-users'>
                        <form>
                            <FormGroup className='message-for-users-form'>
                                <Label for="messageForUsers">Message for users</Label>
                                <Input type="textarea" name="messageForUsers" id="messageForUsers" />
                            </FormGroup>
                        </form>
                    </div>
                    <Button className='previewDetails-button' color="primary">Preview Details</Button>
                </div>
            </div>
        )
    }

}


export default newTripform;