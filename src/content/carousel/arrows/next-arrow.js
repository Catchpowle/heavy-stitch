import React from 'react';
import Button from './button.js';
import NextArrowIcon from './next-arrow-con.js';
import PropTypes from 'prop-types';

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

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
