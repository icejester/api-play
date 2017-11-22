var Client = require('node-rest-client').Client;

var client = new Client();

client.get("https://api.github.com/zen", function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    // console.log(response);
});
