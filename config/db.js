const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const dbconnect = async () => {
    await dbconnect.connect(process.env.MVC_MESSAGE);
    console.log("Connected to the database");
    
};

module.exports = dbconnect;