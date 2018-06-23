import React, { Component } from 'react';
import Heading from './Heading.js';
import { Grid } from 'styled-css-grid';
import LinksCell from './LinksCell.js';
import HeadingCell from './HeadingCell.js';
import { SocialLinks } from '../../channels';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Grid columns={12}>
          <HeadingCell><Heading>Heavy Stitch</Heading></HeadingCell>
          <LinksCell left={10} center>
            <SocialLinks />
          </LinksCell>
        </Grid>
      </nav>
    );
  }
}

export default Navigation;
