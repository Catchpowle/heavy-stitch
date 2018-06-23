import React, { Component } from 'react';
import styled from 'styled-components';
import { SocialLinks } from '../../channels';

const Wrapper = styled.div`
  margin: 0.5rem 0
`;

class Channels extends Component {
  render() {
    return (
      <Wrapper>
        <SocialLinks />
      </Wrapper>
    );
  }
}

export default Channels;
