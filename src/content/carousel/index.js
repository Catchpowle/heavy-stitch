import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './arrows';
import Image from './image.js';
import BuyLink from './buy-link.js';
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

const Caption = styled.div`
  text-align: left;
  margin: 1rem 1rem;
`;

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
      <Card>
        <Slider {...settings}>
          <div>
            <Image src='4-5-one.png' />
            <Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Caption>
          </div>
          <div>
            <Image src='4-5-two.png' />
            <Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <BuyLink href='http://google.com'/>
            </Caption>
          </div>
          <div>
            <Image src='4-5-one.png' />
            <Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <BuyLink href='http://google.com'/>
            </Caption>
          </div>
          <div>
            <Image src='4-5-two.png' />
            <Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <BuyLink href='http://google.com'/>
            </Caption>
          </div>
          <div>
            <Image src='4-5-one.png' />
            <Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <BuyLink href='http://google.com'/>
            </Caption>
          </div>
          <div>
            <Image src='4-5-two.png' />
            <Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <BuyLink href='http://google.com'/>
            </Caption>
          </div>
        </Slider>
      </Card>
    );
  }
}

export default Carousel;
