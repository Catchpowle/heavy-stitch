import React, { Component } from 'react';
import SimpleSlider from './slider';

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <SimpleSlider/>
        <SimpleSlider/>
        <SimpleSlider/>
        <SimpleSlider/>
        <SimpleSlider/>
      </React.Fragment>
    );
  }
}

export default Content;
