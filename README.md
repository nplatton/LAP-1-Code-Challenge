# LAP 1 Debugging Assignment

## Table of contents

- [Installation & Usage](#installation--usage)
  - [Installation](#installation)
  - [Usage](#usage)
- [Screenshot](#screenshot)
- [Changelog](#changelog)
  - [Client](#client)
  - [Server](#server)
- [Bugs](#bugs)
- [Wins & Challenges](#wins--challenges)
  - [Wins](#wins)
  - [Challenges](#challenges)

## Installation & Usage

### Installation

- Clone or download the repo.
- Open terminal and run `npm install` to install the test dependencies.
- `cd ./server` then run `npm install` to install the server dependencies.

### Usage

- Run `npm start` to launch the server.
- Open `index.html` from the `client` folder.
- Enter a search request and hit one of the buttons

#### Testing

- while in `LAP-1-CODE-CHALLENGE` run `npm test` to launch the test suite.

## Screenshot

![Screenshot](client/img/screenshot.png)

## Changelog

### Client

#### index.html

- init commit
- boiler plate
- add unstyled html
- add search icon

#### style.css

- init commit
- center page
- basic styling
- fin styling
- add search icon
- style results

#### script.js

- create results dynamically
- start fetch results
- isolate search words
- add search functionality
- cleanup and comment
- fix empty search

### Server

#### grahamRoutes.js

- create graham routes
- updated get requests to accept different paths
- set up the server (index.js/app.js)

## Bugs

- Will match the search term for any word containing it
  - e.g 'category' will match 'cat'.

## Wins & Challenges

### Wins

- The fact it works.
- Search terms are case insensitive.

### Challenges

- Due to a manual creation of the database, it only shows results for a select few matches:
  - 'cat' and 'dog' return ten results about cats and dogs respectively,
  - any animals we don't know about returns ten results about rabbits,
  - 'rabbit' returns three results about ostriches,
  - 'ostrich' returns a conspiracy theory.
