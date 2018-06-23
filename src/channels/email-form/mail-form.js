import React from 'react';
import PropTypes from 'prop-types';

const MailForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <React.Fragment>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (email = node)}
        type='email'
        placeholder='Your email'
      />
      <br />
      <button style={{ fontSize: '2em', padding: 5 }} onClick={submit}>
        Submit
      </button>
    </React.Fragment>
  );
};

export default MailForm;

MailForm.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.string
};
