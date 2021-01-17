const axios = require("axios");

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    try {
        const instance = axios.create({
            baseURL: "http://api.weatherapi.com/v1/current.json",
            params: {
                key: "47805b6431f94b04b2b10515211701",
                q: encodeUrl,
            },
        });

        const resp = await instance.get();

        if (resp.data.error) {
            throw `No hay resultados para ${dir}`;
        }

        const data = resp.data.current;
        const direccion = resp.data.location;
        const respuesta = {
            lat: direccion.lat,
            long: direccion.lon,
            direccion: `${direccion.name}, ${direccion.region} - ${direccion.country}`,
            weather: data.temp_c,
        };

        return {
            respuesta,
        };


    } catch (error) {
        return 'LA dirección que intentas ingresar, no es validad ';
    }

};

module.exports = {
    getLugarLatLng,
};