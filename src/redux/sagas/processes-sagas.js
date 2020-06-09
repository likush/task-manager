import { put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_PROCESSES,
  FETCH_PROCESSES_FAILED,
  FETCH_PROCESSES_SUCCEEDED,
  POST_PROCESSES,
  POST_PROCESSES_SUCCEEDED,
  POST_PROCESSES_FAILED,
  DELETE_PROCESS,
  DELETE_PROCESS_SUCCEEDED,
  DELETE_PROCESS_FAILED
} from '../actions/process-actions';
import { getFromStorage, insertToStorage, deleteFromStorage } from '../../storage/storage';

export function* fetchProcessesSaga () {
  try {
    const data = yield getFromStorage('processes');
    const result = data ? data : [];

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
    yield insertToStorage('processes', action.newProcess);
    yield put({type: POST_PROCESSES_SUCCEEDED});
    yield put({type: FETCH_PROCESSES});
  } catch (err) {
    yield put({type: POST_PROCESSES_FAILED});
  }
}

export function* watchPostProcesses () {
  yield takeEvery(POST_PROCESSES, postProcessesSaga);
}

export function* deleteProcessSaga (action) {
  try {
    yield deleteFromStorage('processes', action.processId);
    yield put({type: DELETE_PROCESS_SUCCEEDED});
    yield put({type: FETCH_PROCESSES});
  } catch (err) {
    yield put({type: DELETE_PROCESS_FAILED});
  }
}

export function* watchDeleteProcess () {
  yield takeEvery(DELETE_PROCESS, deleteProcessSaga);
}
