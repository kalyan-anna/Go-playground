import React from 'react';
import Channel from '../Channel/Channel';
import PropTypes from 'prop-types';

const channelList = props => {
  const channelsEl = props.channels.map(channel => (
    <Channel
      channel={channel}
      setChannel={() => props.setChannel(channel)}
      activeChannel={props.activeChannel}
      key={channel.id}
    />
  ));
  return <ul>{channelsEl}</ul>;
};

channelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object
};

export default channelList;
