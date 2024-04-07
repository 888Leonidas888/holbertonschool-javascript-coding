const request = require('request');
const idMovie = process.argv[2];

if (!idMovie) {
  console.log('Ingrese un id del 1 al 7');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${idMovie}/`;
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    if (response.statusCode === 200) {
      const peoples = JSON.parse(body);
      const n = [];
      n.push(...peoples.characters);
      n.forEach((urlPeople) => {
        request(urlPeople, function (err, response, body) {
          if (err) {
            console.log('Error al consultar personaje');
            process.exit(1);
          } else {
            if (response.statusCode === 200) {
              const character = JSON.parse(body);
              console.log(character.name);
            } else {
              console.log('Houston tenemos otro problema');
              process.exit(1);
            }
          }
        });
      });
    } else {
      console.log('Houston tenemos un problema');
    }
  }
});
