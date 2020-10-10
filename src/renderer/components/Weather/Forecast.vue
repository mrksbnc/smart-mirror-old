<template>
  <div id="forecast-div">
    <div id="forecast-icon-main-div" v-for="(item, index) in forecast" :key="index">
      <div id="forecast-desc-div">
        <span>
          {{item.temp}} °C
        </span>
        <span id="fdesc">
          {{item.description}}
        </span>
        <span>
          {{item.date}}
        </span>
      </div>
      <WeatherIcon id="weather-icon" :icon="item.icon"/>
    </div>
  </div>
</template>
<script>
import WeatherIcon from '@/components/Weather/WeatherIcon.vue'
export default {
  name: 'forecast',

  components: {
    WeatherIcon
  },

  computed: {
    forecast () {
      return this.$store.state.forecast.forecast
    }
  }
}
</script>

<style scoped>
#forecast-div {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

#forecast-desc-div {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
}

#forecast-icon-main-div {
  padding: 10px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: column-reverse;
}

#fdesc{
  padding-top: 5px;
  padding-bottom: 5px;
}

#weather-icon{
  font-size: 50px;
  padding-bottom: 10px;
}
</style>
