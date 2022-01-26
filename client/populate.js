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
  // create a link to open in a new page
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
  // clear previous results
  const target = document.querySelector('#results');
  target.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('results_cont');
  // add a article for each result
  for (let result of results) {
    const title = result[0];
    const body = result[1];
    const link = result[2];
    container.appendChild(makeArticle(title, body, link));
  }
  target.appendChild(container);
};

function getRandomLink(arr) {
  // clear previous results
  const target = document.querySelector('#results');
  target.innerHTML = '';
  // selecting a random link and open in a new window
  const randNum = Math.floor(Math.random() * arr.length);
  const randomArticle = arr[randNum];
  window.open(randomArticle[2], '_blank');
}

const handleSearch = async (e) => {
  // prevent page from resetting
  e.preventDefault();
  const btn = e.target.id;
  const searchBox = document.querySelector('#search_val');
  const searchValue = searchBox.value;
  // find the first match
  const matchArr = searchValue.match(/cat|dog|rabbit|ostrich/i);
  let response;
  if (matchArr) {
    // make the match word lowercase
    const matchWord = matchArr[0].toLowerCase();
    // use api for matched word
    response = await (
      await fetch(`http://localhost:3000/graham/${matchWord}`)
    ).json();
  } else {
    // if no match send random str to get rabbits
    response = await (
      await fetch(`http://localhost:3000/graham/lksdfk`)
    ).json();
  }
  // if they used submit btn populate search page
  if (btn == 'submit_btn') populatePage(response);
  // if they used random btn open random link in new tab
  if (btn == 'random_btn') getRandomLink(response);
};

// add a click event listener to the search btns
const searchBtns = document.querySelectorAll('.btn');
searchBtns.forEach((searchBtn) => {
  searchBtn.addEventListener('click', handleSearch);
});
