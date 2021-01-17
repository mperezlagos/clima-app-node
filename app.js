//const axios = requiere("axios");
const lugar = require("./lugar/lugar");
const yargs = require("yargs");

const argv = yargs.options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;

lugar.
getLugarLatLng(argv.direccion)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));