var request = require('request');
var http = require("http");
// var FormData = require('form-data');
// var form = new FormData();
const https = require("https");
const fs = require("fs");
var express = require("express");
// var axios = require("axios");
var app = express();
// var ab = require("jquery");
var cors = require("cors");
app.use(cors());

app.get("/chatbot", function (req, res) {
var options = {
  'method': 'POST',
  'url': 'https://directline.botframework.com/v3/directline/conversations',
  'headers': {
    'Authorization': ''
  },
  formData: {
    // userID: '',
    // 'username': 'ngrbot',
    // 'locale': 'en-US'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  console.log(error);
  res.send(response);
});
});

       var key = fs.readFileSync('/etc/letsencrypt/live/api.ittstar.ai/privkey.pem');
      var cert = fs.readFileSync('/etc/letsencrypt/live/api.ittstar.ai/fullchain.pem');
      var options = {
        key: key,
        cert: cert
      };
https.createServer(options,app ).listen(4000);
      
console.log('Server running at http://127.0.0.1:4000/');
