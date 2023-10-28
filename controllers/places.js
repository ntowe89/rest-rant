const router = require('express').Router()

//INDEX
router.get('/', (req, res) => {
    res.send('GET /places')
})

//NEW
router.get('/new', (req, res) => {
    res.render('new')
})

//CREATE
router.post('/', (req, res) => {
    
})

module.exports = router
