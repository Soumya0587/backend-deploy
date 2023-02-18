const express = require("express");
const noteRouter = express.Router();
const { noteModel } = require("../model/notes.model");

noteRouter.get("/", async(req, res) => {
    const notes=await noteModel.find()
  res.send(notes);
});

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  const note = new noteModel(payload);
  await note.save();
  res.send("msg created");
});

noteRouter.delete("/delete/:id", async(req, res) => {
    const noteID = req.params.id
    await noteModel.findByIdAndDelete({_id:noteID})
  res.send("delete the notes");
});

module.exports = { noteRouter };
