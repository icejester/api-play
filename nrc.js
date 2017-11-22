var Client = require('node-rest-client').Client;

var client = new Client();

    // do a thing, possibly async, then…
  
    if (1) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

client.get("https://api.github.com/zen", function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    // console.log(response);
});
