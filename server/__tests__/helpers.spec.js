/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path')

global.fetch = require('jest-fetch-mock')
let app;

describe('helpers', () => {

  beforeEach(() => {
    app = require('../serverHelpers')
  })

  afterEach(() => {
    fetch.resetMocks();
  })

  describe('pageFetcher', () => {
    test('test', () => {
      let result = app.pageFetcher('https://www.google.co.uk/search?q=rabbits');
      console.log(result)
    })
  })

  // describe('arrayCreator', () => {

  // })

})
