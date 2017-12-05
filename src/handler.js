const fs = require('fs');
const path = require('path');

const handleHomePage = (request, response) => {
  fs.readFile(path.join(__dirname, '/..', 'public', 'index.html'), (error, file) => {
    if (error) {
      response.writeHead(500, { 'content-Type': 'text/html' });
      response.end('<h1> Internal server Error </h1>');
    } else {
      response.writeHead(200, { 'content-Type': 'text/html' });
      response.end(file);
    }
  });
};

module.exports = { handleHomePage };
