import { configureStore } from "@reduxjs/toolkit";
import { initialState, rootReducer } from "./reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";
import { textWatcher } from "../saga/textSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [thunk, sagaMiddleware],
});

sagaMiddleware.run(rootWatcher);

export default store;