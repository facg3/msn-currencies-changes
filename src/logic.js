// const request = require('request');
//
// const apiRequest = (concur) => {
//   const option = {
//     url: `https://poloniex.com/public?command=returnOrderBook&currencyPair=${concur}&depth=10`,
//     headers: {
//       'User-Agent': 'request',
//     },
//   };
//   request(option, (error, result, body) => {
//     if (error) {
//       console.log(error);
//     }
//     if (result.statusCode === 200) {
//       res.writeHead(200, 'content-Type:application/json');
//       res.end(body);
//     }
//   });
// };
// module.exports = {
//   apiRequest,
// };
