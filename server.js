const handler = require('serve-handler');
const http = require('http');
const path = require('path');

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    cleanUrls: true,
    public: path.resolve('./build')
  });
})

server.listen(3002, () => {
  console.log('Running at http://localhost:3002');
});
