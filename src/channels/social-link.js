import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.i`
  font-size: 30px;
  margin: 1rem 0.9rem 0;
`;

const IconLink = styled.a`
  color: #212121;
  text-decoration: none;

  &:hover {
    color: #414141;
  }
`;

export default class SocialLink extends Component {
  render() {
    return (
      <IconLink href={this.props.iconHref} rel="noopener noreferrer" target="_blank">
        <Icon className={this.props.iconClasses} />
      </IconLink>
    );
  }
}

SocialLink.propTypes = {
  iconClasses: PropTypes.string,
  iconHref: PropTypes.string
};