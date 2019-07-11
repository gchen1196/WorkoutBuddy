import React from 'react';
import Map from './Map.jsx';

const App = () => {
  const initialState = {
    firstName : '',
    lastName : '',
    username : '',
    email : '',
    photos : '',
    gymKey: '',
    gymName: '',
    gymLocation: '',
    times: [],
    workouts: []
  };


  return (
    <div>
      <Map />
    </div>
  )
}

export default App; 