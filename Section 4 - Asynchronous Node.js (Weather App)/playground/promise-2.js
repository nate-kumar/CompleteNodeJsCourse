const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        const encodedAddress = encodeURIComponent(address)
        const key = 'uTA5GIRo0UoVTVudZWCiQxZXaAF7OYq6'

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${encodedAddress}`,
            json: true
            }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.')
            } else if (body.info.statuscode !== 0) {
                reject('Unable to find that address.');
            } else if (body.info.statuscode === 0) {
                resolve({
                    address: body.results[0].locations[0].street,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            } else {
                reject('Nothing happened')
                console.log(body.info.statuscode)
            }
        })
    })
}

geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location,undefined,2))
},(errorMessage) => {
    console.log(errorMessage);
});