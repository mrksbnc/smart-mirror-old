'use strict'

import axios from 'axios'

export default class WeatherRepository {
  /**
   * Properties which are required for a proper request
   *
   * @param {String} apiKey OpenWeatherMap api key
   * @param {String} city queried city name
   * @param {String} lat latitude of the queried city
   * @param {String} lon longitude of the queried city
   * @param {String} baseURL OpenWeatherMap base url from config
   */
  constructor (apiKey, city, lat, lon, baseURL) {
    this.apiKey = apiKey
    this.city = city
    this.lat = lat
    this.lon = lon
    this.baseURL = baseURL
  }

  /**
   * Sends a properly formated GET request to the OpenWeatherMapAPI
   * endpoint then returns the current Weather data
   */
  async getCurrentWeather () {
    const url = new URL(`/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`, this.baseURL)
    const response = await axios.get(url)
    return response
  }

  /**
   * Sends a properly formated GET request to the OpenWeatherMapAPI
   * endpoint then returns current and forecast Weather data
   */
  async getWeatherData () {
    const url = new URL(`/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.apiKey}`, this.baseURL)
    const response = await axios.get(url)
    return response
  }

  /**
   * Returns a weather-icon name dependeng on OpenWeatherMap ID
   *
   * @param {String} openWeatherId
   */
  convertWeatherIdToIcon (openWeatherId) {
    const iconTable = {
      '01d': 'day-sunny',
      '02d': 'day-cloudy',
      '03d': 'cloudy',
      '04d': 'cloudy-windy',
      '09d': 'showers',
      '10d': 'rain',
      '11d': 'thunderstorm',
      '13d': 'snow',
      '50d': 'fog',
      '01n': 'night-clear',
      '02n': 'night-cloudy',
      '03n': 'night-cloudy',
      '04n': 'night-cloudy',
      '09n': 'night-showers',
      '10n': 'night-rain',
      '11n': 'night-thunderstorm',
      '13n': 'night-snow',
      '50n': 'night-alt-cloudy-windy'
    }
    const icon = iconTable[openWeatherId] || ''
    return icon
  }
}
