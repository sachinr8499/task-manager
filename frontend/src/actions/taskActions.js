import { ADD_TASK, DELETE_TASK, GET_TASK, HIDE_TASK, UPDATE_TASK } from "../constant";

export const addTask = (data) => {
    return {
        type: ADD_TASK,
        data
    }
}

export const getTask = () => {
    return {
        type: GET_TASK,
        data: "abc"
    }
}

export const hideTask = () => {
    return {
        type: HIDE_TASK,
        data: "abc"
    }
}

export const deleteTask = (data) => {
    return {
        type: DELETE_TASK,
        data
    }
}

export const updateTask = (data) => {
    return {
        type: UPDATE_TASK,
        data
    }
}