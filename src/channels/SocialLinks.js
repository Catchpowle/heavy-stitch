import React, { Component } from 'react';
import IconLink from './IconLink.js';
import Icon from './Icon.js';


class SocialLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <IconLink href="https://instagram.com/heavystitch" rel="noopener noreferrer" target="_blank"><Icon className="fab fa-instagram"></Icon></IconLink>
        <IconLink href='https://facebook.com/Heavy-Stitch-398227130663776'><Icon className="fab fa-facebook"></Icon></IconLink>
        <IconLink href='https://twitter.com/heavystitch'><Icon className="fab fa-twitter"></Icon></IconLink>
      </React.Fragment>
    );
  }
}

export default SocialLinks;
