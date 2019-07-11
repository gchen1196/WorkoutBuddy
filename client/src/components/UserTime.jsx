import React from 'react';

class UserTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const timeDisplay = {
      earlyMorning: 'Early Morning (5:00 AM - 6:59 AM)',
      morning: 'Morning (7 AM - 11:59 AM)',
      lunch: 'Lunch (12:00 PM - 1:59 PM)',
      afternoon: 'Afternoon (2:00 PM - 5:59 PM)',
      dinner: 'Dinner (6:00 PM - 8:59 PM)',
      night: ' Night (9:00 PM - 11:59 PM)',
      lateNight: 'Late Night (12:00 AM - 4:59 AM)'
    }

    return (
      <li>
        {timeDisplay[this.props.time]}
      </li>
    )
  }
}

export default UserTime;