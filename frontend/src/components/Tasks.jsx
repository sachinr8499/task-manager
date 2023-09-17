import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import '../index.css'
import { deleteTask } from '../actions/taskActions'
import { useDispatch } from 'react-redux'

// onClick={() => dispatch(updateTask({taskTitle, taskDescription,}))}
const Task = ({ taskTitle, taskDescription, id, setShowPopup, setPopupContent }) => {
  const dispatch = useDispatch();
  const updateTask = () => {
    setPopupContent({ taskTitle, taskDescription, id });
    setShowPopup(true);
  };
  return (
    <div className="task-list-container">
      <div className="task-title">
        <h2 className="task-heading">{taskTitle}</h2>
        <div className="task-icons">
          <AiFillEdit className="r-icon" onClick={updateTask} />
          <AiFillDelete className="r-icon" onClick={() => dispatch(deleteTask(id))} />
        </div>
      </div>
      <div className="title-description">
        {taskDescription}
      </div>
    </div>
  )
}

export default Task;