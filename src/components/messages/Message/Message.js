import React from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';

const message = props => {
  const { message } = props;
  const createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');
  return (
    <li className='message'>
      <div className='author'>
        <strong>{message.author}</strong>
        <i className='timestamp>'>{createdAt}</i>
      </div>
      <div className='body'>{message.body}</div>
    </li>
  );
};

message.propTypes = {
  message: PropTypes.object.isRequired
};

export default message;
