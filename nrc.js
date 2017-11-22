var Client = require('node-rest-client').Client;

var client = new Client();

client.get("https://api.github.com/zen", function (data, response) {})
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
});


/*
client.get("https://api.github.com/zen", function (data, response) {
  // parsed response body as js object 
  console.log(data);
  // raw response 
  // console.log(response);
});

fetch('https://api.github.com/users/github')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
*/
