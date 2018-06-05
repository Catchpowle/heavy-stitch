import React from 'react';
import Button from './Button.js';
import Icon from './Icon.js';

class Indicator extends React.Component {
  render() {
    return (
      <Button slide={this.props.slide}>
        <Icon />
      </Button>
    );
  }
}


export default Indicator;
