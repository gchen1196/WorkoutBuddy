import React from 'react';

class WorkoutForm extends React.Component {
  constructor (props) {
    super(props);
    this.state ={

    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>What Are You Hitting?</h1>
        <form>
          <label>
            Chest:
            <input
              name="chest"
              type="checkbox"
              checked={this.state.chest}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Back:
            <input
              name="back"
              type="checkbox"
              checked={this.state.back}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Triceps:
            <input
              name="triceps"
              type="checkbox"
              checked={this.state.triceps}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Biceps:
            <input
              name="biceps"
              type="checkbox"
              checked={this.state.biceps}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Shoulders:
            <input
              name="shoulders"
              type="checkbox"
              checked={this.state.shoulders}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Legs:
            <input
              name="legs"
              type="checkbox"
              checked={this.state.legs}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Glutes:
            <input
              name="glutes"
              type="checkbox"
              checked={this.state.glutes}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Abs:
            <input
              name="abs"
              type="checkbox"
              checked={this.state.abs}
              onChange={this.handleInputChange} />
          </label>
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