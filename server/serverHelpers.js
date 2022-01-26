// function pageFetcher(url) {
//   fetch(url)
//       .then(r => r.text)
//       .then(arrayCreator)
//       .catch(console.warn)
// }

// function arrayCreator(data) {
//   return data
// }

// module.exports = { pageFetcher };

// router.get('/:animal', (req, res) => {
//     try {
//         let animal = req.params.animal
//         let formatted = animal.split(/[\W_]/g).join('%20')
//         let url = `https://www.google.co.uk/search?q=${formatted}`

//         // response = pageFetcher(url)
//         // res.json(response)

//         res.json(url)
//     } catch(err) {
//         res.status(404).json(err.message)
//     }
// })
