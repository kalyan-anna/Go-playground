import React, { Component } from 'react';
import ChannelSection from '../components/channels/ChannelSection/ChannelSection';
import UserSection from '../components/users/UserSection/UserSection';

class Main extends Component {
  state = {
    channels: [],
    activeChannel: null,
    users: []
  };

  addChannel = name => {
    const { channels } = this.state;
    channels.push({
      id: channels.length,
      name
    });
    this.setState({ channels });
  };

  setChannel = activeChannel => {
    console.log('ActiveChannel:', activeChannel);
    this.setState({ activeChannel });
  };

  setUserName = name => {
    const { users } = this.state;
    users.push({
      id: users.length,
      name
    });
    this.setState({ users });
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
          <UserSection {...this.state} setUserName={this.setUserName} />
        </nav>
      </main>
    );
  }
}

export default Main;
