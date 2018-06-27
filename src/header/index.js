import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Wrapper from './wrapper.js';
import Navigation from './navigation';
import NewsletterSignupCell from './newsletter-signup-cell.js';
import { NewsletterSignup } from '../channels';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Grid columns={12}>
          <Cell width={12}>
            <Navigation/>
          </Cell>
          <NewsletterSignupCell width={4} left={9}>
            <NewsletterSignup />
          </NewsletterSignupCell>
        </Grid>
      </Wrapper>
    );
  }
}

export default Header;
