const mongoose = require('mongoose')
const Service = require('./service')

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

providerSchema.pre('remove', function(next) {
  Service.find({ provider: this.id }, (err, services) => {
    if (err) {
      next(err)
    } else if (services.length > 0) {
      next(new Error('This provider has services still'))
    } else {
      next()
    }
  })
})

module.exports = mongoose.model('Provider', providerSchema)