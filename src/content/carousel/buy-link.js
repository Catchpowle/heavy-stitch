import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  padding: 0.5rem 1rem;
  color: #FFFFFF;
  background-color: #212121;
  border-radius: 2px;
  font-size: 0.75rem;
  text-decoration: none;
`;


export default class BuyLink extends Component {
  render() {
    return (
      <Link href={this.props.href} rel="noopener noreferrer" target="_blank">
          Buy
      </Link>
    );
  }
}

BuyLink.propTypes = {
  href: PropTypes.string
};
