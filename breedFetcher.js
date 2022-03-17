const request = require('request');

const input = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log("Error");
  }
  const data = JSON.parse(body);
  if (data[0]) {
    return console.log(data[0].description);
  }
  console.log('No Input');
});
