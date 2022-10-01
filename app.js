// @/main.js
const express = require("express");
const mongoose = require("mongoose");
var port = process.env.PORT || 3000;
const { PicInput } = require("./models");

const app = express();

app.use(express.json());

app.get("/PicInputs", async (req, res) => {
  const allPicInputs = await PicInput.find();
  return res.status(200).json(allPicInputs);
});
app.get("/", function(req, res){
  res.render("Hi the server is up");
});

// app.get("/dogs/:id", async (req, res) => {
//   const { id } = req.params;
//   const dog = await Dog.findById(id);
//   return res.status(200).json(dog);
// });

app.post("/picInput", async (req, res) => {
  const newPicInput = new PicInput({ ...req.body });
  const insertedPicInput = await newDog.save();
  return res.status(201).json(insertedPicInput);
});

// app.put("/dogs/:id", async (req, res) => {
//   const { id } = req.params;
//   await Dog.updateOne({ id }, req.body);
//   const updatedDog = await Dog.findById(id);
//   return res.status(200).json(updatedDog);
// });

// app.delete("/dogs/:id", async (req, res) => {
//   const { id } = req.params;
//   const deletedDog = await Dog.findByIdAndDelete(id);
//   return res.status(200).json(deletedDog);
// });

const start = async () => {
  try {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://Uberg_Group1:Bishops1@cluster0.fv3yghu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
});

    app.listen(port, () => console.log(`Server started on ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();