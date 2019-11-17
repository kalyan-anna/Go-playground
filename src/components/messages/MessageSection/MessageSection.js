import React from 'react';
import PropTypes from 'prop-types';
import MessageList from '../MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';

const messageSection = props => {
  let content;
  if (!props.activeChannel) {
    content = <p>No channel selected!</p>;
  } else {
    content = (
      <div>
        <div className='panel-heading'>
          <strong>{props.activeChannel.name}</strong>
        </div>
        <div className='panel-body messages'>
          <MessageList {...props} />
          <MessageForm {...props} />
        </div>
      </div>
    );
  }
  return (
    <section className='messages-container panel panel-default'>
      {content}
    </section>
  );
};

messageSection.propTypes = {
  messages: PropTypes.array.isRequired,
  activeChannel: PropTypes.object,
  addMessage: PropTypes.func.isRequired
};

export default messageSection;
