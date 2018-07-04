import React, { Component } from 'react';
import Wrapper from './wrapper.js';
import Channels from './channels';
import Carousel from './carousel';

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Carousel/>
        <Channels/>
      </Wrapper>
    );
  }
}

export default Content;
