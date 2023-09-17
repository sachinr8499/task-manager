import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateTask } from "../actions/taskActions";
import '../index.css'


const Popup = ({ setShowPopup, popupContent }) => {
    const dispatch = useDispatch();
    const [inputTitle, setInputTitle] = useState(popupContent.taskTitle);
    const [inputDescription, setInputDescription] = useState(popupContent.taskDescription);
    const id = popupContent.id

    return (
        <div className="backdrop">
            <div className="popup">
                <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
                <h1>Update Task</h1>

                <div className="popup__input_holder">
                    <input
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        type="text"
                        placeholder="Update tast title..."
                    />
                    <button onClick={() => dispatch(updateTask({ inputTitle, inputDescription, id }))}>Update</button>
                </div>
                <div className="text-area-popup-container">
                    <textarea
                        className="text-area-popup"
                        value={inputDescription}
                        onChange={(e) => setInputDescription(e.target.value)}
                        type="text"
                        placeholder="Update task description..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Popup;
