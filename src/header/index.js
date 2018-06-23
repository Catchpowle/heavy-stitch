import React, { Component } from 'react';
import Wrapper from './wrapper.js';
import Navigation from './navigation';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
      </Wrapper>
    );
  }
}

export default Header;
