const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const courseSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: String,
  name: String,
  price: Number,
});

const Course = mongoose.model("course", courseSchema);

app.get("/", async (req, res) => {
  let elem = await Course.find();
  res.send(elem);
});

app.get("/:id", async (req, res) => {
  let elem = await Course.findById(req.params.id);
  res.send(elem);
});
app.delete("/:id", async (req, res) => {
  let elem = await Course.findByIdAndDelete(req.params.id);
  res.send(elem);
});

app.post("/", async (req, res) => {
  let elem = new Course(req.body);
  await elem.save();
  res.send(elem);
});

mongoose
  .connect("mongodb+srv://meryem:meryem@cluster0.uxlacr1.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


