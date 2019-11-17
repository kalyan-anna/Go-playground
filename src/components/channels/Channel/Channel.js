import React from 'react';
import PropTypes from 'prop-types';
import './Channel.css';

const channel = props => {
  let classes = 'Channel';
  if (props.channel === props.activeChannel) {
    classes += ' active';
  }

  return (
    <li className={classes}>
      <button onClick={props.setChannel}>{props.channel.name}</button>
    </li>
  );
};

channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object
};

export default channel;
