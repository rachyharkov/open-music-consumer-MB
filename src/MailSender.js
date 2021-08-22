const nodemailer = require('nodemailer')

class MailSender {
  constructor () {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
      }
    })
  }

  sendEmail (targetEmail, content) {
    const message = {
      from: 'rachyharkov @OpenMusic',
      to: targetEmail,
      subject: 'Here is your Playlist Export',
      text: 'Hi! We are received export request from your account to export ur playlist, take a look on attachments. Thanks for using our service, have a good day m8!',
      attachments: [
        {
          filename: 'myplaylist.json',
          content
        }
      ]
    }

    return this._transporter.sendMail(message)
  }
}

module.exports = MailSender
