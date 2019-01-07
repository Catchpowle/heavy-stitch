import React, { Component } from 'react';
import { Grid } from 'styled-css-grid';
import Branding from './branding';
import { HeadingCell, LinksCell }  from './header-cells.js';
import SocialLinks from '../../channels/social-links.js';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Grid columns={12}>
          <HeadingCell width={3}>
            <Branding>Heavy Stitch</Branding>
          </HeadingCell>

          <LinksCell width={4} left={9}>
            <SocialLinks />
          </LinksCell>
        </Grid>
      </nav>
    );
  }
}

export default Navigation;
