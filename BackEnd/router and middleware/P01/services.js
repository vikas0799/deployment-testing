const express = require('express');
const router = express.Router();

// Define routes for items
router.get('/', (req, res) => {
  res.send('serveice page get req /about');
});


router.post('/', (req, res) => {
  const newItem = req.body;
  res.send(`services page with post`);
});


router.put('/', (req, res) => {
    const newItem = req.body;
    res.send(`services page with post`);
  });

  
router.delete('/', (req, res) => {
    const newItem = req.body;
    res.send(`services page with post`);
  });

  
router.patch('/', (req, res) => {
    const newItem = req.body;
    res.send(`services page with post`);
  });
module.exports = router;
