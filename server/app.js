const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json('Welcome to Graham!')
// })

const grahamRoutes = require('./grahamRoutes')
app.use('/graham', grahamRoutes);

module.exports = { app };
