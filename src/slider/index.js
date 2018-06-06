import React, { Component } from 'react';
import Container from './Container';
import Image from './Image.js';
import Slider from 'react-slick';

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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

export default SimpleSlider;
