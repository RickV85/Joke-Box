import './App.css';
import React from 'react';
import getOneRandomJokeAny from '../APICalls';
import CurrentJoke from './AppInterfaces';



class App extends React.Component<{}, {currentJoke: CurrentJoke, currentJokeAnswerDisplay: string}> {
  constructor(props: any) {
    super(props)
    this.state = {
      currentJoke: {setup: '', delivery: ''},
      currentJokeAnswerDisplay: "",
    }
  }

  componentDidMount = () => {
    this.getNewJoke();
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }

  getNewJoke = () => {
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
        <h2>Here's a random joke for ya!</h2>
        <p>{this.state.currentJoke.setup}</p>
        <button onClick={() => {this.setState({ currentJokeAnswerDisplay: this.state.currentJoke.delivery})}}>Get answer</button>
        <p>{this.state.currentJokeAnswerDisplay}</p>
        <button onClick={() => {this.getNewJoke()}}>Get a new joke</button>
      </main>
    )
  }

}



export default App;
