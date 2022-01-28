/**
* @jest-environment jsdom
*/

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf8')

const populate = require('../client/populate')

global.fetch = require('jest-fetch-mock');
let api;

describe('populate.js', () => {


    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        api = require('../client/populate.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {

        // ---------------------------This does not work----------------------------
        
        // test('should make get request to /cat and return cat data', () => {
        //     const fakeEvent = {
        //         preventDefault: jest.fn(),
        //         "e.target.id": 'submit_btn',
        //         'searchBox.value': 'cat'
        //     }
        //     populate.handleSearch(fakeEvent);
        //     expect(fetch.mock.calls[0][0]).toMatch(/graham[/]cat$/)
        // })

    })
    
    describe('DOM helper functions', () => {
        
        describe('makeTitle', () => {
            test('it has the correct contents', () => {
                let title = 'Example';
                let link = 'http://example.com';
                let test = populate.makeTitle(title, link);
                expect(test.classList).toContain('article_title');
                expect(test.firstChild.nodeName.toLowerCase()).toBe('a');
                let a = test.querySelector('a');
                expect(a.classList).toContain('article_link');
            })
        })

        describe('makeBody', () => {
            test('it outputs a p tag containing the main text', () => {
                let body = 'Example text for the sake of example.';
                let test = populate.makeBody(body);
                expect(test.classList).toContain('article_body');
                expect(test.nodeName.toLowerCase()).toBe('p');
            })
        })

        describe('makeArticle', () => {
            test('check it has the class article_cont and two children', () => {
                // The contents is insignificant
                let title = '';
                let link = '';
                let body = '';
                let test = populate.makeArticle(title, body, link);
                expect(test.classList).toContain('article_cont');
                expect(test.childNodes.length).toBe(2);
                expect(test.firstChild.nodeName.toLowerCase()).toBe('h2');
                expect(test.lastChild.nodeName.toLowerCase()).toBe('p');
            })
        })

        // Still need to test populatePage and getRandomLink
        
    })
    
    describe('General helper functions', () => {

        describe('capitalizeWord', () => {
            test('it capitalises a word', () => {
                let testWord = 'bruno';
                expect(populate.capitalizeWord(testWord)).toBe('Bruno');
            })
        })

        describe('capitalizeSentence', () => {
            test('it capitalises a sentence', () => {
                let testPhrase = 'bruno tonioli';
                expect(populate.capitalizeSentence(testPhrase)).toBe('Bruno Tonioli');
            })
        })

    })

})
