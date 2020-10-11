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
        result[0] = {
          from: 'System',
          subject: 'No unread messages were found!',
          type: 'notification'
        }
      } else {
        if (emailCollection.length > 4) emailCollection.slice(0, 4)
        result = emailCollection.map(m => {
          return {
            from: m.envelope.from[0].name,
            subject: m.envelope.subject,
            type: 'email'
          }
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
