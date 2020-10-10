'use strict'

import { traffic } from '@/config/config'
import { TrafficService } from '@/services'

const state = {
  transitData: {},
  carData: {}
}

const mutations = {
  /**
   * Sets transit case values in store
   *
   * @param {Context} state vuex state
   * @param {Object} payload payload to set
   */
  SET_ESTIMATED_TRAVELTIME_BY_PUBLIC_TRANSPORT (state, payload) {
    state.transitData = payload
  },
  /**
  * Sets car case values in store
  *
  * @param {Context} state vuex state
  * @param {Object} payload payload to set
  */
  SET_ESTIMATED_TRAVELTIME_BY_CAR (state, payload) {
    state.carData = payload
  }
}

const actions = {
  /**
   * Sets TrafficStore properties in state in case travelmode is transit
   *
   * @param {ActionContext} commit
   */
  GET_ESTIMATED_TRAVELTIME_BY_PUBLIC_TRANSPORT ({ commit }) {
    const trafficMode = traffic.travelModes[0]
    return TrafficService.getTrafficData(trafficMode).then(response => {
      const data = response.data
      const dest = data.destination_addresses[0].split(' ')
      const orig = data.origin_addresses[0].split(' ')
      var TObject = {
        origin: orig[0],
        destination: dest[0],
        text: data.rows[0].elements[0].duration.text,
        mode: trafficMode
      }
      return commit('SET_ESTIMATED_TRAVELTIME_BY_PUBLIC_TRANSPORT', TObject)
    })
  },

  /**
   * Sets TrafficStore properties in state in case travelmode is driving
   *
   * @param {ActionContext} commit
   */
  GET_ESTIMATED_TRAVELTIME_BY_CAR ({ commit }) {
    const trafficMode = traffic.travelModes[1]
    return TrafficService.getTrafficData(trafficMode).then(response => {
      const data = response.data
      const dest = data.destination_addresses[0].split(' ')
      const orig = data.origin_addresses[0].split(' ')
      var TObject = {
        origin: orig[0],
        destination: dest[0],
        text: data.rows[0].elements[0].duration.text,
        mode: trafficMode
      }
      return commit('SET_ESTIMATED_TRAVELTIME_BY_CAR', TObject)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
