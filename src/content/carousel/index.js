import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './arrows';
import { Fit, Item } from './slides';
import './slick.css';

const Card = styled.div`
  margin-bottom: 5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  border-radius: 6px;

  @media (max-width: 1025px) {
    margin-bottom: 3rem;
    box-shadow: none;
    border-radius: none;
  }
`;

class Carousel extends Component {
  displayLook() {
    return (
      [
        this.displayFit(this.props.fit),
        this.displayItems(this.props.items)
      ]
    );
  }

  displayFit(fit) {
    return <Fit key={this.props.key} src={fit.src} model={fit.model} photographer={fit.photographer} />;
  }

  displayItems(items) {
    return (
      Object.keys(items).map(key => {
        return <Item key={key} src={items[key].src} caption={items[key].caption} href={items[key].href} />;
      })
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    return (
      <Card>
        <Slider {...settings}>
          {this.displayLook()}
        </Slider>
      </Card>
    );
  }
}

export default Carousel;

Carousel.propTypes = {
  fit: PropTypes.object,
  items: PropTypes.object,
  key: PropTypes.number
};
