import React, { Component } from 'react'
import Slider from 'react-rangeslider'
// To include the default styles
import 'react-rangeslider/lib/index.css'
import './rangeslider.scss'

class RangeSlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChangeValue = value => {
    this.setState({
      value: value
    })
  };

  render () {
    const { value } = this.state
    const sliderLabels = {
      0: '0',
      100: '100'
    }

    const formatkg = value => value + ''

    return (
      <div className='slider custom-labels'>
        <Slider
          min={0}
          max={100}
          value={value}
          labels={sliderLabels}
          format={formatkg}
          handleLabel={`${value}`}
          onChange={this.handleChangeValue}
        />
      </div>
    )
  }
}

export default RangeSlider