import { all } from "redux-saga/effects";
import { textWatcher } from "./textSaga";

export function* rootWatcher(){
  yield all([textWatcher()]);
}