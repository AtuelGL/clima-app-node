const axios = require('axios');

const getClimate = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=e3a1d2f003aef2fb7b31e49174c5c70f`);

    return resp.data.main.temp;
}

module.exports = {
    getClimate
}