import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 1000;
  appearance: none;
  border: 2px solid #212121;
  border-radius: 2px;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  width: 12rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #FFFFFF;
  background-color: #212121;
  border-radius: 2px;
  font-size: 0.75rem;
  border: none;
`;

const Response = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
  width: 50%;
  margin-left: 25%;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.onValidated = props.onValidated;
  }

  submit() {
    return this.email && this.email.value.indexOf('@') > -1 && this.onValidated({ EMAIL: this.email.value });
  }

  render() {
    this.status = this.props.status;
    this.message = this.props.message;

    return (
      <React.Fragment>
        <div>
          <Input
            innerRef={node => {
              this.email = node;
            }
            }
            type='email'
            placeholder='Email'
          />
        </div>
        <div>
          <Button onClick={this.submit.bind(this)}>
            Sign up
          </Button>
        </div>
        {this.status === 'error' && (
          <Response
            dangerouslySetInnerHTML={{ __html: this.message }}
          />
        )}
        {this.status === 'success' && (
          <Response
            dangerouslySetInnerHTML={{ __html: this.message }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Form;

Form.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func
};
