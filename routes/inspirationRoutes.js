const express = require('express');
const router = express.Router();
const fs = require('fs');


router.use((req, res, next) => {
    console.log('Notes Router Incoming Request');
    next();
  });

  const readCard = () => {
    const cardsContent = fs.readFileSync('./data/images.json');
    return JSON.parse(cardsContent);
  }

  router.get('/inspiration', (_req, res) => {
    // Path is always relative to index.js
    const cardsContent = readCard();
    res.status(200).json(cardsContent);
  });

  module.exports = router;