
const getOneRandomJokeAny = () => {
  return fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
}

export default getOneRandomJokeAny;