import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Row,
  Col
} from "reactstrap";
import './advancesearch.scss';
import SelectBox from "../SelectBox"
import RangeSlider from '../RangeSlider';

const AdvanceSearch = (props) => {
    const { toggleCallback, show } = props;
    return (
      <div className={'as-wrapper '+show}>
         <div className="as-container">
           <Form>
              <div className="as-header">
                <h4>Advance Search</h4>
                <div className="as-buttons">
                  <Button color="default" type="reset">Clear</Button>
                  <Button color="secondary" onClick={toggleCallback}>Cancel</Button>
                  <Button color="primary" type="submit">Search</Button>
                </div>
              </div>

              {/* Basic Criteria */}
              <div className="as-section">
                <h4>Basic Criteria</h4>
                <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Label>HashTag</Label>
                        <Input name="type" />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Cost Per Post</Label>
                        <SelectBox isMulti={false} options={props.options} />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <div className="pt-4">
                        <CustomInput type="checkbox" id="id_1" label="Verified" />
                        <CustomInput type="checkbox" id="id_2" label="Instragram Verified" />
                      </div>
                    </Col>
                </Row>
              </div>

              {/* Performance or Out Reach Metrics */}
              <div className="as-section">
                <h4>Performance or Out Reach Metrics</h4>
                <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Engagement Rate</Label>
                        <SelectBox isMulti={false} options={props.options} />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Avg.Reach per Post</Label>
                        <RangeSlider />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Avg. Engagement Per Post</Label>
                        <RangeSlider />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Max Budget Managed Monthly</Label>
                        <RangeSlider />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Post Freq Weekly</Label>
                        <SelectBox isMulti={false} options={props.options} />
                      </FormGroup>
                    </Col>
                </Row>
              </div>

              {/* Audience Insights */}
              <div className="as-section">
                <h4>Audience Insights</h4>
                <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Gender</Label>
                        <div className="d-flex">
                          <CustomInput type="radio" name="gender" id="male" label="Male" />
                          <CustomInput type="radio" className="ml-4" id="female" name="gender" label="Female" />
                          <CustomInput type="radio" className="ml-4" id="other" name="gender" label="Other" />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label>Location City Level</Label>
                        <Input name="type" />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>Age Range</Label>
                        <RangeSlider />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                    <FormGroup>
                        <Label>Ethnicity</Label>
                          <CustomInput type="checkbox" id="item_1" label="Item 1" />
                          <CustomInput type="checkbox" id="item_2" label="Item 2" />
                          <CustomInput type="checkbox" id="item_3" label="Item 3" />
                      </FormGroup>
                    </Col>
                </Row>
              </div>


           </Form>
            
         </div>
      </div>
    );
}


export default AdvanceSearch;
