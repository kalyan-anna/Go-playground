import React from 'react';
import Channel from '../Channel';
import PropTypes from 'prop-types';

const channelList = props => {
  const channelsEl = props.channels.map(channel => (
    <Channel channel={channel} setChannel={props.setChannel} key={channel.id} />
  ));
  return <ul className='ChannelList'>{channelsEl}</ul>;
};

channelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default channelList;
