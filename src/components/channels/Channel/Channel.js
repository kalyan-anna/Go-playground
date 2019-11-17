import React from 'react';
import PropTypes from 'prop-types';
import './Channel.css';

const channel = props => {
  return (
    <li className='Channel'>
      <button onClick={props.setChannel}>{props.channel.name}</button>
    </li>
  );
};

channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default channel;
