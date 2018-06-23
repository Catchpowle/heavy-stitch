import React, { Component } from 'react';
import Container from './Container.js';
import Channels from './channels';
import Carousel from './carousel';

class Content extends Component {
  render() {
    return (
      <div>
        <Container>
          <Channels/>
          <Carousel/>
          <Carousel/>
          <Carousel/>
          <Carousel/>
          <Carousel/>
        </Container>
      </div>
    );
  }
}

export default Content;
