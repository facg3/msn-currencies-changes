const fs = require('fs');
const path = require('path');
const request = require('request');
const logic = require('./logic');

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
const generic = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split('.')[1];
  const fileType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    json: 'application/json',
  };
  fs.readFile(path.join(__dirname, '..', endpoint), (error, file) => {
    if (error) {
      response.writeHead(500, 'content-Type:text/html');
      response.end('<h1> Internal server Error </h1>');
    } else {
      response.writeHead(200, `content-Type:${fileType[extension]}`);
      response.end(file);
    }
  });
};

const concurrent = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  }).on('end', () => {
    // logic.apiRequest(body);
    const option = {
      url: `https://poloniex.com/public?command=returnOrderBook&currencyPair=${body}&depth=10`,
      headers: {
        'User-Agent': 'request',
      },
    };
    request(option, (error, result, body) => {
      if (error) {
        console.log(error);
      }
      if (result.statusCode === 200) {
        res.writeHead(200, 'content-Type:application/json');
        res.end(body);
      }
    });
  });
};
module.exports = {
  handleHomePage,
  generic,
  concurrent,
};
