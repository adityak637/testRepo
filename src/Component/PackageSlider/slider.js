import React from 'react';
import './slider.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, CardFooter
} from 'reactstrap';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const PackageSlider = (props) => {

  const data = props && props.data;
  console.log("data", data)
  return (
    <Carousel responsive={responsive}>
      {data && data.map((item, i) => {
        return (
          <div className="product-card" key={i}>
            <Card>
              <CardBody>
                <CardImg top width="100%" src={item.thumbnail_photo} alt="" />
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
        );
      })}
    </Carousel>
  );
}


export default PackageSlider;
