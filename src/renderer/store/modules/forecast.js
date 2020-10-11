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
      var groupedData = []
      const response = res.data.daily
      for (let i = 1; i < response.length; ++i) {
        var fObject = {
          temp: null,
          date: null,
          icon: null,
          description: null
        }
        fObject.temp = Math.round(response[i].temp.day)
        fObject.date = DateTimeService.getDayNameFromParam(response[i].dt * 1000)
        fObject.icon = WeatherService.convertWeatherIdToIcon(response[i].weather[0].icon)
        fObject.description = response[i].weather[0].main
        groupedData.push(fObject)
      }
      commit('SET_WEATHER_FORECAST', groupedData)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
