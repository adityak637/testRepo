import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import './location.scss';

import img from "../../assets/img/spiti.jpeg";

const LocationCard = (props) => {
  const data = props && props.data;
  const list = data && data.length && data.map((item, i) => {

    return (
      <div className="location-card" key={i}>
        <Card >
          <Row noGutters>
            <Col sm="12">
              <CardImg top width="100%" src={item.thumbnail_photo ? item.thumbnail_photo : img} alt="" />
            </Col>
            <Col sm="12">
              <CardBody>
                <Col>
                  <CardSubtitle>{item.desination_name}</CardSubtitle>
                </Col>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    )
  })
  return (

    <>{list}</>
  )
};

export default LocationCard;
