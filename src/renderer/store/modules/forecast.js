'use strict'

import { WeatherService, DateTimeService } from '@/services'

const state = {
  forecast: []
}

const mutations = {
  /**
   * Sets weatherForecast values in state
   *
   * @param {Context} state vuex state
   * @param {Array} payload payload to set
   */
  SET_WEATHER_FORECAST (state, payload) {
    state.forecast = payload
  }
}

const actions = {
  /**
  * Assembles a new array from forecast response data then commits it into state
  *
  * @param {ActionContext} commit
  */
  GET_FORECAST ({ commit }) {
    return WeatherService.getWeatherData().then(res => {
      const response = res.data.daily
      var groupedData = response.map(m => {
        return {
          temp: Math.round(m.temp.day),
          date: DateTimeService.getDayNameFromParam(m.dt * 1000),
          icon: WeatherService.convertWeatherIdToIcon(m.weather[0].icon),
          description: m.weather[0].main
        }
      })
      commit('SET_WEATHER_FORECAST', groupedData)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
