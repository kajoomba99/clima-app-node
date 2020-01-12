const { argv } = require("./config/yargs.js");

const {getLugarLatLng} = require('./lugar/lugar')

const {getClima} = require('./clima/clima')

const getInfo = async (direccion) => {
    try {
        
        const coords = await getLugarLatLng(direccion)
        const temp = await getClima(coords.lat,coords.lng)
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log)