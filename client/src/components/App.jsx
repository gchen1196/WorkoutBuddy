import React from 'react';
import Map from './Map.jsx';
import TimeForm from './TimeForm.jsx';
import WorkoutForm from './WorkoutForm.jsx';
import UserList from './UserList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      username : '',
      email : '',
      photos : '',
      gymKey: '',
      gymName: '',
      gymLocation: '',
      gymPhoto: '',
      times: [],
      workouts: [],
      showTimeForm: false,
      showWorkoutForm: false,
      users: [],
      found: false
    }
    this.getGymInfo = this.getGymInfo.bind(this);
    this.onPageTwoClick = this.onPageTwoClick.bind(this);
    this.getTimeForm = this.getTimeForm.bind(this);
    this.getWorkoutForm = this.getWorkoutForm.bind(this);
  }

  getGymInfo(gymKey, gymName, gymLocation, gymPhoto) {
    this.setState({gymKey, gymName, gymLocation, gymPhoto})
  }

  onPageTwoClick() {
    this.setState({showTimeForm: true});
  }

  getTimeForm(obj) {
    const times = [];
    for (var key in obj) {
      if (obj[key]) {
        times.push(key);
      }
    }
    this.setState({times}, () => this.setState({showTimeForm: false, showWorkoutForm: true}));
  }

  getWorkoutForm(obj) {
    const workouts = [];
    for (var key in obj) {
      if (obj[key]) {
        workouts.push(key);
      }
    }
    this.setState({workouts}, () => this.setState({showTimeForm: false, showWorkoutForm: false}, () => {
      axios.get('/search', {
        params: {
          gymKey: this.state.gymKey, 
          times: this.state.times, 
          workouts: this.state.workouts
        }
      })
      .then(response => {
        this.setState({users: response.data}, () => this.setState({ found: true }));
      })
      .catch(error => {
        console.log(error);
      })
    }));
  }

  render() {
    if (this.state.found) {
      return (
        <div>
          <h3>{`${this.state.users[0].gymName} (${this.state.users[0].gymLocation})`}</h3>
          <UserList users={this.state.users} />
        </div>
      )
    }
    if (this.state.showWorkoutForm) {
      return (
        <WorkoutForm getWorkoutForm={this.getWorkoutForm} />
      )
    }
    if (this.state.showTimeForm) {
      return (
        <TimeForm getTimeForm={this.getTimeForm} />
      )
    }
    else {
      return (
        <div>
          <Map getGymInfo={this.getGymInfo} />
          <div>
            <img src={this.state.gymPhoto} style={{height: '50px', width: '50px'}}/>
            <div>Gym Name: {this.state.gymName}</div>
            <div>Address: {this.state.gymLocation}</div>
          </div>
          <button onClick={this.onPageTwoClick}>Confirm Gym Location</button>
        </div>
      )
    }
  }
}

export default App; 