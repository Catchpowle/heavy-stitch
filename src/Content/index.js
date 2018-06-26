import React, { Component } from 'react';
import Wrapper from './wrapper.js';
import Channels from './channels';
import Carousel from './carousel';

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Channels/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
      </Wrapper>
    );
  }
}

export default Content;
