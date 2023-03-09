
const getOneRandomJokeAny = () => {
  return fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
}

export default getOneRandomJokeAny;