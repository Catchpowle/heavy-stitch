import React from 'react';

class SlickStyles extends React.Component {
  render() {
    return (
      <React.Fragment>
        <style jsx global>{`
          .slick-arrow {
            top: 47.5%;
          }
          
          .slick-prev:before, .slick-next:before  {
            display: none;
          }
          
          .slick-prev {
              left: -54px;
          }
          
          .slick-next {
              right: -25px;
          }
          
          .slick-dots {
            bottom: -2rem;
          }
          
          @media (max-width: 1025px) {
            .slick-dots {
              bottom: -1rem;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default SlickStyles;