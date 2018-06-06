import React from 'react';
import Container from './Container.js';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import { Grid, Cell } from 'styled-css-grid';
import { BackArrow, NextArrow } from './arrows';
import Indicator from './indicator';
import ArrowCell from './ArrowCell';
import SlidesCell from './SlidesCell';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './animation.css';

class Carousel extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProvider
          naturalSlideWidth={4}
          naturalSlideHeight={5}
          totalSlides={6}
          lockOnWindowScroll={true}
        >
          <Grid columns={10}>
            <ArrowCell center middle width={1}>
              <BackArrow>Back</BackArrow>
            </ArrowCell>
            <SlidesCell>
              <Slider classNameAnimation={'slideAnimation'}>
                <Slide index={0}><Image src='4-5-one.png' /></Slide>
                <Slide index={1}><Image src='4-5-two.png' /></Slide>
                <Slide index={2}><Image src='4-5-one.png' /></Slide>
                <Slide index={3}><Image src='4-5-two.png' /></Slide>
                <Slide index={4}><Image src='4-5-one.png' /></Slide>
                <Slide index={5}><Image src='4-5-two.png' /></Slide>
              </Slider>
            </SlidesCell>
            <ArrowCell center middle width={1}>
              <NextArrow>Next</NextArrow>
            </ArrowCell>
            <Cell center width={10}>
              <Indicator slide={0} />
              <Indicator slide={1} />
              <Indicator slide={2} />
              <Indicator slide={3} />
              <Indicator slide={4} />
              <Indicator slide={5} />
            </Cell>
          </Grid>
        </CarouselProvider>
      </Container>
    );
  }
}


export default Carousel;
