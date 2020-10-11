'use strict'

import NewsRepository from '@/components/News/NewsRepository'
import { weather, traffic, news, email } from '@/config/config'
import EmailRepository from '@/components/Email/EmailRepository'
import WeatherRepository from '@/components/Weather/WeatherRepository'
import TrafficRepository from '@/components/Traffic/TrafficRepository'
import DateTimeRepository from '@/components/DateTime/DateTimeRepository'
/**
 * Contains all weather logic that can be done through actions.
 *
 * @type {WeatherRepository}
 */
export const WeatherService = new WeatherRepository(weather.api.apiKey, weather.location.city, weather.location.lat, weather.location.lon, weather.api.baseURL)
/**
 * Contains all datetime logic that can be done through actions.
 *
 * @type {DateTimeRepository}
 */
export const DateTimeService = new DateTimeRepository()
/**
 * Contains all traffic logic that can be done through actions.
 *
 * @type {TrafficRepository}
 */
export const TrafficService = new TrafficRepository(
  traffic.api.apiKey,
  traffic.api.CORS,
  traffic.api.distanceMatrix.baseUrl,
  traffic.api.distanceMatrix.outputFormat,
  traffic.api.distanceMatrix.units,
  traffic.location.origin,
  traffic.location.destination
)
/**
 * Contains all news logic that can be done through actions.
 *
 * @type {NewsRepository}
 */
export const NewsService = new NewsRepository(news.apiKey, news.baseUrl, news.country, news.CORS)
/**
 * Contains all e-mail logic that can be done through actions.
 *
 * @type {EmailRepository}
 */
export const EmailService = new EmailRepository(email.user, email.password, email.host, email.port)

export default {
  NewsService,
  EmailService,
  WeatherService,
  TrafficService,
  DateTimeService
}
