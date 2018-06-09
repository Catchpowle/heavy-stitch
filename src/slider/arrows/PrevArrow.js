import React from 'react';
import Button from './button';
import PrevArrowIcon from './PrevArrowIcon.js';

class PrevArrow extends React.Component {
  render() {
    const { className, style, onClick } = this.props;

    return (
      <div className={className} style={{ ...style }}>
        <Button onClick={onClick}>
          <PrevArrowIcon/>
        </Button>
      </div>
    );
  }
}


export default PrevArrow;
