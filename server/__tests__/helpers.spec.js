/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path')

global.fetch = require('jest-fetch-mock')
let app;

describe('helpers', () => {

  afterEach(() => {
    fetch.resetMocks();
  })

  describe('pageFetcher', () => {
    test()
  })

  describe('arrayCreator', () => {

  })

})
