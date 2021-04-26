const express = require('express')
const router = express.Router()
const Provider = require('../models/provider')
const Service = require('../models/service')

// All Providers Route
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try {
    const providers = await Provider.find(searchOptions)
    res.render('providers/index', {
      providers: providers,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New Provider Route
router.get('/new', (req, res) => {
  res.render('providers/new', { provider: new Provider() })
})

// Create Provider Route
router.post('/', async (req, res) => {
  const provider = new Provider({
    name: req.body.name
  })
  try {
    const newProvider = await provider.save()
    res.redirect(`providers/${newProvider.id}`)
  } catch {
    res.render('providers/new', {
      provider: provider,
      errorMessage: 'Error creating Provider'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id)
    const services = await Service.find({ provider: provider.id }).limit(6).exec()
    res.render('providers/show', {
      provider: provider,
      servicesByProvider: services
    })
  } catch {
    res.redirect('/')
  }
})

router.get('/:id/edit', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id)
    res.render('providers/edit', { provider: provider })
  } catch {
    res.redirect('/providers')
  }
})

router.put('/:id', async (req, res) => {
  let provider
  try {
    provider = await Provider.findById(req.params.id)
    provider.name = req.body.name
    await provider.save()
    res.redirect(`/providers/${provider.id}`)
  } catch {
    if (provider == null) {
      res.redirect('/')
    } else {
      res.render('providers/edit', {
        provider: provider,
        errorMessage: 'Error updating Provider'
      })
    }
  }
})

router.delete('/:id', async (req, res) => {
  let provider
  try {
    provider = await Provider.findById(req.params.id)
    await provider.remove()
    res.redirect('/providers')
  } catch {
    if (provider == null) {
      res.redirect('/')
    } else {
      res.redirect(`/providers/${provider.id}`)
    }
  }
})

module.exports = router