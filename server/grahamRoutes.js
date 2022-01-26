const { pageFetcher } = require('./serverHelpers')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('Welcome to Graham!')
})

router.get('/:animal', (req, res) => {
    try {
        let animal = req.params.animal
        let formatted = animal.split(/[\W_]/g).join('%20')
        let url = `https://www.google.co.uk/search?q=${formatted}`

        // response = pageFetcher(url)
        // res.json(response)

        res.json(url)
    } catch(err) {
        res.status(404).json(err.message)
    }
})

module.exports = router;
