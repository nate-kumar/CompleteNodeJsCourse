const request = require('request');

geocodeAddress = (address, callback) => {
    
    const encodedAddress = encodeURIComponent(address)
    const key = 'uTA5GIRo0UoVTVudZWCiQxZXaAF7OYq6'

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${encodedAddress}`,
        json: true
        }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.')
        } else if (body.info.statuscode !== 0) {
            callback('Unable to find that address.');
        } else if (body.info.statuscode === 0) {
            callback(undefined, {
                address: body.results[0].locations[0].street,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        } else {
            console.log('Nothing happened')
            console.log(body.info.statuscode)
        }
    })
};

module.exports = {
    geocodeAddress
}
