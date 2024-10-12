const express = require('express');
const router = express.Router();

//get,pot,patch,deleteput
// Define routes for items
router.get('/', (req, res) => {
  res.send('List of items');
});


router.post('/', (req, res) => {
  const newItem = req.body;
  res.send(`New item added: ${newItem.name}`);
});

module.exports = router;
