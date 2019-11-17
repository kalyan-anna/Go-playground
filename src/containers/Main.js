import React, { Component } from 'react';
import ChannelSection from '../components/channels/ChannelSection/ChannelSection';
import UserSection from '../components/users/UserSection/UserSection';
import MessageSection from '../components/messages/MessageSection/MessageSection';

class Main extends Component {
  state = {
    channels: [],
    activeChannel: null,
    users: [],
    messages: []
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

  addMessage = body => {
    const { messages, users } = this.state;
    const createdAt = new Date();
    let author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({
      id: messages.length,
      body,
      createdAt,
      author
    });
    this.setState({ messages });
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
        <MessageSection {...this.state} addMessage={this.addMessage} />
      </main>
    );
  }
}

export default Main;
