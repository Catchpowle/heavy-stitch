import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Caption } from '../shared';
import BuyLink from './buy-link.js';

class Item extends Component {
  clickedItem() {
    window.analytics.track('Clicked an item', {
      Caption: this.props.caption,
      Src: this.props.src
    });
  }

  render() {
    return (
      <div>
        <a href={this.props.href} rel="noopener noreferrer" target="_blank" onClick={this.clickedItem.bind(this)}>
          <Image src={this.props.src} />
        </a>
        <Caption>
          <p>{this.props.caption}</p>
          <BuyLink href={this.props.href}/>
        </Caption>
      </div>
    );
  }
}

export default Item;

Item.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
  href: PropTypes.string
};
