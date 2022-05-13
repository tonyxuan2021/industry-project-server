const { randomUUID } = require('crypto');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

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

// function to write vids 
function writeImage(data){
  const strigifiedData = JSON.stringify(data)
  fs.writeFileSync('./data/images.json', strigifiedData);
}

//app.post
router.post('/inspiration', (req, res) => {
  //read data
  const cardsContent = readCard();
  //create new card data object
  const newImageCard = {
      id: uniqid(),
      image: "http://localhost:8080/img1.png",
      name: "Sarah Scout",
      likes: 0,
      views: 0,
      avatar: "http://localhost:8080/avatar1.png"
      
  }
  //insert new image into arr of images 
  cardsContent.unshift(newImageCard);
  //write new dataArr to json file
  writeImage(cardsContent)
  //respond to client with new vid data
  res.status(201).json(newImageCard)
});

module.exports = router;