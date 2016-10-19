var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
  'name' : 'lgy',
  'password': '12345'
});

var options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'connection': 'keep-alive'
  }
};

var req = http.request(options, (res) => {
  res.setEncoding('utf8');
  console.log(res.statusCode);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.on('data', (chunk) => {
    console.log(chunk);
  });
});

req.write(postData);
req.end();