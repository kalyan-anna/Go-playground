import React from 'react';
import PropTypes from 'prop-types';
import UserList from '../UserList/UserList';
import UserForm from '../UserForm/UserForm';

const userSection = props => (
  <section className='support panel panel-primary'>
    <div className='panel-heading'>
      <strong>Users</strong>
    </div>
    <div className='panel-body users'>
      <UserList {...props} />
      <UserForm {...props} />
    </div>
  </section>
);

export default userSection;
