const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

router.get('/', (req, res) => {
  console.log(req.body);
})

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router;
