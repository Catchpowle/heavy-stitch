import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

class Content extends Component {
  render() {
    return (
      <Grid columns={12}>
        <Cell center left={4} width={4}>
          <p>
            Test Content.
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Content;
