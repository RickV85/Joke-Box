
const getOneRandomJokeAny = () => {
  return fetch('https://v2.jokeapi.dev/joke/Any')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
}