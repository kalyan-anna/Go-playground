import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';

const messageList = props => {
  const messagesEl = props.messages.map(msg => (
    <Message key={msg.id} message={msg} />
  ));

  return <ul>{messagesEl}</ul>;
};

messageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default messageList;
