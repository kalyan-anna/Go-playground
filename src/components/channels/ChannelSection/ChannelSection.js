import React from 'react';
import ChannelForm from '../ChannelForm/ChannelForm';
import ChannelList from '../ChannelList/ChannelList';
import PropTypes from 'prop-types';

const channelSection = props => {
  return (
    <section>
      <ChannelList channels={props.channels} setChannel={props.setChannel} />
      <ChannelForm addChannel={props.addChannel} />
    </section>
  );
};

channelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired
};

export default channelSection;
