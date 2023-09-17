import { useEffect, useState } from "react";
import { addTask, getTask, hideTask } from "./actions/taskActions";
import { useDispatch } from "react-redux";
import Task from "./components/Tasks";
import { useSelector } from "react-redux";
import Popup from "./components/PopUp";

function App() {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const data = useSelector((state) => state.taskData);
  

  useEffect(() => {
    setTaskTitle("");
    setTaskDescription("");
    setShowPopup(false);
  }, [data])



  return (
    <div className="container">
      <h1 className="title">Task Manger</h1>
      <div className="input_holder">
        <input
          type="text"
          placeholder="Task title"
          required={true}
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}

        />
        <button onClick={() => dispatch(addTask({ taskTitle, taskDescription }))}>Add</button>
      </div>
      <div className="text-area-container">
        <textarea
          required={true}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="text-area"
          placeholder="Task Description"
          value={taskDescription}
        />
      </div>
      <div className="home-buttons">
        <button className="show-tasks" onClick={() => dispatch(getTask())}>Show Tasks</button>
        <button className="hide-tasks" onClick={() => dispatch(hideTask())}>Hide Tasks</button>
      </div>
      <div>
        {data.map((item) => {
          return <Task
            key={item._id}
            taskTitle={item.taskTitle}
            taskDescription={item.taskDescription}
            id={item._id}
            setShowPopup={setShowPopup}
            setPopupContent={setPopupContent}
          />
        })}
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
        />
      )}
    </div>
  );
}

export default App;
