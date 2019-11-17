import React, { createRef } from 'react';
import PropTypes from 'prop-types';

const messageForm = props => {
  const messageInput = createRef();

  const onSubmit = event => {
    event.preventDefault();
    props.addMessage(messageInput.current.value);
    messageInput.current.value = '';
  };

  let inputEl;
  if (props.activeChannel) {
    inputEl = (
      <input
        className='form-control'
        placeholder='Add message...'
        type='text'
        ref={messageInput}
      />
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>{inputEl}</div>
    </form>
  );
};

messageForm.propTypes = {
  activeChannel: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired
};

export default messageForm;
