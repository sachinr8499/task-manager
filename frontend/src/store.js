import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { saveTask, getTask, hideTask, deleteTask, updateTask } from './sagas/taskSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(saveTask)
sagaMiddleware.run(hideTask)
sagaMiddleware.run(getTask)
sagaMiddleware.run(deleteTask)
sagaMiddleware.run(updateTask)

export default store;