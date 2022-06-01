/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.Footer')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
