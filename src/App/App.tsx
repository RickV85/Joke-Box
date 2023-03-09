import './App.css';
import React, { useState, useEffect } from 'react';
import getOneRandomJokeAny from '../APICalls';


function App() {
  const [currentJoke, setCurrentJoke] = useState({setup: '', delivery: ''})
  const [currentJokeAnswerDisplay, setCurrentJokeAnswerDisplay] = useState('')


  useEffect(() => {
    getNewJoke();
  }, [])
  

  const getNewJoke = () => {
    setCurrentJokeAnswerDisplay("")
    getOneRandomJokeAny()
    .then(data => {
      setCurrentJoke(data)
    })
    .catch(error => {
      alert(error)
    })
  } 


  return (
    <main className='main'>
      <h1>Welcome to Joke Box</h1>
      <h2>{`Here's a random joke for ya!`}</h2>
      <p>{currentJoke.setup}</p>
      <button onClick={() => {setCurrentJokeAnswerDisplay(currentJoke.delivery)}}>Get answer</button>
      <p>{currentJokeAnswerDisplay}</p>
      <button onClick={() => {getNewJoke()}}>Get a new joke</button>
    </main>
  )
}



export default App;
