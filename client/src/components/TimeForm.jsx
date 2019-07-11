import React from 'react';

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earlyMorning: false,
      morning: false,
      lunch: false,
      afternoon: false,
      dinner: false,
      night: false,
      lateNight: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getTimeForm(this.state);
  }


  render() {
    return (
      <div>
        <h1>When Are You Working Out?</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Early Morning (5:00 AM - 6:59 AM)
            <input
              name="earlyMorning"
              type="checkbox"
              checked={this.state.earlyMorning}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Morning (7 AM - 11:59 AM)
            <input
              name="morning"
              type="checkbox"
              checked={this.state.morning}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Lunch (12:00 PM - 1:59 PM)
            <input
              name="lunch"
              type="checkbox"
              checked={this.state.lunch}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Afternoon (2:00 PM - 5:59 PM)
            <input
              name="afternoon"
              type="checkbox"
              checked={this.state.afternoon}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Dinner (6:00 PM - 8:59 PM)
            <input
              name="dinner"
              type="checkbox"
              checked={this.state.dinner}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Night (9:00 PM - 11:59 PM)
            <input
              name="night"
              type="checkbox"
              checked={this.state.night}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Late Night (12:00 AM - 4:59 AM)
            <input
              name="lateNight"
              type="checkbox"
              checked={this.state.lateNight}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

export default TimeForm;