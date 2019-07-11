import React from 'react';
import UserTime from './UserTime.jsx';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {

    return (
      <div>
        <img src={this.props.photos} />
        <div>{this.props.firstName + ' ' + this.props.lastName}</div>
        <div>
          Working Out On: 
          <ul>
            {this.props.workouts.map(muscle => <li>{muscle}</li>)}
          </ul>
        </div>
        <div>
          Free At: 
          <ul>
            {this.props.times.map(time => <UserTime time={time} ></UserTime>)}
          </ul>
        </div>
        <div>{this.props.email}</div>
      </div>
    )
  }
}

export default User;