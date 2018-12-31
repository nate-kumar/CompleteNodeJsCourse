const request = require('request');
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/f5d9910680fcdf79e38346c43e036a0f/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            // console.log(fahrenheitToCelsius(body.currently.temperature));
            callback(undefined, {
                temperature: fahrenheitToCelsius(body.currently.temperature),
                apparentTemperature: fahrenheitToCelsius(body.currently.apparentTemperature)
            });
        } else {
            console.log('Unable to fetch weather.')
        }
    })

}

module.exports.getWeather = getWeather;