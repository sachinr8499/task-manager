import { SET_ADD_TASK, HIDE_TASK } from "../constant";

export const taskData = (data = [], action) => {
    const result = action.data
    switch (action.type) {
        case HIDE_TASK:
            console.log(result);
            return [];
        case SET_ADD_TASK:
            return result;
        default:
            return data
    }
}