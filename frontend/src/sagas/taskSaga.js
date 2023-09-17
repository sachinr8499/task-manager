import { takeEvery, put, call } from 'redux-saga/effects'
import { ADD_TASK, BASE_URL, DELETE_TASK, GET_TASK, SET_ADD_TASK, UPDATE_TASK } from '../constant';
import axios from 'axios';

export function* getTasksUtil() {
    let data = yield fetch(`${BASE_URL}/get`)
    data = yield data.json();
    yield put({ type: SET_ADD_TASK, data })
}

export function* saveTaskUtil(result) {
    const uri = `${BASE_URL}/save`;
    const response = yield call(axios.post, uri, result.data);
    console.log("added", response);
    yield getTasksUtil();
}

export function* saveTask() {
    yield takeEvery(ADD_TASK, saveTaskUtil);
}

export function* getTask() {
    yield takeEvery(GET_TASK, getTasksUtil);
}

export function* hideTask() {
    yield [];
}

export function* updateTaskUtil(result) {
    const uri = `${BASE_URL}/update/${result.data.id}`;
    const taskTitle = result.data.inputTitle
    const taskDescription = result.data.inputDescription;
    const response = yield call(axios.put, uri, { taskTitle, taskDescription });
    console.log("updated", response);
    yield getTasksUtil();
}

export function* updateTask() {
    yield takeEvery(UPDATE_TASK, updateTaskUtil)
}

export function* deleteTaskUtil(id) {
    const uri = `${BASE_URL}/delete/${id.data}`;
    const response = yield call(axios.delete, uri);
    console.log("deleted successfully", response);
    yield getTasksUtil();
}

export function* deleteTask() {
    yield takeEvery(DELETE_TASK, deleteTaskUtil)
}
