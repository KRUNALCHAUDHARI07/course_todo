const mongoose = require("mongoose");

const courseModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    fees:{
        type: String,
        required: true
    }
});
const CourseModel = new mongoose.model("course",courseModel);
module.exports = CourseModel;