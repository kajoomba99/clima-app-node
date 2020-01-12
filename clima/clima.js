const axios = require('axios')

const getClima = async (lat,lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1f50d89e709de4e1b797f3b394e1044&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}