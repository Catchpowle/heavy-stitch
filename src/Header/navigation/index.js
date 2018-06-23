import React, { Component } from 'react';
import Heading from './Heading.js';
import { Grid } from 'styled-css-grid';
import LinksCell from './LinksCell.js';
import HeadingCell from './HeadingCell.js';
import IconLink from './IconLink.js';
import Icon from './Icon.js';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Grid columns={12}>
          <HeadingCell width={3}><Heading>Heavy Stitch</Heading></HeadingCell>
          <LinksCell width={3}left={10} center>
            <IconLink href="https://instagram.com/heavystitch" rel="noopener noreferrer" target="_blank"><Icon className="fab fa-instagram"></Icon></IconLink>
            <IconLink href='https://google.com'><Icon className="fab fa-facebook"></Icon></IconLink>
            <IconLink href='https://google.com'><Icon className="fab fa-twitter"></Icon></IconLink>
          </LinksCell>
        </Grid>
      </nav>
    );
  }
}

export default Navigation;
