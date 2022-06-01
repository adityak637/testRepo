import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InputDatepicker } from "../../../Component/index";
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
import "./landing-page.scss";
import { Link } from "react-router-dom";
import * as Services from '../reducer/service'

import { SelectBox, PackageSlider, ProductCard } from "../../../Component/index";

import aboutImg from '../../../assets/img/about-img.png';
import LocationCard from "../../../Component/LocationCard/locationcard";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'kasol', label: 'Kasol' },
        { value: 'Test2', label: 'Test2' },
        { value: 'Test3', label: 'Test3' },
      ],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8],
      selectedDate: [],
      selectedLocation: [],
      selectedTraveller: [],
      date: '',
      hotLocations: [],
      tripPackages: [],
      travellersList: [],
      locationList: []
    }
  }

  componentDidMount = () => {

    Services.getHotLocations().then(res => {
      const data = res && res.trips;
      this.setState({ hotLocations: data })
    }).catch(e => {
      console.log('error', e)
    })


    Services.getDropdownData().then(res => {
      const locations = res && res.locations;
      const Travellers = res && res.traveller_name;
      this.setState({ locationList: locations, travellersList: Travellers })
    }).catch(e => {
      console.log('error', e)
    })


    Services.getHomePackages().then(res => {
      const data = res && res.trips;
      this.setState({ tripPackages: data })
    }).catch(e => {
      console.log('error...', e)
    })
  };

  componentDidUpdate(prevProps) { }

  /**
   * Onsubmit the Form
   * @param {*} event 
   */
  searchTripData = () => {
    const { date, selectedLocation, selectedTraveller } = this.state;
    const location = selectedLocation && selectedLocation.value;
    const travellerName = selectedTraveller && selectedTraveller.value;
    let data = {
      'date': date,
      'traveller': travellerName,
      'location': location
    }
    this.props.history.push({
      pathname: '/search',
      state: data
    })
  }

  /**
  * SelectBox onChange Handler
  * @param {*} val 
  * @param {*} stateHolder 
  */
  selectBoxchangeHandler = (val, stateHolder) => {
    this.setState({
      ...this.state,
      [stateHolder]: val != null ? val : []
    })
  }


  /**
   * DatePicker onChange Handler
   * @param {*} val 
   * @param {*} stateHolder 
   */
  datePickerchangeHandler = (val, stateHolder) => {
    this.setState({
      ...this.state,
      [stateHolder]: val
    })
  }

  render() {
    const { selectedLocation, selectedTraveller, date, hotLocations, locationList, travellersList, tripPackages } = this.state;
    return (
      <div className="landing-page">
        <section className="banner-section">
          <Container>
            <Row>
              <Col sm="12">
                <h3>Travander is all you need</h3>
                <h2>Explore India</h2>
                <div className="search-row d-flex">
                  <FormGroup>
                    <Label>Traveler's Name</Label>
                    <SelectBox name="skills" onChange={(val) => this.selectBoxchangeHandler(val, 'selectedTraveller')} value={selectedTraveller} isMulti={false} options={travellersList} />
                  </FormGroup>
                  <FormGroup>
                    <Label className="date">Date</Label>
                    <InputDatepicker value={date} onChange={(val) => this.datePickerchangeHandler(val, 'date')} name="date" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Location</Label>
                    <SelectBox name="skills" onChange={(val) => this.selectBoxchangeHandler(val, 'selectedLocation')} value={selectedLocation} isMulti={false} options={locationList} />
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" onClick={this.searchTripData}></Button>
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="money-saving">
          <Container>
            <Row>
              <Col sm="6">
                <img src={aboutImg} className="img-fluid" />
              </Col>
              <Col sm="6">
                <h2 className="pt-5 pb-2">
                  Why Choose <span className="text-primary">Travan</span>der
                </h2>
                <p>There are always undoubted leaders, professionals in their field, experts of their product - that's us! Travel agency Travander does not stand still, we work for you! We are developing our network, opening new offices, inspecting hotels and discovering new countries, and most importantly, we provide our tourists with the best service in India!</p>

              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <div className="hot-location">
              <Row>
                <Col sm="12">
                  <h2>
                    Hot Locations
                  </h2>
                  <p>You don't have to look for your tour for a long time. <br />We have grouped them by category</p>
                  <div className="product-list-grid-3">
                    {hotLocations && hotLocations.length ? <LocationCard data={hotLocations} /> : 'No Result Found'}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>


        <section className="packages">
          <Container>
            <Row>
              <Col sm="12 text-center">
                <h2 className="pt-5">
                  Trending Locations For You
                </h2>
                <p>More places for your vibes from India</p>
                <div>
                  {tripPackages && tripPackages.length ? <PackageSlider data={tripPackages} /> : 'No Result Found'}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
