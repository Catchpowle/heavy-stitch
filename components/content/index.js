import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Wrapper from './wrapper.js';
import Channels from './channels';
import Carousel from './carousel';

class Content extends Component {
  constructor({ data: { loading, error, looks } }) {
    super();
    this.loading = loading;
    this.error = error;
    this.looks = looks;
  }

  error() {
    return <Wrapper><h2>Error fetching looks!</h2></Wrapper>;
  }

  loading() {
    return <Wrapper><h2>Loading looks...</h2></Wrapper>;
  }

  displayLooks() {
    return (this.looks.map(this.displayLook));
  }

  displayLook(look) {
    return <Carousel key={look.id} fit={look.fit} items={look.items} />;
  }

  render () {
    if (this.error) return this.error();
    if (this.loading) return this.loading();

    return (
      <Wrapper>
        {this.displayLooks()}
        <Channels/>
      </Wrapper>
    );
  }
}


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

Content.propTypes = {
  data: PropTypes.object
};
