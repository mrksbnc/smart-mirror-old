'use strict'

import { EmailService } from '@/services'

const state = {
  email: []
}

const mutations = {
  /**
   * Sets unseen mails values in state
   *
   * @param {Context} state vuex state
   * @param {Array} payload payload to set
   */
  SET_MAILS (state, payload) {
    state.email = payload
  }
}

const actions = {
  /**
  * Commits unseen mails into vuex store
  * If there is no unseen mail it commits a dummy object
  * with a displayable system message
  *
  * @param {ActionContext} commit
  */
  GET_UNREAD_MAILS ({ commit }) {
    return EmailService.getUnseenMails().then(emailCollection => {
      var result = []
      if (emailCollection.length === 0) {
        var baseObject = {
          from: null,
          subject: null,
          type: null
        }
        baseObject.from = 'System'
        baseObject.subject = 'No unread messages were found!'
        baseObject.type = 'notification'
        result.push(baseObject)
      } else {
        emailCollection.length = 4
        emailCollection.forEach(email => {
          var requiredData = {
            from: null,
            subject: null,
            type: null
          }
          requiredData.from = email.envelope.from[0].name
          requiredData.subject = email.envelope.subject
          requiredData.type = 'email'
          result.push(requiredData)
        })
      }
      commit('SET_MAILS', result)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
