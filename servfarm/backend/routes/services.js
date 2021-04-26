const express = require('express')
const router = express.Router()
const Service = require('../models/service')
const Provider = require('../models/provider')
// const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Services Route
router.get('/', async (req, res) => {
  let query = Service.find()
  if (req.query.title != null && req.query.title != '') {
    query = query.regex('title', new RegExp(req.query.title, 'i'))
  }
  if (req.query.publishedBefore != null && req.query.publishedBefore != '') {
    query = query.lte('publishDate', req.query.publishedBefore)
  }
  if (req.query.publishedAfter != null && req.query.publishedAfter != '') {
    query = query.gte('publishDate', req.query.publishedAfter)
  }
  try {
    const services = await query.exec()
    res.render('services/index', {
      services: services,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New Service Route
router.get('/new', async (req, res) => {
  renderNewPage(res, new Service())
})

// Create Service Route
router.post('/', async (req, res) => {
  const service = new Service({
    title: req.body.title,
    provider: req.body.provider,
    publishDate: new Date(req.body.publishDate),
    pageCount: req.body.pageCount,
    description: req.body.description
  })
  // saveCover(service, req.body.cover)

  try {
    const newService = await service.save()
    res.redirect(`services/${newService.id}`)
  } catch {
    renderNewPage(res, service, true)
  }
})

// Show Service Route
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
                           .populate('provider')
                           .exec()
    res.render('services/show', { service: service })
  } catch {
    res.redirect('/')
  }
})

// Edit Service Route
router.get('/:id/edit', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    renderEditPage(res, service)
  } catch {
    res.redirect('/')
  }
})

// Update Service Route
router.put('/:id', async (req, res) => {
  let service

  try {
    service = await Service.findById(req.params.id)
    service.title = req.body.title
    service.provider = req.body.provider
    service.publishDate = new Date(req.body.publishDate)
    service.pageCount = req.body.pageCount
    service.description = req.body.description
    // if (req.body.cover != null && req.body.cover !== '') {
    //   saveCover(service, req.body.cover)
    // }
    await service.save()
    res.redirect(`/services/${service.id}`)
  } catch {
    if (service != null) {
      renderEditPage(res, service, true)
    } else {
      redirect('/')
    }
  }
})

// Delete Service Page
router.delete('/:id', async (req, res) => {
  let service
  try {
    service = await Service.findById(req.params.id)
    await service.remove()
    res.redirect('/services')
  } catch {
    if (service != null) {
      res.render('services/show', {
        service: service,
        errorMessage: 'Could not remove service'
      })
    } else {
      res.redirect('/')
    }
  }
})

async function renderNewPage(res, service, hasError = false) {
  renderFormPage(res, service, 'new', hasError)
}

async function renderEditPage(res, service, hasError = false) {
  renderFormPage(res, service, 'edit', hasError)
}

async function renderFormPage(res, service, form, hasError = false) {
  try {
    const providers = await Provider.find({})
    const params = {
      providers: providers,
      service: service
    }
    if (hasError) {
      if (form === 'edit') {
        params.errorMessage = 'Error Updating service'
      } else {
        params.errorMessage = 'Error Creating service'
      }
    }
    res.render(`services/${form}`, params)
  } catch {
    res.redirect('/services')
  }
}

// function saveCover(service, coverEncoded) {
//   if (coverEncoded == null) return
//   const cover = JSON.parse(coverEncoded)
//   if (cover != null && imageMimeTypes.includes(cover.type)) {
//     service.coverImage = new Buffer.from(cover.data, 'base64')
//     service.coverImageType = cover.type
//   }
// }

module.exports = router