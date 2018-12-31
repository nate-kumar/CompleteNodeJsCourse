const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address)
const key = 'uTA5GIRo0UoVTVudZWCiQxZXaAF7OYq6'

const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${encodedAddress}`

axios.get('geocodeUrl')
.then((response) => {
    console.log(response.data)
}).catch((e) => {
    console.log(e)
    if (e.code === 'ECONNREFUSED') {
        console.log('Unable to connect to API servers.')
    }
});