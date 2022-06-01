import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, CardFooter
} from 'reactstrap';
import RatingStar from '../RatingStar/ratingstar';
import './productcardwofooter.scss';

import img from "../../assets/img/test-img.jpg";

const ProductCardWOFooter = (props) => {
  return (
    <div className="product-card">
      <Card>
        <CardBody>
          <CardImg top width="100%" src={img} alt="" />
          <Col>
            <CardTitle>Kasol</CardTitle>
            <CardSubtitle>The biggest and the most beautiful canyon in the world biggest and the</CardSubtitle>
          </Col>
          <Col>
            <div className='card-price'>
              <span className='location'>Goa</span>
              <span className="price">Rs. 5999</span>
            </div>
          </Col>
        </CardBody>
      </Card>
    </div>
  )
};

export default ProductCardWOFooter;