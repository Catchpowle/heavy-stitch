import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailForm from './MailForm';

const url = '//heavystitch.us18.list-manage.com/subscribe/post?u=f093451732d7046479eeaea87&amp;id=f503fe30d9';

const MailFormAction = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <MailForm onSubmitted={formData => subscribe(formData)} />
        {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
        {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
      </div>
    )}
  />
);

export default MailFormAction;