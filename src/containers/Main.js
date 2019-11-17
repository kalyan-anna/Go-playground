import React, { Component } from 'react';
import ChannelSection from '../components/channels/ChannelSection/ChannelSection';

class Main extends Component {
  state = {
    channels: [],
    activeChannel: null
  };

  addChannel = name => {
    const { channels } = this.state;
    channels.push({
      id: name.length,
      name
    });
    this.setState({ channels });
  };

  setChannel = activeChannel => {
    console.log('ActiveChannel:', activeChannel);
    this.setState({ activeChannel });
  };

  render() {
    return (
      <main className='app'>
        <nav className='nav'>
          <ChannelSection
            channels={this.state.channels}
            addChannel={this.addChannel}
            setChannel={this.setChannel}
            activeChannel={this.state.activeChannel}
          />
        </nav>
      </main>
    );
  }
}

export default Main;
