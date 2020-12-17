const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
}

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.catch(error => console.log(error));

mongoose.connection.on('connected', () => console.log("Connected to MongoDB"));

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true})); //parses application/x-www-form-urlencoded requests
app.use(express.json()); //parses json request

app.use(express.static(path.join(__dirname, "..", "client/build")));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});