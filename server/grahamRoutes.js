let database = require('./data');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Welcome to Graham!');
});

router.get('/:animal', (req, res) => {
  try {
    let animal = req.params.animal;
    let returnData = database[animal]
    if (!returnData) {
      let rabbitData = database.rabbit;
      res.json(rabbitData);
    }
    if (animal=='rabbit') {
      let ostrichData = database.ostrich;
      res.json(ostrichData);
    }
    if (animal=='ostrich') {
      let actualOstrichData = database.realstuff;
      res.json(actualOstrichData);
    }
    res.json(returnData)
  } catch (err) { res.status(404).json(err.message) }
});

module.exports = router;
