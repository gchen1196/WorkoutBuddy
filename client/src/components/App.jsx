import React from 'react';
import Map from './Map.jsx';
import TimeForm from './TimeForm.jsx';

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
      workouts: []
    }
    this.getGymInfo = this.getGymInfo.bind(this);
    this.onPageTwoClick = this.onPageTwoClick.bind(this);
  }

  getGymInfo(gymKey, gymName, gymLocation, gymPhoto) {
    this.setState({gymKey, gymName, gymLocation, gymPhoto})
  }

  onPageTwoClick() {
    this.setState({showTimeForm: true});
  }

  render() {
    if (this.state.showTimeForm) {
      return (
        <TimeForm />
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