'use strict'

import axios from 'axios'

export default class NewsRepository {
  constructor (apiKey, baseURL, country, category, CORS) {
    this.apiKey = apiKey
    this.baseURL = baseURL
    this.country = country
    this.category = category
    this.CORS = CORS
  }

  async getTopHeadlines () {
    const url = new URL(`${this.CORS}/${this.baseURL}/top-headlines?country=${this.country}&apiKey=${this.apiKey}`)
    const response = axios.get(url)
    return response
  }

  async getTopHeadlinesFromCategory () {
    const url = new URL(`${this.CORS}/${this.baseURL}/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`)
    const response = axios.get(url)
    return response
  }
}
