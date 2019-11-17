import React, { createRef } from 'react';
import PropTypes from 'prop-types';

const userForm = props => {
  const userInput = createRef();

  const onSubmit = event => {
    event.preventDefault();
    props.setUserName(userInput.current.value);
    userInput.current.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='Set your name...'
          type='text'
          ref={userInput}
        />
      </div>
    </form>
  );
};

userForm.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default userForm;
