import React, { createRef } from 'react';
import PropTypes from 'prop-types';

const channelForm = props => {
  const channelInput = createRef();

  const onSubmit = event => {
    event.preventDefault();
    props.addChannel(channelInput.current.value);
    channelInput.current.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'></div>
      <input
        className='form-control'
        placeholder='Add channel'
        type='text'
        ref={channelInput}
      />
    </form>
  );
};

channelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
};

export default channelForm;
