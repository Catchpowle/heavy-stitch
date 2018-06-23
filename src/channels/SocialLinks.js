import React, { Component } from 'react';
import SocialLink from './SocialLink';

class SocialLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <SocialLink 
          iconHref="https://instagram.com/heavystitch"
          iconClasses='fab fa-instagram'
        />
        <SocialLink 
          iconHref="https://facebook.com/Heavy-Stitch-398227130663776"
          iconClasses='fab fa-facebook'
        />
        <SocialLink 
          iconHref="https://twitter.com/heavystitch"
          iconClasses='fab fa-twitter'
        />
      </React.Fragment>
    );
  }
}

export default SocialLinks;
