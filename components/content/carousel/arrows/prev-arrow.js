import React from 'react';
import Button from './button';
import PrevArrowIcon from './prev-arrow-icon.js';
import PropTypes from 'prop-types';

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

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
