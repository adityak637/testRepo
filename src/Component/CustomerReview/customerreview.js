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
import './customerreview.scss';
import TestImg from '../../assets/img/test-img.jpg';
import { RatingStar } from "../../../Component/index";


const customerreview = () => {
  return <div className='customerreview'>
    <Row>
      <Col sm="2" className="customer-img">
        <img src={TestImg} alt="customer-img" />
      </Col>

      <Col sm="10" className="customer-detail">
        <Row className='row1'>
          <h3>Steven Gerrard</h3>
          <p>52 MIN AGO</p>
        </Row>
        <Row className='row2'>
          <p><RatingStar size="15px" /></p>
          <hr></hr>
        </Row>
        <Row className='row3'>
          <h6>Another Dimension</h6>
          <p>Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros...</p>
        </Row>
      </Col>
    </Row>
  </div>;
};

export default customerreview;

