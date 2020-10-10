'use strict'

export default class DateTimeRepository {
  /**
  * Assembles then returns the current time in 24 hour format
  *
  * @return currentTime {String}
  */
  getCurrentTime () {
    const dateObject = new Date()
    const cHour = dateObject.getHours()
    const cMinute = dateObject.getMinutes()
    const hour = (cHour < 10 ? '0' : '') + cHour
    const minute = (cMinute < 10 ? '0' : '') + cMinute
    const currentTime = `${hour}:${minute}`
    return currentTime
  }

  /**
  * Assembles then returns the current date in dayName, mmName dd format
  *
  * @return {String} cDate
  */
  getCurrentDate () {
    const dateObject = new Date()
    const month = this.getMonthName()
    const day = ('0' + dateObject.getDate()).slice(-2)
    const dayName = this.getDayName()
    const cDate = `${dayName}, ${month} ${day}`
    return cDate
  }

  /**
  * Returns the name of the current day
  *
  * @return {String} cDayName
  */
  getDayName () {
    const date = new Date(Date.now())
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    const cDayName = days[date.getDay()]
    return cDayName
  }

  /**
  * Returns the name of the current day from the given dtString
  *
  * @return {String} cDayName
  */
  getDayNameFromParam (dt) {
    var date = new Date(dt)
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    const cDayName = days[date.getDay()]
    return cDayName
  }

  /**
   * Returns the name of the current month
   *
   * @return {String} cMonthName
   */
  getMonthName () {
    const date = new Date(Date.now())
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const cMonthName = months[date.getMonth()]
    return cMonthName
  }
}
