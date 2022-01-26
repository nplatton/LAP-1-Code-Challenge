let database = require('./data');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Welcome to Graham!');
});

// Get data based on the animal specified in the search - returns in json format
router.get('/:animal', (req, res) => {
  // We don't need error handling on this side as it has been dealt with on the client end
  let animal = req.params.animal;
  let returnData = dataChooser(animal);
  res.json(returnData)
});

// For clarity on the workings of this function see the test suite
function dataChooser(animal) {
  let data = database[animal];
  if (!data) {
    data = database.rabbit;
  }
  if (animal=='rabbit') {
    data = database.ostrich;
  }
  if (animal=='ostrich') {
    data = database.realstuff;
  }
  return data
}

module.exports = { router, dataChooser };
