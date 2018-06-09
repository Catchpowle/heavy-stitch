import React, { Component } from 'react';
import List from './List.js';
import Heading from './Heading.js';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <List>
          <li><Heading>Heavy Stitch</Heading></li>
        </List>
      </nav>
    );
  }
}

export default Navigation;
