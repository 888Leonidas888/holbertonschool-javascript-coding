#!/usr/bin/node
// Star wars movie title

const request = require('request');
const id = process.argv[2];

if (!id || isNaN(id)) {
  console.log('Ingrese un id valido; este debe ser un número');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${id}`;
request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.log('Houston tenemos un problema...');
    process.exit(1);
  }

  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
