import React, { Component } from 'react';
import Carousel from './carousel';

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
        <Carousel/>
      </React.Fragment>
    );
  }
}

export default Content;
