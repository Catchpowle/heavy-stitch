import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
