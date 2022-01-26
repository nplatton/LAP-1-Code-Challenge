const { pageFetcher } = require('./serverHelpers')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('Welcome to Graham!')
})

router.get('/:animal', (req, res) => {
    let obj = [];
    try {
        let animal = req.params.animal
        let formatted = animal.split(/[\W_]/g).join('%20')
        let url = `https://www.google.co.uk/search?q=${formatted}`

        response = pageFetcher()

        res.json(response)
    } catch(err) {
        res.status(404).json(err.message)
    }
})

module.exports = router;
