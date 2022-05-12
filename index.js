const express = require('express');
const app = express();
const cors = require('cors');



require('dotenv').config();
const PORT = process.env.PORT || 8000


//Middleware
app.use(cors())
app.use(express.json());


app.get("/hello", (req, res) => {
    res.send("Hello world, server test");
  });


app.listen(PORT, ()=> {
    console.log(`sever is running on ${PORT}`)
})