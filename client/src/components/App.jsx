import React from 'react';
import Map from './Map.jsx';
import TimeForm from './TimeForm.jsx';
import WorkoutForm from './WorkoutForm.jsx';

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
      showWorkoutForm: false
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
    this.setState({times}, () => this.setState({showTimeForm: false, showWorkoutForm: false}));
  }

  getWorkoutForm(obj) {
    const workouts = [];
    for (var key in obj) {
      if (obj[key]) {
        workoutss.push(key);
      }
    }
    this.setState({workouts}, () => this.setState({showTimeForm: false, showWorkoutForm: true}));
  }

  render() {
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