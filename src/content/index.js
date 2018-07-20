import React, { Component } from 'react';
import Wrapper from './wrapper.js';
import Channels from './channels';
import Carousel from './carousel';
import looks from '../looks.js';

class Content extends Component {
  displayLooks(looks) {
    return (Object.keys(looks).reverse().map(key => {
      const fit = looks[key].fit;
      const items = looks[key].items;

      return <Carousel key={key} fit={fit} items={items} />;
    }));
  }


  render() {
    return (
      <Wrapper>
        {this.displayLooks(looks)}
        <Channels/>
      </Wrapper>
    );
  }
}

export default Content;
