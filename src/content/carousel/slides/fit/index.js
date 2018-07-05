import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, Caption } from '../shared';

const Link = styled.a`
  color: inherit;
`;

const Text = styled.p`
  margin: 0.5rem 0;
`;

class Fit extends Component {
  render() {
    const model = this.props.model;
    const photographer = this.props.photographer;

    return (
      <div>
        <Image src={this.props.src} />
        <Caption>
          <Text><Link href={model.link}>{model.name}</Link></Text>
          <Text>shot by</Text>
          <Text><Link href={photographer.link}>{photographer.name}</Link></Text>
        </Caption>
      </div>
    );
  }
}

export default Fit;

Fit.propTypes = {
  src: PropTypes.string,
  model: PropTypes.object,
  photographer: PropTypes.object
};
