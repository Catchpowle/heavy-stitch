import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './arrows';
import looks from '../../looks.js';
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
  displayLooks(looks) {
    return (Object.keys(looks).map(key => {
      const fit= looks[key].fit;
      const items = looks[key].items;

      return (
        [
          this.displayFit(fit, key),
          this.displayItems(items)
        ]
      );
    }));
  }

  displayFit(fit, key) {
    return <Fit key={key} src={fit.src} photographer={fit.photographer} />;
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
          {this.displayLooks(looks)}
        </Slider>
      </Card>
    );
  }
}

export default Carousel;
