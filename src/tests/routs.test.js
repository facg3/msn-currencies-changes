const shot = require('shot');
const test = require('tape');
const router = require('../router');

test('handle Home Page', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.end();
  });
});
test('handle one of generic pages', (t) => {
  shot.inject(router, { method: 'get', url: '/public' }, (response) => {
    t.equal(response.statusCode, 500, 'success handle page Internal server error');
    t.end();
  });
});
