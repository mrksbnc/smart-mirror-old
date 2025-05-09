'use strict'

import { news } from '@/config/config'
import { NewsService } from '@/services'

const state = {
  news: []
}

const mutations = {
  SET_NEWS (state, payload) {
    state.news = payload
  }
}

const actions = {
  GET_TOP_HEADLINES ({commit}) {
    return NewsService.getTopHeadlines().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            result.push(article)
          }
        }
      })
      commit('SET_NEWS', result)
    })
  },

  GET_TOP_BUSINESS_NEWS ({commit}) {
    return NewsService.getTopHeadlinesFromCategory().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            result.push(article)
          }
        }
      })
      commit('SET_NEWS', result)
    })
  },

  GET_TOP_ENTETAINMENT_NEWS ({commit}) {
    return NewsService.getTopHeadlinesFromCategory().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            if (result.length < 5) {
              result.push(article)
            }
          }
        }
      })
      commit('SET_NEWS', result)
    })
  },

  GET_TOP_HEALTH_NEWS ({commit}) {
    return NewsService.getTopHeadlinesFromCategory().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            result.push(article)
          }
        }
      })
      commit('SET_NEWS', result)
    })
  },

  GET_TOP_SCIENCE_NEWS ({commit}) {
    return NewsService.getTopHeadlinesFromCategory().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            result.push(article)
          }
        }
      })
      commit('SET_NEWS', result)
    })
  },

  GET_TOP_SPORT_NEWS ({commit}) {
    return NewsService.getTopHeadlinesFromCategory().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            result.push(article)
          }
        }
      })
      commit('SET_NEWS', result)
    })
  },

  GET_TOP_TECH_NEWS ({commit}) {
    return NewsService.getTopHeadlinesFromCategory().then(response => {
      const result = []
      const acceptedSources = news.acceptedSources
      if (response.status !== 200) return new Error('[ERROR] [News store] Request failed due to unknown reason!'`[${response.status}]`)
      response.data.articles.forEach(article => {
        if (acceptedSources.includes(article.source.name)) {
          if (result.length < 5) {
            result.push(article)
          }
        }
      })
      commit('SET_NEWS', result)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
