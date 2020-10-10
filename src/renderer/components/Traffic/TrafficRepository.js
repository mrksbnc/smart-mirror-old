
'use strict'
import axios from 'axios'

export default class TrafficRepository {
  /**
   * Properties which are required for a proper request
   *
   * @param {String} apiKey Google Cloud Platform api key
   * @param {String} corsPreFix URL part what going to deal with CORS
   * @param {String} baseURL Google maps Distance Service base URL
   * @param {String} outputFormat Response output format[JSON || XML]
   * @param {String} units Response unit type [Metric || Imperial]
   * @param {String} origins The starter location
   * @param {String} destinations The destination location
   */
  constructor (apiKey, corsPreFix, baseURL, outputFormat, units, origins, destinations) {
    this.apiKey = apiKey
    this.corsPreFix = corsPreFix
    this.baseURL = baseURL
    this.outputFormat = outputFormat
    this.units = units
    this.origins = origins
    this.destinations = destinations
  }
  /**
   * Sends a properly formatted request to the google maps distance endpoint
   *
   * @param {String} travelMode Travelmode in which traveltime will be calculated
   */
  async getTrafficData (travelMode) {
    const url = new URL(`${this.corsPreFix}/${this.baseURL}/maps/api/distancematrix/${this.outputFormat}?units=${this.units}&origins=${this.origins}&destinations=${this.destinations}&mode=${travelMode}&key=${this.apiKey}`)
    const response = await axios.get(url)
    return response
  }
}
