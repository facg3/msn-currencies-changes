const shot = require('shot');
const test = require('tape');
const router = require('../router');

console.log('test pass plaplaplaplaa');
test('handle Home Page', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.end();
  });
});
