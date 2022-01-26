let database = require('./data');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Welcome to Graham!');
});

router.get('/:animal', (req, res) => {
  try {
    let animal = req.params.animal;
  } catch (err) {}
});

module.exports = router;
