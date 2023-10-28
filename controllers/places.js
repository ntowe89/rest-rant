const router = require('express').Router()

//INDEX
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.bmp'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.bmp'
      }]
      
    res.render('places/index', {places})
})

//NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

//CREATE
router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router
