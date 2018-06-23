import React, { Component } from 'react';
import Header from './header';
import Content from './content';

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
