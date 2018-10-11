import React, { Component } from 'react';
import Header from './header';

class App extends Component {
  constructor({children}) {
    super();
    this.children = children;
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        {this.children}
        <style jsx global>{`
          html, body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            overflow-x: hidden;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default App;
