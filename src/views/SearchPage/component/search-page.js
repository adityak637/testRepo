import React, { Component } from "react";
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
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from "reactstrap";
import "./search-page.scss";
import { Link } from "react-router-dom";
import * as Services from '../reducer/service';
import { SelectBox, InputDatepicker } from "../../../Component/index";
import img from "../../../assets/img/test-img.jpg";

class SearchPage extends Component {
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
      isLoading: false,
      date: '',
      filteredData: [],
      locationList: [],
      travellersList: []

    }
  }

  componentDidMount = () => {

    const { location } = this.props;
    this.setState({ isLoading: true })
    const state = location && location.state;
    const locations = state && state.location;
    const travellerName = state && state.traveller;
    const date = state && state.date;

    Services.getTripsData(date, locations, travellerName).then(res => {
      this.setState({ isLoading: false })
      const data = res.Createtrip.data;
      this.setState({ filteredData: data })
    }).catch(err => {
      this.setState({ isLoading: false })
    })

    Services.getDropdownData().then(res => {
      const locations = res && res.locations;
      const Travellers = res && res.traveller_name;
      this.setState({ locationList: locations, travellersList: Travellers })
      console.log('res...', res)
    }).catch(e => {
      console.log('error', e)
    })
  };

  componentDidUpdate(prevProps) { }

  /**
   * Onsubmit the Form
   * @param {*} event 
   */
  searchTripData = () => {
    this.setState({ isLoading: true })
    const { date, selectedLocation, selectedTraveller } = this.state;
    const location = selectedLocation && selectedLocation.value;
    const travellerName = selectedTraveller && selectedTraveller.value;
    Services.getTripsData(date, location, travellerName).then(res => {
      const data = res.Createtrip.data;
      this.setState({ filteredData: data, isLoading: false })
    }).catch(err => {
      this.setState({ isLoading: false })
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

  renderProduct = () => {
    const { filteredData } = this.state;
    const dataList = filteredData.length && filteredData.map((item, i) => {
      console.log('item', item)
      return (
        <div className="product-card" key={i}>
          <Card>
            <figure>
              <CardImg top width="100%" src={img} alt="" />
            </figure>
            <CardBody>
              <Col>
                <h5>{item.trip_title}</h5>
                <h6 className="price my-2">{`₹${item.cost}`}</h6>
                <CardSubtitle>The biggest and the most beautiful canyon in the world biggest and the</CardSubtitle>
              </Col>
              <Col>
                <div className='card-price'>
                  <span className='location'>{item.desination_name}</span>
                  <span className='duration'>{item.desination_name}</span>
                  <span className="traveller">Name</span>
                </div>
              </Col>
            </CardBody>
          </Card>
        </div>
      )
    })

    return (
      <>
        {dataList}
      </>
    )
  };

  render() {
    const { selectedLocation, selectedTraveller, date, isLoading, locationList, travellersList } = this.state;
    return (
      <div className="dashboard">
        {isLoading ? <div className="loader"></div> : null}
        <section className="banner-section-wrapper">
          <Container>
            <Row>
              <Col sm="12">
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

        <section className="trip-list">
          {this.renderProduct()}
        </section>
      </div>
    );
  }
}

export default SearchPage;
