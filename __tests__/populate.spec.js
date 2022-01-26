/**
* @jest-environment jsdom
*/

const { capitalizeWord, capitalizeSentence } = require('../client/populate')

decribe('populate.js', () => {

    describe('helper functions', () => {

        describe('capitalizeWord', () => {
            test('it capitalises a word', () => {
                let testWord = 'bruno';
                expect(capitalizeWord(testWord)).toBe('Bruno');
            })
        })

        describe('capitalizeSentence', () => {
            test('it capitalises a sentence', () => {
                let testPhrase = 'bruno tonioli';
                expect(capitalizeSentence(testPhrase)).toBe('Bruno Tonioli');
            })
        })

    })
})
