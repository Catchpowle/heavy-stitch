import React from 'react';
import NextButton from './NextButton.js';
import NextArrowIcon from './NextArrowIcon.js';

class NextArrow extends React.Component {
  render() {
    return (
      <NextButton>
        <NextArrowIcon/>
      </NextButton>
    );
  }
}


export default NextArrow;
