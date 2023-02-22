import sampleJoke from '../fixtures/sampleJoke.json'

describe('App', () => {
  beforeEach(() => {
    
    cy.intercept(
    {
      method: 'GET',
      url: 'https://v2.jokeapi.dev/joke/Any?type=twopart'
    },
    {
      statusCode: 200,
      body: sampleJoke
    }
    )
    cy.visit('http://localhost:3000/Joke-Box')
  })

  it('true', () => {
    expect(true).to.equal(true)
  })
})