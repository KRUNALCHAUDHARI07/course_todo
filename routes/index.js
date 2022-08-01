var express = require('express');
var router = express.Router();
var mongoose = require("../config/dbconfig");
const CourseModel = require('../model/course');

router.post("/addcourse",(req,res) => {
  const data = {
    name: req.body.name,
    duration: req.body.duration,
    fees: req.body.fees
  };
  const insertedCourse = new CourseModel(data);
  const course = insertedCourse.save();
  res.redirect("/");
});

router.post("/editcourse/:id",async(req,res) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    duration: req.body.duration,
    fees: req.body.fees
  };
  const updatedCourse = await CourseModel.findByIdAndUpdate({_id: id.toString() },data);
  // console.log(updatedCourse);
  res.redirect("/");
});

/* GET home page. */
router.get('/', async(req, res, next) => {
  const courses = await CourseModel.find();
  // console.log(courses);
  res.render('index', { title: 'Esite Courses', course: courses });
});

router.get("/addcoursepage/:id", async(req,res) => {
  const id = req.params.id;
  if (!id) {
    id = 1;
  }
  let data;
  let action;
  if(id != 1){
    action = "Edit";
    data = await CourseModel.find({_id: id});
  }else{
    action = "Add"
  }

  res.render('addCorse', { action: action, data:data});
});

router.get("/editcourse/:id", async(req,res) => {
  const id = req.params.id
  const courseData = await CourseModel.find({_id: id});
  // console.log(courseData);
  res.render("edit1Corses", {course: courseData} )
})

router.get("/deletecourse/:id",async(req,res) => {
  const id = req.params.id;
  // console.log(id);
  const deleteCourse = await CourseModel.findByIdAndDelete({_id: id})
  res.redirect("/");
});





module.exports = router;
