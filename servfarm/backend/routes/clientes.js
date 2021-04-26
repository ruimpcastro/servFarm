const express = require('express')
const router = express.Router()
const Cliente = require('../models/cliente')

// All Client Route
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try {
    const clientes = await Cliente.find(searchOptions)
    res.render('clientes/index', {
        clientes: clientes,
        searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New Client Route
router.get('/new', (req, res) => {
  res.render('clientes/new', { cliente: new Cliente() })
})

// Create Client Route
router.post('/', async (req, res) => {
  const cliente = new Cliente({
    name: req.body.name
  })
  try {
    const newCliente = await cliente.save()
    res.redirect(`clientes/${newCliente.id}`)
  } catch {
    res.render('clientes/new', {
        cliente: cliente,
        errorMessage: 'Error creating Cliente'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id)
    res.render('clientes/show', {
        cliente: cliente,
    })
  } catch {
    res.redirect('/')
  }
})

router.get('/:id/edit', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id)
    res.render('clientes/edit', { cliente: cliente })
  } catch {
    res.redirect('/clientes')
  }
})

router.put('/:id', async (req, res) => {
  let cliente
  try {
    cliente = await Cliente.findById(req.params.id)
    cliente.name = req.body.name
    await cliente.save()
    res.redirect(`/clientes/${cliente.id}`)
  } catch {
    if (cliente == null) {
      res.redirect('/')
    } else {
      res.render('clientes/edit', {
        cliente: cliente,
        errorMessage: 'Error updating Cliente'
      })
    }
  }
})

router.delete('/:id', async (req, res) => {
  let cliente
  try {
    cliente = await Cliente.findById(req.params.id)
    await cliente.remove()
    res.redirect('/clientes')
  } catch {
    if (cliente == null) {
      res.redirect('/')
    } else {
      res.redirect(`/clientes/${cliente.id}`)
    }
  }
})

module.exports = router