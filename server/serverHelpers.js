function pageFetcher(url) {
  fetch(url)
      .then(r => r.text)
      .then(arrayCreator)
      .catch(console.warn)
}

function arrayCreator(data) {
  return data
}

module.exports = { pageFetcher };
