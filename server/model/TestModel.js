const mongoose = require("mongoose");

const testSchema =new mongoose.Schema({
  photo: {
    type: String,
    
  },
  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
    maxLength: 25
  },
  description: {
    type: String,
    required: true,
    maxLength: 250
  },
  dateOfCreation: {
    type: String,
 
  },
  updateDate: {
    type: String,
   
  },
  active: {
    type: Number,
    required: true,
    default: 1,
  },
  lastUpdatedOn: {
    type: String,
 
  }
});


const TestModel=mongoose.model("testimonial",testSchema)

module.exports=TestModel;
