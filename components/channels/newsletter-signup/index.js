import React, { Component } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Form from './form.js';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.h2`
  margin: 0rem 0 1rem;
  font-size: 1.25rem;
`;

class NewsletterSignup extends Component {
  render() {
    const url =
      'https://heavystitch.us18.list-manage.com/subscribe/post?u=f093451732d7046479eeaea87&amp;id=f503fe30d9';
    return (
      <Wrapper>
        <Header>Sign up to receive weekly fits</Header>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <Form
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </Wrapper>
    );
  }
}

export default NewsletterSignup;
