const { dataChooser } = require('../server/grahamRoutes')
let database = require('../server/data')

describe('dataChooser', () => {

it('should return dog data for input of dog', () => {
    expect(dataChooser('dog')).toBe(database.dog)
})

it('should return cat data for input of cat', () => {
    expect(dataChooser('cat')).toBe(database.cat)
})

it('should return ostrich data for input of rabbit', () => {
    expect(dataChooser('rabbit')).toBe(database.ostrich)
})

it('should return realstuff data for input of ostrich', () => {
    expect(dataChooser('ostrich')).toBe(database.realstuff)
})

it('should return rabbit data for input of anything else', () => {
    let test = 'futureproof'
    expect(dataChooser(test)).toBe(database.rabbit)
})

})
