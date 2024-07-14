const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const uri = process.env.DB_STRING;


async function conectDB() {
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  } catch(error) {
    console.log("Error in connecting db");
  }
}

module.exports = conectDB;