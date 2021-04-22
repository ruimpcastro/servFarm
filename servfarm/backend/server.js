if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//TODAS AS ROUTES
const indexRouter = require('./routes/index')
const clienteRouter = require('./routes/clientes')

//USO DAS ROUTES
app.use('/', indexRouter)
app.use('/clientes', clienteRouter)



//DB CONNECTION
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))


//View engine setup
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))





app.listen(process.env.PORT || 3000)