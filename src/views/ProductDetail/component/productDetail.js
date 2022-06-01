/* eslint-disable jsx-a11y/alt-text */
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
import './productDetail.scss';
import { SelectBox, PackageSlider, ProductCard, RatingStar, ProductCardWOFooter, CustomerReview } from "../../../Component/index";
import TestImg from '../../../assets/img/test-img.jpg';


class ProductDetail extends Component {
    render() {
        return (
            <div className="product-detail">
                {/* Start of section1 */}
                <section className="section1">
                    <Row>
                        <Col sm="6" className='product-image'>
                            <Row>
                                <img src={TestImg} alt="product-img" className='img1' />
                            </Row>
                            <Row xs="3" className='product-3imgs'>
                                <img src={TestImg} alt="product-img" className='bottom-imgs' />
                                <img src={TestImg} alt="product-img" className='bottom-imgs' />
                                <img src={TestImg} alt="product-img" className='bottom-imgs' />
                            </Row>
                        </Col>

                        <Col sm="6" className='product-detail'>
                            <Row>
                                <h3 className='product-name'>Snow Forest</h3>
                                <p className='product-code'>#112345</p>
                            </Row>

                            <Row className='product-info'>
                                <p>Taste the cold and beauty of the Russian forest in winter.Taste the cold and beauty of the Russian forest in winter.</p>
                            </Row>
                            <Row>
                                <p className='location'>Camchatka, Russia</p>
                            </Row>
                            <Row>
                                <p className='start-end'>Start Point : Goa | 16th December 2021 | 09:00 AM  <br></br>
                                    End Point : Rishikesh | 21st December 2021 | 05:00 AM</p>
                            </Row>
                            <Row>
                                <p className='number-of-travellers'>*Max 20 travelers</p>
                            </Row>
                            <Row>
                                <p><Button color='primary' className='explore-btn'>Explore Now</Button></p>
                            </Row>
                        </Col>
                    </Row>
                </section>

                {/* Start of section2 */}

                <section className='section2'>
                    <h4 className='itinerary'>Itinerary</h4>
                    <Row>
                        <Col sm='4' className='itinerary-days'>
                            <Row>
                                <p className='date'>29 feb, 11:00 AM</p><br></br>
                                <p className='day'>Day 1</p>
                            </Row>
                            <Row>
                                <p className='day-info'>Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.</p>
                            </Row>
                        </Col>
                        <Col sm='4' className='itinerary-days'>
                            <Row>
                                <p className='date'>29 feb</p><br></br>
                                <p className='day'>Day 2</p>
                            </Row>
                            <Row>
                                <p className='day-info'>Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.</p>
                            </Row>
                        </Col>
                        <Col sm='4' className='itinerary-days'>
                            <Row className='trial'>
                                <p className='date'>29 feb</p><br></br>
                                <p className='day'>Day 3</p>
                            </Row>
                            <Row>
                                <p className='day-info'>Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.Aliquam interdum ipsum et tempor. Phasellus odiofelis, sceler.</p>
                            </Row>
                        </Col>
                        <Row>
                            <i class="fa-solid fa-circle-arrow-right"></i>
                        </Row>
                    </Row>
                </section>

                {/* Start of section3 */}

                <section className='section3'>
                    <Row>
                        <Col sm="4" className='guide-info1'>
                            <Row>
                                <img src={TestImg} alt="product-img" className='guide-img' />
                                <h5>Chris Evennent</h5>
                                <RatingStar size="15px" />
                                <p>203 trips completed</p>
                            </Row>
                        </Col>

                        <Col sm='8' className='guide-info2'>
                            <Row>
                                <h6>About Me</h6>
                                <p>Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros... Nullam aliquam interdumNunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros...
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </section>

                {/* Start of section4 */}
                <section className='section4'>
                    <Row>
                        <Col sm="6">
                            <Row>
                                <h4 className='advices'>Advices</h4>
                                <p className='advices-info'>Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers evolving needs and demands.</p>
                            </Row>
                        </Col>
                        <Col sm="6">
                            <Row>
                                <h4 className='guidelines'>Guidelines</h4>
                                <p className='guidelines-info'>At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being Indias leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customers queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy.</p>
                            </Row>
                        </Col>
                    </Row>
                </section>

                {/* Start of section5 */}
                <section className='section5'>
                    <Row>
                        <Col sm="12">
                            <h5>More by this</h5>
                            <Row>
                                <PackageSlider />
                            </Row>
                        </Col>
                    </Row>
                </section>

                {/* Start of section6 */}
                {/* <section className='section6'>
                    <Row>
                        <Col sm="12">
                            <CustomerReview />
                        </Col>
                    </Row>
                </section> */}

            </div>
        )
    }
}

export default ProductDetail;
