var axios = require('axios');
// Performing a GET request
axios.get('https://api.github.com/users/icejester')
.then(function(response){
  console.log(response.data); // ex.: { user: 'Your User'}
  console.log(response.status); // ex.: 200
});  

axios.get('https://api.github.com/zen')
.then(function(response){
  console.log(response.data);
  console.log(response.status);
});
