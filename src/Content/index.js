import React, { Component } from 'react';
import Container from './Container.js';
import Carousel from './carousel';

class Content extends Component {
  render() {
    return (
      <div>
        <Container>
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
