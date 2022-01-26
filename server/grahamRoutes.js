const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('Welcome to Graham!')
})

router.get('/:animal', (req, res) => {
    try {
        let animal = req.params.animal
        let split = animal.split(/[\W_]/g)
        let formatted = split.join('%20')
        res.json(`https://www.google.co.uk/search?q=${formatted}`)
    } catch(err) {
        res.status(404).json(err.message)
    }
})

module.exports = router;
