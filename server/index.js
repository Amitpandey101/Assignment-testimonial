
require('dotenv').config()
const express = require("express");

const cors = require("cors");
const TestModel = require("./model/TestModel");
const cloudinary = require("cloudinary").v2;

const fileUpload = require("express-fileupload");
const app = express();

const PORT = process.env.PORT || 8080;

require("./db/conn");

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`server started at ${PORT}`);
  }
});

//body parser middleware
app.use(express.json({ limit: "15mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}` ,
  api_secret: `${process.env.API_SECRET}`,
});

//add testimonial

app.post("/new", (req, res) => {
  console.log(req.body);
  const file = req.files.photo;
  console.log(file);
  cloudinary.uploader
    .upload(file.tempFilePath, (err, result) => {
      const data = result.url;
      console.log(data);
      const date = new Date();
      let finalDate = date + "";
      finalDate = finalDate.split(" ");
      finalDate = finalDate.splice(1, 3).join(" ");
      TestModel.create({
        photo: data,
        name: req.body.name,
        post: req.body.post,
        description: req.body.description,
        dateOfCreation: finalDate,
      });
    })
    .then(() => {
      res.send("file and data uploaded successfully");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//view testimonial



app.patch("/update/:id", async(req, res) => {
  console.log(req.body);
  const file = req.files.photo;
  console.log(file);
  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    const data = result.url;
    console.log(data);
    const date = new Date();
    let finalDate = date + "";
    finalDate = finalDate.split(" ");
    finalDate = finalDate.splice(1, 3).join(" ");

      const updated=await TestModel.findByIdAndUpdate({ _id: req.params.id },{ ...req.body, photo: data, lastUpdatedOn: finalDate },  { new: true })
      if(updated){
      res.send("testimonial updated successfully");
      }
  });
});

app.patch("/remove/:id", async (req, res) => {
  try {
    await TestModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { active: 0 } }
    );
    res.send("testimonial successfully removed from the View page");
  } catch (error) {
    res.send(error.message);
  }
});


app.get("/all", (req, res) => {
  TestModel.find({ active: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/", (req, res) => {
  res.send("website backend");
});
