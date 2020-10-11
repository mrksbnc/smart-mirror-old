'use strict'

import { WeatherService } from '@/services'

const state = {
  city: 'Budapest',
  iconID: null,
  windSpeed: null,
  minimumTemperature: null,
  maximumTemperature: null,
  currentTemperature: null,
  temperatureFeelsLike: null,
  weatherDescription: '(ツ)'
}

const mutations = {
  /**
   * Sets current Weather data in state
   *
   * @param {Context} state vuex state
   * @param {Object} payload payload to set
   */
  SET_CURRENT_WEATHER (state, payload) {
    state.city = payload.city
    state.iconID = payload.iconID
    state.windSpeed = payload.windSpeed
    state.minimumTemperature = payload.minTemp
    state.maximumTemperature = payload.maxTemp
    state.currentTemperature = payload.currentTemp
    state.weatherDescription = payload.weatherDesc
    state.temperatureFeelsLike = payload.tempFeelsLike
  }
}

const actions = {
  /**
  * Assembles a new Object from current weather response then commits it into state
  *
  * @param {ActionContext} commit
  */
  GET_WEATHER ({ commit }) {
    return WeatherService.getCurrentWeather().then(res => {
      const response = res.data
      if (response.cod !== 200) return new Error('[CurrentWeatherStore] Request failed or invalid response - ' + response.cod)
      const payload = {
        city: response.name,
        iconID: response.weather[0].icon,
        windSpeed: response.wind.speed,
        minTemp: response.main.temp_min,
        maxTemp: response.main.temp_max,
        currentTemp: response.main.temp,
        tempFeelsLike: response.main.feels_like,
        weatherDesc: response.weather[0].description
      }
      return commit('SET_CURRENT_WEATHER', payload)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
