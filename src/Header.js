import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import NavBar from './NavBar.js';

class Header extends Component {
  render() {
    return (
      <header>
        <Grid columns={12}>
          <Cell width={12}>
            <NavBar />
          </Cell>
        </Grid>
      </header>
    );
  }
}

export default Header;
