
const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2F3YW5kZTc0IiwiYSI6ImNrYncyeXYyZTBieGEyc3A3bDU2cGFtNXAifQ.PKxaVA5Q-w7gwtzN390qbA&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('error fetching geolocation', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location. Try another search', undefined)
        } else {
            const data = body
            callback(undefined, {
                lat: data.features[0].center[1],
                long: data.features[0].center[0],
                location: data.features[0].place_name
            })
        }
    })
}

module.exports = geoCode