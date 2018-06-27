import React, { Component } from 'react';
import styled from 'styled-components';
import { SocialLinks, NewsletterSignup } from '../../channels';

const ChannelsWrapper = styled.div`
  margin: 0rem 0 0.5rem

  @media (min-width: 1025px) {
    display: none;
  }
`;

const ChannelWrapper = styled.div`
  margin-bottom: 1rem

  @media (min-width: 1025px) {
    display: none;
  }
`;

class Channels extends Component {
  render() {
    return (
      <ChannelsWrapper>
        <ChannelWrapper>
          <SocialLinks />
        </ChannelWrapper>
        <ChannelWrapper>
          <NewsletterSignup />
        </ChannelWrapper>
      </ChannelsWrapper>
    );
  }
}

export default Channels;
