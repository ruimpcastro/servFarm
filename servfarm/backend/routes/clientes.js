const express = require('express')
const router = express.Router()

//TODOS OS CLIENTES
router.get('/',(req, res) => {
    res.render('clientes/index')
})

//ROUTE NOVO CLIENTE
router.get('/new',(req, res) => {
    res.render('clientes/new')
})
//CRIAR CLIENTE
router.post('/',(req, res) => {
    res.send('Create')
})

module.exports = router