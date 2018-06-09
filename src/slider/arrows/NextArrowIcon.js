import React, { Component } from 'react';

class NextArrowIcon extends Component {
  render() {
    return (
      <svg viewBox="0 0 100 100">
        <path
          style={{
            textIndent: 0,
            textAlign: 'start',
            lineHeight: 'normal',
            textTransform: 'none',
            blockProgression: 'tb',
            marker: 'none',
            InkscapeFontSpecification: 'Sans'
          }}
          d='M29.656 6.969a3 3 0 0 0-1.781 5.125L65.75 50 27.875 87.875a3 3 0 1 0 4.25 4.219l40-40a3 3 0 0 0 0-4.219l-40-40a3 3 0 0 0-2.469-.906z'
          fontWeight={400}
          color="#000"
          strokeWidth={6}
          overflow="visible"
          fontFamily="Sans"
        />
      </svg>
    );
  }
}

export default NextArrowIcon;
