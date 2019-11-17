import React from 'react';
import ChannelForm from '../ChannelForm/ChannelForm';
import ChannelList from '../ChannelList/ChannelList';
import PropTypes from 'prop-types';

const channelSection = props => {
  return (
    <section className='support panel panel-primary'>
      <div className='panel-heading'>
        <strong>Channels</strong>
        <div className='panel-body channels'>
          <ChannelList
            channels={props.channels}
            setChannel={props.setChannel}
            activeChannel={props.activeChannel}
          />
          <ChannelForm addChannel={props.addChannel} />
        </div>
      </div>
    </section>
  );
};

channelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object
};

export default channelSection;
