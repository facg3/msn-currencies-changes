const handler = require('./handler.js');

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    handler.handleHomePage(request, response);
  } else if (endpoint.startsWith('/public')) {
    handler.generic(request, response);
  } else if (endpoint === '/concurrent') {
    handler.concurrent(request, response);
  } else {
    response.writeHead(404);
    response.end('Page Not Found');
  }
};

module.exports = router;
