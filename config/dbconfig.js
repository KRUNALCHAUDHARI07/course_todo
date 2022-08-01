const mongoose = require("mongoose");
require("dotenv").config();
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://${user}:${password}@15.206.7.200:28017/krunalc?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`)
    .then(()=> console.log("db connected"))
    .catch((err)=>{
        console.log("db con probleblem");
        console.log(err);
    })
module.exports = mongoose;