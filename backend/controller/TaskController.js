const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const Tasks = await TaskModel.find();
  res.send(Tasks);
};

module.exports.saveTask = (req, res) => {
  const { taskTitle, taskDescription } = req.body;

  TaskModel.create({ taskTitle, taskDescription })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { taskTitle, taskDescription } = req.body;

  TaskModel.findByIdAndUpdate(id, { taskTitle, taskDescription })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
