import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, Caption } from '../shared';

const PhotographerLink = styled.a`
  color: inherit;
`;

class Fit extends Component {
  render() {
    const photographer = this.props.photographer;

    return (
      <div>
        <Image src={this.props.src} />
        <Caption>
          <p>Shot by <PhotographerLink href={photographer.link}>{photographer.name}</PhotographerLink></p>
        </Caption>
      </div>
    );
  }
}

export default Fit;

Fit.propTypes = {
  src: PropTypes.string,
  photographer: PropTypes.object
};
