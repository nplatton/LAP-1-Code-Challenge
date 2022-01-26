const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

// Used empty route for testing
app.get('/', (req, res) => {
  res.json({});
})

// Add the route to the server
const { router } = require('./grahamRoutes')
app.use('/graham', router);

module.exports = { app };
