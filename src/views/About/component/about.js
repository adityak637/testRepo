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
    CardImg,
    CardGroup,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";
import './about.scss';
import './travel.png';
import aditya from '../../../assets/img/user/aditya.jpeg';
import paras from '../../../assets/img/user/paras.jpeg';
import nihal from '../../../assets/img/user/nihal.jpeg';
import rk from '../../../assets/img/user/rk.jpg';
import akash from '../../../assets/img/user/akash.jpeg';
import akshita from '../../../assets/img/user/akshita.jpeg';
import surya from '../../../assets/img/user/surya.jpeg';
import shivani from '../../../assets/img/user/shivani.jpeg';
import tulika from '../../../assets/img/user/tulika.jpeg';
import pragati from '../../../assets/img/user/pragati.jpg';
import user from '../../../assets/img/user.svg';

const data = [
    { "name": "Aditya Kulshreshta", "img": aditya, "linkedin": "https://www.linkedin.com/in/adityakulshrestha/", "position": "Co-founder" },
    { "name": "Nihal Sharma", "img": nihal, "linkedin": "https://www.linkedin.com/in/nihalsharma143/", "position": "Co-founder" },
    { "name": "Paras Pundhir", "img": paras, "linkedin": "https://www.linkedin.com/in/iamparaspundir/", "position": "Co-founder" },
    { "name": "Rahul Kumar", "img": rk, "linkedin": "https://www.linkedin.com/in/rk25028/", "position": "Front-end Lead" },
    { "name": "Surya Pratap Singh", "img": surya, "linkedin": "https://www.linkedin.com/in/spss/", "position": "DevOps" },
    { "name": "Akash Agrawal", "img": akash, "linkedin": "https://www.linkedin.com/in/akash21j94/", "position": "Community Leader" },
    { "name": "Shivani Kulshreshta", "img": shivani, "linkedin": "https://www.linkedin.com/in/shivani-kulshreshtha-845a1514a/", "position": "Developer" },
    { "name": "Mayank Garg", "img": user, "linkedin": "https://www.linkedin.com/in/", "position": "Developer" },
    { "name": "Tulika Sinha", "img": tulika, "linkedin": "https://www.linkedin.com/in/tulika-sinha-61b0b890/", "position": "Marketing" },
    // { "name": "Pragati Garg", "img": pragati, "linkedin": "https://www.linkedin.com/in/", "position": "Community Manager" },
    { "name": "Akshita Shrivastava", "img": akshita, "linkedin": "https://www.linkedin.com/in/akshita-shrivastava-229780188/", "position": "Social Media" }
]



class about extends Component {
    render() {
        return (
            <div className="landing-page">
                <section className='hero-section'>
                    <Row>
                        <Col md={6} className="col1">
                            <Row className='hero-section-left'>
                                <h1 className='herotext'>About <span>Travander</span></h1>
                                <p className='heropara'>Life is Short and the World is Wide!</p>
                                <p>Travander is a community-driven platform for all types of travel experiences in India with a vision to make our Indian Pro-Travellers more sustainable and credible through their travel experiences.</p>
                            </Row>
                        </Col>

                        <Col md={6} className='col2'>
                            <Row className='hero-section-right'>
                                <img src={require('./travel.png')} alt="travel" className='travelimg' />
                            </Row>
                        </Col>
                    </Row>
                </section>

                {/*Team */}
                <section className='team-section'>
                    <h1 className='team-heading'>Folks behind Travander</h1>
                    <p className='text-center py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s, when an unknown</p>
                    <Row className='cofounders'>
                        {data && data.length && data.map((item, i) => {
                            return (
                                <Col sm={3} key={i}>
                                    <Card>
                                        <figure>
                                            <CardImg src={item.img} alt="Card image cap" className='cardimg' />
                                        </figure>

                                        <CardBody className='cardbody'>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardText>{item.position}</CardText>
                                            <div className='social'>
                                                <a href={item.linkedin} target="_blank"><i className="fa fa-brands fa-linkedin"></i></a>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </section>
            </div>
        )
    }
}
export default about;