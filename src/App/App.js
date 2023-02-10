import './App.css';
import React from 'react';
import getOneRandomJokeAny from '../APICalls';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentJoke: "",
      currentJokeAnswerDisplay: "",
    }
  }

  componentDidMount = () => {
    console.log("ComponentDidMount");
    this.getNewJoke();
  }

  // componentDidUpdate = () => {
  //   console.log(this.state);
  // }

  getNewJoke = () => {
    console.log("getNewJoke ran");
    this.setState({ currentJokeAnswerDisplay: "" })
    getOneRandomJokeAny()
    .then(data => {
      this.setState({ currentJoke: data })
    })
    .catch(error => {
      alert(error)
    })
  } 

  render() {
    return (
      <main className='main'>
        <h1>Welcome to Joke Box</h1>
        <h2>Here's a random joke for ya boss!</h2>
        <p>{this.state.currentJoke.setup}</p>
        <button onClick={() => {this.setState({ currentJokeAnswerDisplay: this.state.currentJoke.delivery})}}>Get answer</button>
        <p>{this.state.currentJokeAnswerDisplay}</p>
        <button onClick={() => {this.getNewJoke()}}>Get a new joke</button>
      </main>
    )
  }

}



export default App;
