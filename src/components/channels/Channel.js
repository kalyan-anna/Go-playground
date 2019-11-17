import React from 'react';
import PropTypes from 'prop-types';

const channel = props => {
  return (
    <li>
      <button onClick={props.setChannel}>{props.channel.name}</button>
    </li>
  );
};

channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default channel;
