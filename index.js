const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

require('dotenv').config();
const PORT = process.env.PORT || 8000

//Middleware
app.use(cors())
app.use(express.json());

// Function to read videos
function readImages() {
  const imagesFile = fs.readFileSync('./data/images.json');
  const imagesData = JSON.parse(imagesFile);
  return imagesData;
}

app.get("/inspiration", (req, res) => {
  // 1. Read the data (and parse it)
  const imagesData = readImages();

  // 3. Respond with that data
  res.json(imagesData);

});


app.listen(PORT, ()=> {
    console.log(`sever is running on ${PORT}`)
})