const handler = require('./handler.js');

// console.log('handler', handler);
const router = (request, response) => {
  const endpoint = request.url;
  // console.log('this is endpoint', endpoint);
  if (endpoint === '/') {
    handler.handleHomePage(request, response);
    // response.end('hello world');
  } else {
    response.writeHead(404);
    response.end('Page Not Found');
  }
};

module.exports = router;
