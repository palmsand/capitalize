import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    
    // Bind handleChange and handleSubmit since ES6 knows where to call these functions when they are called from any place in the program. 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
    .then(response => response.json())
    .then(state => this.setState(state));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br/>
            <button type="submit">MAYUS</button>
          </form>
          <p>{this.state.greeting}</p>
        </header>
      </div>
    );
  }
}

export default App;
