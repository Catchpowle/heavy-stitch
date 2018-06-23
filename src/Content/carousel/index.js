import React, { Component } from 'react';
import Slider from 'react-slick';
import Container from './container.js';
import { PrevArrow, NextArrow } from './arrows';
import Image from './image.js';
import './slick.css';

class Carousel extends Component {
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
      <Container>
        <Slider {...settings}>
          <div>
            <Image src='4-5-one.png' />
          </div>
          <div>
            <Image src='4-5-two.png' />
          </div>
          <div>
            <Image src='4-5-one.png' />
          </div>
          <div>
            <Image src='4-5-two.png' />
          </div>
          <div>
            <Image src='4-5-one.png' />
          </div>
          <div>
            <Image src='4-5-two.png' />
          </div>
        </Slider>
      </Container>
    );
  }
}

export default Carousel;
