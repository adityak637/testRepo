import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';
import './footer.scss';
import logo from '../../assets/img/f-logo.png';
import { Link } from 'react-router-dom';

const Footer = (props) => {

  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <figure>
              <img src={logo} />
            </figure>
          </Col>
          <Col>
            <h4>Menu</h4>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/tours'>Tours</Link></li>
              <li><Link to='/category'>Category</Link></li>
              <li><Link to='/about-us'>About Us</Link></li>
            </ul>
          </Col>
          <Col>
            <h4>Trips</h4>
            <ul>
              <li><Link to='/'>Personal Trip</Link></li>
              <li><Link to='/tours'>Group Trip</Link></li>
            </ul>
          </Col>
          <Col>
            <h4>Support</h4>
            <ul>
              <li><Link to='/'>FAQ</Link></li>
              <li><Link to='/'>Terms & Conditions</Link></li>
              <li><Link to='/'>Privacy Policy</Link></li>
              <li><Link to=''>Cancellation Policy</Link></li>
            </ul>
          </Col>
          <Col>
            <h4>Contact Us</h4>
            <ul>
              <li><Link to='/'>hello@travander.com</Link></li>
              <li><Link to='/'>+91 98766 19283</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;
