import React, { Component } from 'react';
import Container from './Container';
import { SocialLinks } from '../../channels';

class Channels extends Component {
  render() {
    return (
      <Container>
        <SocialLinks />
      </Container>
    );
  }
}

export default Channels;
