const express = require('express');
const router = express.Router();

//get,pot,patch,deleteput

// Define routes for items
router.get('/', (req, res) => {
  res.send('about home page get req /about');
});


router.post('/', (req, res) => {
  const newItem = req.body;
  res.send(`about page with post`);
});

module.exports = router;
