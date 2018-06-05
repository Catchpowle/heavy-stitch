import React, { Component } from 'react';

class BackArrowIcon extends Component {
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
          d="M69.656 6.969a3 3 0 0 0-1.781.906l-40 40a3 3 0 0 0 0 4.219l40 40a3 3 0 1 0 4.25-4.219L34.25 50l37.875-37.906a3 3 0 0 0-2.469-5.125z"
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

export default BackArrowIcon;
