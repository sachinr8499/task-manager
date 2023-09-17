const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskTitle: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
