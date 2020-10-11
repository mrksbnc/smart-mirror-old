<template>
  <div id="app" class="app">
    <div class="grid-container">
      <div class="timeEmailsTraffic">
        <DateTime />
        <Email />
        <Traffic />
      </div>
      <div class="weatherTraffic">
        <Weather />
      </div>
      <div class="forecast">
        <Forecast />
      </div>
    </div>
  </div>
</template>

<script>
import Email from '@/components/Email/Email.vue'
import Traffic from '@/components/Traffic/Traffic.vue'
import Weather from '@/components/Weather/Weather.vue'
import Forecast from '@/components/Weather/Forecast.vue'
import DateTime from '@/components/DateTime/DateTime.vue'

export default {
  name: 'smartmirror',

  components: {
    Email,
    Traffic,
    DateTime,
    Weather,
    Forecast
  },

  created () {
    this.startUp()
    this.updater()
  },

  methods: {
    /**
     * Need to be removed before prod
     * We need this piece of shit to meke shitposted values from state meeehh: /
     */
    // deleteCashedStoreValues () {
    //   const newState = {
    //     news: {
    //       news: []
    //     },
    //     email: {
    //       email: []
    //     },
    //     traffic: {
    //       transitData: {},
    //       carData: {}
    //     },
    //     forecast: {
    //       forecast: []
    //     },
    //     weather: {
    //       city: 'Budapest',
    //       iconID: '',
    //       windSpeed: 0,
    //       minimumTemperature: 0,
    //       maximumTemperature: 0,
    //       currentTemperature: 0,
    //       temperatureFeelsLike: 0,
    //       weatherDescription: '(ツ)'
    //     }
    //   }
    //   this.$store.replaceState(newState)
    // },

    startUp () {
      const { dispatch } = this.$store
      dispatch('GET_WEATHER')
      dispatch('GET_FORECAST')
      dispatch('GET_UNREAD_MAILS')
      dispatch('GET_ESTIMATED_TRAVELTIME_BY_CAR')
      dispatch('GET_ESTIMATED_TRAVELTIME_BY_PUBLIC_TRANSPORT')
    },

    updater () {
      const { dispatch } = this.$store
      setInterval(() => {
        dispatch('GET_WEATHER')
        dispatch('GET_FORECAST')
      }, 1800000)

      setInterval(() => {
        dispatch('GET_UNREAD_MAILS')
        dispatch('GET_ESTIMATED_TRAVELTIME_BY_CAR')
        dispatch('GET_ESTIMATED_TRAVELTIME_BY_PUBLIC_TRANSPORT')
      }, 60000)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@600&display=swap');

html {
  height: 100%;
  color: #FFFFFF;
  overflow: hidden;
  font-family: sans-serif;
  background-color: #000000;
  font-family: 'Assistant', sans-serif;
}

.app {
  width: 100vw;
  height: 100vh;
  display: grid;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "timeEmailsTraffic weatherTraffic" "forecast forecast";
}

.forecast {
  display: flex;
  margin-right: 30px;
  margin-bottom: 10px;
  grid-area: forecast;
  }

.timeEmailsTraffic {
  grid-area: timeEmailsTraffic;
  margin-left: 30px;
  margin-top:30px;
}

.weatherTraffic {
  grid-area: weatherTraffic;
  margin-top: 30px;
  margin-right: 30px;
}

.div1 {
  display: flex;
  margin-top: 25px;
  margin-left: 20px;
  flex-direction: column;
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  display: flex;
  margin-right: 30px;
  align-items: flex-end;
  flex-direction: column;
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
}
.div4 {
  display: -webkit-box;
  grid-area: 2 / 1 / 3 / 2;
}
</style>
