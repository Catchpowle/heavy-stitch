import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Wrapper from './wrapper.js';
import Channels from './channels';
import Carousel from './carousel';

const Content = ({ data: { loading, error, looks } }) => {
  function displayLooks(looks) {
    return (looks.map(look => {
      return <Carousel key={look.id} fit={look.fit} items={look.items} />;
    }));
  }

  if (error) return <Wrapper><h2>Error fetching looks!</h2></Wrapper>;

  if (!loading) {
    return (
      <Wrapper>
        {displayLooks(looks)}
        <Channels/>
      </Wrapper>
    );
  }
  return <Wrapper><h2>Loading looks...</h2></Wrapper>;
};

const looks = gql`
  query looks {
    looks {
      id
      fit {
        id
        photo {
          id
          url
        }
        photographer {
          name
          link
        }
        model {
          name
          link
        }
      }
      items {
        id
        photo {
          id
          url
        }
        caption
        source
      }
      gender {
        id
        name
      }
    }
  }
`;

export default graphql(looks)(Content);
