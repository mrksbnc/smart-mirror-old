<template>
  <div id="weather-main-div">
    <div id="weather-info-div">
      <div id="main-info-txt-div">
        <span>{{ currentTemperature }}</span>
        <WeatherIcon icon="celsius" />
      </div>
      <WeatherIcon id="weather-icon" :icon="weatherIcon" />
    </div>
    <div id="weather-props-div">
      <div id="feels-like-div">
        <span>Feels like {{ feelsLike }}</span>
        <WeatherIcon icon="celsius" />
      </div>
      <div id="min-and-max-temp-div">
        <span id="minimum-temp">
          <WeatherIcon icon="thermometer-exterior" />
          <span>{{ minimumTemperature }}</span>
          <WeatherIcon icon="celsius" />
        </span>
        <span id="maximum-temp">
          <WeatherIcon icon="thermometer" />
          {{ maximumTemperature }}
          <WeatherIcon icon="celsius" />
        </span>
      </div>
      <div id="wind">
        <Tailwind />
        <span>{{ windSpeed }} Km/h</span>
      </div>
    </div>
  </div>
</template>

<script>
import { WeatherService } from '@/services'
import Tailwind from 'vue-material-design-icons/Tailwind'
import WeatherIcon from '@/components/Weather/WeatherIcon'
export default {
  name: 'weather',

  components: {
    Tailwind,
    WeatherIcon
  },

  data () {
    return {
      icon: null
    }
  },

  computed: {
    weatherIcon () {
      const iconId = this.$store.state.weather.iconID
      return WeatherService.convertWeatherIdToIcon(iconId)
    },
    currentTemperature () {
      return Math.round(this.$store.state.weather.currentTemperature)
    },
    feelsLike () {
      return Math.round(this.$store.state.weather.temperatureFeelsLike)
    },
    minimumTemperature () {
      return Math.round(this.$store.state.weather.minimumTemperature)
    },
    maximumTemperature () {
      return Math.round(this.$store.state.weather.maximumTemperature)
    },
    windSpeed () {
      return this.$store.state.weather.windSpeed
    }
  }
}
</script>

<style scoped>
#weather-main-div {
  color: #fff;
  display: flex;
  margin-right: 40px;
  align-items: flex-end;
  flex-direction: column;
}

#weather-props-div {
  display: flex;
  margin-top: 30px;
  font-size: 1.1rem;
  align-items: flex-end;
  flex-direction: column;
}

#weather-info-div {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

#main-info-txt-div{
  font-size: 50px;
  padding-left: 20px;
}

#wind{
  display: flex;
  align-items: center;
}

#weather-icon {
  font-size: 90px;
}

#min-and-max-temp-div {
  margin-top: 5px;
}

#weather-props-div{
  align-items: baseline;
}

#feels-like-div{
  margin-bottom:10px;
}

#min-and-max-temp-div{
  margin-bottom:10px;
}
</style>
