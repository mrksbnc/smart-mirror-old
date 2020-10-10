'use strict'

import ImapClient from 'emailjs-imap-client'

export default class EmailRepository {
  /**
   * Data in constructor is essential to login
   *
   * @param {String} user Username of the account
   * @param {String} password Password of the account
   * @param {String} host Imap service host
   * @param {Number} port Imap service port
   */
  constructor (user, password, host, port) {
    this.user = user
    this.password = password
    this.host = host
    this.port = port
  }

  /**
   * Logs in then returns all mail from the last 24h
   * After this function successfully returned the unseen once
   * it logs out then closes the connection with Imap server
   *
   * @returns {Array}
   */
  async getUnseenMails () {
    var unseenMails = []
    const imap = new ImapClient(this.host, this.port, {
      logLevel: 'error',
      auth: {
        user: this.user,
        pass: this.password
      }
    })
    await imap.connect()
    const unseenUID = await imap.search('INBOX', { unseen: true }, { byUid: true })
    const messages = await imap.listMessages('INBOX', '686:*', ['flags', 'envelope'], { byUid: true })

    messages.forEach(message => {
      if (unseenUID.includes(message.uid)) {
        unseenMails.push(message)
      }
    })
    imap.logout().then(() => {
      imap.close()
    })
    return unseenMails
  }
}
