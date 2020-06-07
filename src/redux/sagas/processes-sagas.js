import { put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_PROCESSES,
  FETCH_PROCESSES_FAILED,
  FETCH_PROCESSES_SUCCEEDED,
  POST_PROCESSES,
  POST_PROCESSES_SUCCEEDED
} from '../actions/process-actions';
import { getFromStorage, setToStorage } from '../../storage/storage';

export function* fetchProcessesSaga () {
  try {
    const data = yield getFromStorage('processes');
    const result = data ? JSON.parse(data) : [];

    yield put({type: FETCH_PROCESSES_SUCCEEDED, result});
  } catch (err) {
    yield put({type: FETCH_PROCESSES_FAILED, err});
  }
}

export function* watchFetchProcesses () {
  yield takeEvery(FETCH_PROCESSES, fetchProcessesSaga);
}

export function* postProcessesSaga (action) {
  try {
    yield setToStorage('processes', action.newProcess);
    yield put({type: POST_PROCESSES_SUCCEEDED});
    yield put({type: FETCH_PROCESSES});
  } catch (err) {
    console.log(err);
  }
}

export function* watchPostProcesses () {
  yield takeEvery(POST_PROCESSES, postProcessesSaga);
}
