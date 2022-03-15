const express = require('express')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('this is a rout')
})

module.exports = router;