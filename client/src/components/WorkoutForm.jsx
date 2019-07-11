import React from 'react';

class WorkoutForm extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      chest: false,
      back: false,
      triceps: false,
      biceps: false,
      shoulders: false,
      legs: false,
      glutes: false,
      abs: false,
      cardio: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    this.props.getWorkoutForm(this.state);
  }

  render() {
    return (
      <div>
        <h1>What Are You Hitting?</h1>
        <form onSubmit={this.handleSubmit} >
          <label>
            Chest:
            <input
              name="chest"
              type="checkbox"
              checked={this.state.chest}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Back:
            <input
              name="back"
              type="checkbox"
              checked={this.state.back}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Triceps:
            <input
              name="triceps"
              type="checkbox"
              checked={this.state.triceps}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Biceps:
            <input
              name="biceps"
              type="checkbox"
              checked={this.state.biceps}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Shoulders:
            <input
              name="shoulders"
              type="checkbox"
              checked={this.state.shoulders}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Legs:
            <input
              name="legs"
              type="checkbox"
              checked={this.state.legs}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Glutes:
            <input
              name="glutes"
              type="checkbox"
              checked={this.state.glutes}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Abs:
            <input
              name="abs"
              type="checkbox"
              checked={this.state.abs}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Cardio:
            <input
              name="cardio"
              type="checkbox"
              checked={this.state.cardio}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Find A Workout Buddy!" />
        </form>
      </div>
    )
  }
}

export default WorkoutForm; 