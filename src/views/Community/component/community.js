import React, { Component } from 'react';
import './community.scss';
import './discord.png';
import './twitter.png';
import './instagram.png';
import communityImg from '../../../assets/img/community.png';
import joinImg from '../../../assets/img/join.png';
import memberImg from '../../../assets/img/member.png';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button, Col, Row } from 'reactstrap';

class community extends Component {
    render() {
        return (
            <main className='container'>
                <Tabs>
                    <TabList>
                        <Tab>Community</Tab>
                        <Tab>Members</Tab>
                        <Tab>Join</Tab>
                    </TabList>

                    <TabPanel>
                        <Row className='justify-content-center'>
                            <Col sm={4}>
                                <figure>
                                    <img className='img-fluid' src={communityImg} alt="" />
                                </figure>
                            </Col>
                            <Col sm={5}>
                                <div className='content'>
                                    <h2>Commnunity</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                    <Button color='outline-primary'>Explore</Button>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel>
                        <Row className='justify-content-center'>
                            <Col sm={4}>
                                <figure>
                                    <img className='img-fluid' src={memberImg} alt="" />
                                </figure>
                            </Col>
                            <Col sm={5}>
                                <div className='content'>
                                    <h2>Members</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                    <Button color='outline-primary'>Explore</Button>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel>
                        <Row className='justify-content-center'>
                            <Col sm={4}>
                                <figure>
                                    <img className='img-fluid' src={joinImg} alt="" />
                                </figure>
                            </Col>
                            <Col sm={5}>
                                <div className='content'>
                                    <h2>Join</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                    <a href='https://bit.ly/Jointravander' target="_blank" className='btn btn-outline-primary' color='outline-primary'>Join Now</a>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                </Tabs>
            </main>
        )
    }
}

export default community;