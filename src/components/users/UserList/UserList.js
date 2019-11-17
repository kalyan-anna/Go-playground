import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const userList = props => {
  const usersEl = props.users.map(user => <User key={user.id} user={user} />);
  return <ul>{usersEl}</ul>;
};

userList.propTypes = {
  users: PropTypes.array.isRequired
};

export default userList;
