const request = require('request')
const fs = require('fs')
const models = require('../models/index')
const logger = require('../lib/logger')

module.exports = function imageDownloader(url, loggedInUser, next) {
  const imageRequest = request
    .get(url)
    .on('error', function (err) {
      models.User.findByPk(loggedInUser.data.id).then(user => { return user.update({ profileImage: url }) }).catch(error => { next(error) })
      logger.warn('Error retrieving user profile image: ' + err.message + '; using image link directly')
    })
    .on('response', function (res) {
      if (res.statusCode === 200) {
        const ext = ['jpg', 'jpeg', 'png', 'svg', 'gif'].includes(url.split('.').slice(-1)[0].toLowerCase()) ? url.split('.').slice(-1)[0].toLowerCase() : 'jpg'
        imageRequest.pipe(fs.createWriteStream(`frontend/dist/frontend/assets/public/images/uploads/${loggedInUser.data.id}.${ext}`))
        models.User.findByPk(loggedInUser.data.id).then(user => { return user.update({ profileImage: `/assets/public/images/uploads/${loggedInUser.data.id}.${ext}` }) }).catch(error => { next(error) })
      } else models.User.findByPk(loggedInUser.data.id).then(user => { return user.update({ profileImage: url }) }).catch(error => { next(error) })
    })
}