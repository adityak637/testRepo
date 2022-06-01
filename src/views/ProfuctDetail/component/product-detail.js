import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
} from "reactstrap";
import "./product-detail.scss";
import { Link } from "react-router-dom";
import bannerImg from '../../../assets/img/banner.jpg';
import logoImg from '../../../assets/img/c-logo.png';
import { PostCard } from "../../../Component/index";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'John Doe',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROa-v3M7qp_Po1Bw2zSgueCCbIPCKlrptQrA&usqp=CAU',
          rating: 3.5,
          category: 'Food, Health & Fitness'
        },
        {
          name: 'John Doe',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROa-v3M7qp_Po1Bw2zSgueCCbIPCKlrptQrA&usqp=CAU',
          rating: 2,
          category: 'Food, Health & Fitness'
        },
        {
          name: 'John Doe',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROa-v3M7qp_Po1Bw2zSgueCCbIPCKlrptQrA&usqp=CAU',
          rating: 4,
          category: 'Food, Health & Fitness'
        },
        {
          name: 'Linda hayden',
          description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROa-v3M7qp_Po1Bw2zSgueCCbIPCKlrptQrA&usqp=CAU',
          rating: 3,
          category: 'Food, Health & Fitness'
        }
      ],
    }
  }

  componentDidMount = () => { };

  componentDidUpdate(prevProps) { }

  render() {

    const { items } = this.state;
    return (
      <div className="my-profile">
        <Container>
          <Row>
            <Col sm="12">
              <div className="company-card">
                <div className="banner">
                  <img src={bannerImg} className="w-100" />
                </div>
                <div className="campany-info">
                  <Row>
                    <Col sm="7">
                      <div className="c-info-data">
                        <figure className="logo">
                          <img src={logoImg} />
                        </figure>
                        <div className="c-text">
                          <h4 className="brand-name">Airtel</h4>
                          <div>
                            <span>Telecommunications</span>
                            <span>Gurgaon, Haryana</span>
                            <span>295 followers</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm="5"></Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col sm="8">
              <div className="about-brand">

              </div>
              <PostCard list={items} />
            </Col>
            <Col sm="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
