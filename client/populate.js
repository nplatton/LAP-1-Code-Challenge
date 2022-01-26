let results = [
  [
    'a cool title',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis quis lorem a consectetur. In ex erat, suscipit at placerat sit amet, lobortis et diam. Curabitur auctor arcu et lorem euismod, vel elementum ante tristique. Etiam placerat neque suscipit rhoncus fringilla. In ullamcorper suscipit velit, ut lobortis mauris rhoncus sed. Praesent rhoncus bibendum auctor. Proin molestie ligula augue, eget vestibulum nunc congue ut. Mauris at dui vel tortor pellentesque varius tincidunt vitae tellus. ',
    'https://giphy.com/explore/cat',
  ],
  [
    'a second title',
    'Vestibulum id mi sit amet ligula iaculis elementum et et est. Pellentesque sit amet efficitur neque. Vivamus in elit pellentesque, gravida augue ac, efficitur nunc. Integer bibendum, mi et porta ultricies, purus sapien sollicitudin velit, vel sodales mi arcu vel sapien. Pellentesque suscipit felis nec commodo luctus. Ut ut blandit arcu, vel pellentesque purus. Vestibulum quis metus venenatis, bibendum augue id, fringilla nunc. Donec at purus at est rutrum malesuada a non lectus. Aenean id sem id metus aliquam pulvinar. Cras porta lectus eu maximus laoreet. ',
    'https://giphy.com/explore/cat',
  ],
  [
    'a not cool title',
    ' Aliquam dignissim scelerisque lectus, sed vestibulum tortor auctor id. Sed nec quam in nibh aliquam tincidunt quis eu magna. Morbi sit amet cursus libero. Sed velit neque, posuere eu dui quis, dapibus varius risus. Phasellus a nisi vel erat condimentum rhoncus. Maecenas consectetur nisl in rhoncus ultrices. Cras quis arcu sagittis, rhoncus elit non, elementum est. ',
    'https://giphy.com/explore/cat',
  ],
  [
    'just a  title',
    'Vestibulum ullamcorper metus orci, lobortis lacinia est suscipit molestie. Nam bibendum eleifend ex, at elementum est porttitor vitae. Vestibulum at venenatis ligula. Donec id erat condimentum, maximus erat scelerisque, vehicula metus. Nunc sit amet vestibulum urna. Curabitur rutrum ac urna non tempor. Vivamus volutpat orci tellus, id elementum libero laoreet sit amet. Integer consequat nulla tempor augue auctor consectetur. ',
    'https://giphy.com/explore/cat',
  ],
  [
    'bannana',
    'Pellentesque odio odio, venenatis in nibh in, iaculis sodales ipsum. Ut vel rutrum dolor. Integer dignissim turpis at velit sodales convallis. Vivamus venenatis ligula ullamcorper vulputate viverra. Donec ultrices eros eros, sed viverra orci interdum eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elit auctor, convallis velit ut, luctus arcu.  ',
    'https://giphy.com/explore/cat',
  ],
];

// Helper functions
// Capitalize one word
const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const restWord = word.slice(1).toLowerCase();
  return firstLetter + restWord;
};

// Capitalize a whole sentence
const capitalizeSentence = (sentence) => {
  const wordsArr = sentence.split(' ');
  const capitalWords = wordsArr.map(capitalizeWord);
  return capitalWords.join(' ');
};

// DOM functions
const makeTitle = (title, link) => {
  const articleTitle = document.createElement('h2');
  articleTitle.classList.add('article_title');

  const articleLink = document.createElement('a');
  articleLink.classList.add('article_link');
  articleLink.innerText = capitalizeSentence(title);
  articleLink.href = link;
  articleLink.target = '_blank';
  articleTitle.appendChild(articleLink);

  return articleTitle;
};

const makeBody = (body) => {
  const articleBody = document.createElement('p');
  articleBody.classList.add('article_body');
  articleBody.innerText = body;

  return articleBody;
};

const makeArticle = (title, body, link) => {
  const section = document.createElement('section');
  section.classList.add('article_cont');
  section.appendChild(makeTitle(title, link));
  section.appendChild(makeBody(body));

  return section;
};

const populatePage = (results) => {
  const target = document.querySelector('.wrapper');
  const container = document.createElement('div');
  container.classList.add('results_cont');
  for (let result of results) {
    const title = result[0];
    const body = result[1];
    const link = result[2];
    container.appendChild(makeArticle(title, body, link));
  }
  target.appendChild(container);
};

populatePage(results);
