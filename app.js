const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const city = require('./city/city');
const climate = require('./climate/climate')


// city.getCityLatLong(argv.direction)
//     .then(console.log);

// climate.getClimate(53, 23)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(dir) => {
    try {
        let coord = await city.getCityLatLong(dir);
        let temp = await climate.getClimate(coord.lat, coord.long);
        return `La temperatura en ${coord.dire} es de ${temp}ºC.`
    } catch (error) {
        return `No se pudo obtener la temperatura de ${dir}`
    }
};


getInfo(argv.direction)
    .then(console.log)
    .catch(console.log)