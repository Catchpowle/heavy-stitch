import React, { Component } from 'react';
import Container from './Container';
import Navigation from './navigation';

class Header extends Component {
  render() {
    return (
      <Container>
        <header>
          <Navigation />
        </header>
      </Container>
    );
  }
}

export default Header;
