import React from 'react';
import User from './User.jsx';

const UserList = (props) => {
  return (
    <div>
      {props.users.map(user => <User key={user._id} firstName={user.firstName} lastName={user.lastName} gymName={user.gymName} address={user.gymLocation} email={user.email} photos={user.photos} times={user.times} workouts={user.workouts} />)}
    </div>
  )
}

export default UserList;