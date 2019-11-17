import React from 'react';
import PropTypes from 'prop-types';

const user = props => <li>{props.user.name}</li>;

user.propTypes = {
  user: PropTypes.object.isRequired
};

export default user;
