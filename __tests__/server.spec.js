const request = require('supertest')
const { app } = require('../server/app')
let database = require('../server/data')

describe('API Server', () => {

  let api;


  beforeAll(() => {
    api = app.listen(5000, () => console.log('Test server running on port 5000...'));
  })

  afterAll((done) => {
    console.log('Stopping the test server');
    api.close(done)
  })

  it('should get / with status 200', (done) => {
    request(api)
        .get('/')
        .expect(200, done);
  })

  describe('Graham', () => {

    it('should get /graham with status 200', (done) => {
      request(api)
          .get('/graham')
          .expect(200, done);
    })

    it('should respond to /dog with 200 and dog data', (done) => {
      request(api)
          .get('/graham/dog')
          .expect(200)
          .expect(database.dog, done);
    })

    it('should respond to /cat with 200 and cat data', (done) => {
      request(api)
          .get('/graham/cat')
          .expect(200)
          .expect(database.cat, done);
    })

    it('should respond to /rabbit with 200 and ostrich data', (done) => {
      request(api)
          .get('/graham/rabbit')
          .expect(200)
          .expect(database.ostrich, done);
    })

    it('should respond to /ostrich with 200 and good data', (done) => {
      request(api)
          .get('/graham/ostrich')
          .expect(200)
          .expect(database.realstuff, done);
    })

    it('should respond to /<random> with 200 and rabbit data', (done) => {
      let test = 'futureproof';
      request(api)
          .get(`/graham/${test}`)
          .expect(200)
          .expect(database.rabbit, done);
    })

  })

})
