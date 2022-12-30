const cors = require('cors');
const express = require('express');
const app = express();
const Mongoose = require('mongoose');

require("dotenv").config();
const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT, MONGODATABASE } = process.env;
const PORT = process.env.PORT || 4000;

const userRoute = require('./src/routes/user.route');
const roomRoute = require("./src/routes/room.route");

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/room', roomRoute);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the Skyline hotels backend");
})

const dbLocal = true;
// Mongoose.connect(`mongodb+srv://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }/${ MONGODATABASE }`)
Mongoose.connect(dbLocal ? 
`mongodb://localhost:27017/skyline` : 
`mongodb+srv://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }/${ MONGODATABASE }`
)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Database connected and server running on port: ${PORT}`);
  })
})
.catch((err) => {console.log(new Error(err))})
