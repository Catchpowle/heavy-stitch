import React from 'react';
import Button from './button';
import NextArrowIcon from './NextArrowIcon.js';

class NextArrow extends React.Component {
  render() {
    const { className, style, onClick } = this.props;

    return (
      <div className={className} style={{ ...style }}>
        <Button onClick={onClick}>
          <NextArrowIcon/>
        </Button>
      </div>
    );
  }
}


export default NextArrow;
