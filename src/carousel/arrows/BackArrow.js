import React from 'react';
import BackButton from './BackButton.js';
import BackArrowIcon from './BackArrowIcon.js';

class BackArrow extends React.Component {
  render() {
    return (
      <BackButton>
        <BackArrowIcon/>
      </BackButton>
    );
  }
}


export default BackArrow;
