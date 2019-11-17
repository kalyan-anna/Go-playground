import React, { Component } from 'react';
import ChannelSection from '../components/channels/ChannelSection/ChannelSection';
import UserSection from '../components/users/UserSection/UserSection';
import MessageSection from '../components/messages/MessageSection/MessageSection';
import Socket from '../services/mysocket';

class Main extends Component {
  state = {
    channels: [],
    activeChannel: null,
    users: [],
    messages: [],
    connected: false
  };

  componentDidMount() {
    this.socket = new Socket();
    this.socket.on('connect', this.onConnect);
    this.socket.on('disconnect', this.onConnect);
    this.socket.on('channel add', this.onAddChannel);
    this.socket.on('user add', this.onAddUser);
    this.socket.on('user edit', this.onEditUser);
    this.socket.on('user remove', this.onRemoveUser);
    this.socket.on('message add', this.onMessageAdd);
  }

  onMessageAdd = message => {
    const { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
  };

  onAddUser = user => {
    const { users } = this.state;
    users.push(user);
    this.setState({ users });
  };

  onEditUser = editUser => {
    let { users } = this.state;
    users = users.map(user => {
      if (editUser.id === user.id) {
        return editUser;
      }
      return user;
    });
    this.setState({ users });
  };

  onRemoveUser = removedUser => {
    let { users } = this.state;
    users = users.filter(user => user.id !== removedUser.id);
    this.setState({ users });
  };

  onConnect = () => {
    this.setState({ connected: true });
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  };

  onDisconnect = () => {
    this.setState({ connected: false });
  };

  onAddChannel(channel) {
    const { channels } = this.state;
    channels.push(channel);
    this.setState({ channels });
  }

  addChannel = name => {
    this.socket.emit('channel add', { name });
  };

  setChannel = activeChannel => {
    this.setState({ activeChannel });
    this.socket.emit('message unsubscribe');
    this.setState({ messages: [] });
    this.socket.emit('message subscribe', {
      channelId: activeChannel.id
    });
  };

  setUserName = name => {
    this.socket.emit('user edit', { name });
  };

  addMessage = body => {
    const { activeChannel } = this.state;
    this.socket.emit('message add', {
      channelId: activeChannel.id,
      body
    });
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
