const axios = require('axios');


const getCityLatLong = async(dir) => {
    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedURL}`,
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': 'f910139f9dmshb9d47c4ecd9396cp190dd5jsn0cdbe6f2cb60',
            'useQueryString': true
        }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error('No hay resultados coincidentes con la direccion espedificada')
    }
    const data = resp.data.data[0];

    const dire = data.city;
    const lat = data.latitude;
    const long = data.longitude;

    return {
        dire,
        lat,
        long

    };
}




module.exports = {
    getCityLatLong
}