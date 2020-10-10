# smart-mirror

> An electron-vue smart mirror project

#### The default package manager for this project is [yarn](https://yarnpkg.com/)

#### Build Setup
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:9080
yarn run dev

# build electron application for production
yarn run build

# run unit tests
yarn test


# lint all JS/Vue component files in `src/`
yarn run lint

```
#### Config

> First rename sample.config.js in src/renderer/config then provide the needed values and api keys
> This Project requires openWeatherMap, google cloud console (with enabled distance matrix) apiKey by defaut
> If you want to use the news component request a key from newsapi.org

```javascript
{
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
```


---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
