import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/RootSaga";

const SagaMiddleware = createSagaMiddleware();

const initialState = {}

export const rootReducer = combineReducers({

});

export type AllState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, initialState, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;

