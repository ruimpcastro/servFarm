const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Cliente', clienteSchema)