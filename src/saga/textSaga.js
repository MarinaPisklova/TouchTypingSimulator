import { put, takeEvery, call } from "redux-saga/effects";
import { textRequest, textRequestSuccess, TEXT_REQUEST_SAGA, textRequestError } from './../store/actions';
import APIService from './../API/APIService';

function* fetchTextWorker(action) {
  try {
    yield put(textRequest());
    const newText = yield call(
      async () => {
        const res = await APIService.getText();
        return res.data;
      }
    );
    yield put(textRequestSuccess(newText));
  }
  catch(error) {
    yield put(textRequestError(String(error)));
  }
}

export function* textWatcher() {
  yield takeEvery(TEXT_REQUEST_SAGA, fetchTextWorker);
}

 