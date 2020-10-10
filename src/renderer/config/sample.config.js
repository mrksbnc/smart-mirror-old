'use strict'

const config = {
  weather: {
    location: {
      lat: '47.49801',
      lon: '19.03991',
      city: 'Budapest'
    },
    api: {
      apiKey: '',
      baseURL: 'http://api.openweathermap.org'
    }
  },
  traffic: {
    location: {
      origin: '',
      destination: '',
      originAlias: '',
      destinationAlias: ''
    },
    travelModes: ['transit', 'driving'],
    api: {
      apiKey: '',
      CORS: 'https://cors-anywhere.herokuapp.com',
      distanceMatrix: {
        baseURL: 'https://maps.googleapis.com',
        outputFormat: 'json',
        units: 'metric'
      }
    }
  },
  enews: {
    country: 'hu',
    baseURL: 'http://newsapi.org/v2',
    apiKey: '',
    CORS: 'https://cors-anywhere.herokuapp.com',
    acceptedSources: [], // eg'Index.hu', 'Hvg.hu', '444.hu', '24.hu'
    category: ['business', 'entertainment', 'health', 'science', 'sports', 'technology']
  },
  email: {
    user: '',
    password: '',
    host: '',
    port: 993
  }
}

module.exports = config
