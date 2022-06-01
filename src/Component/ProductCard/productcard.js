import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, CardFooter
} from 'reactstrap';
import RatingStar from '../RatingStar/ratingstar';
import './product.scss';

import img from "../../assets/img/test-img.jpg";

const ProductCard = (props) => {
  const data = props && props.data;
  console.log('dggdgdd...', data)
  const list = data.length && data.map((item, i) => {
    return (
      <div className="product-card" key={i}>
        <Card>
          <CardBody>
            <CardImg top width="100%" src={img} alt="" />
            <Col>
              <CardTitle>{item.trip_title}</CardTitle>
              <CardSubtitle>{item.short_message}</CardSubtitle>
            </Col>
            <Col>
              <div className='card-price'>
                <span className='location'>{item.desination_name}</span>
                <span className="price">{`₹${item.cost}`}</span>
              </div>
            </Col>
          </CardBody>
          <CardFooter>
            Explore Now <i className='fa fa-arrow-right'></i>
          </CardFooter>
        </Card>
      </div>
    )
  })
  return (
    <>{list}</>
  )
};

export default ProductCard;
