import { put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_JOBS,
  FETCH_JOBS_FAILED,
  FETCH_JOBS_SUCCEEDED,
  POST_JOBS,
  DELETE_JOBS,
} from '../actions/jobs-actions';
import { getFromStorage, insertToStorage, deleteFromStorage } from '../../storage/storage';

export function* fetchJobsSaga () {
  try {
    const data = yield getFromStorage('jobs');
    const result = data ? data : {};

    yield put({type: FETCH_JOBS_SUCCEEDED, result});
  } catch (err) {
    yield put({type: FETCH_JOBS_FAILED, err});
  }
}

export function* watchFetchJobs () {
  yield takeEvery(FETCH_JOBS, fetchJobsSaga);
}

export function* postJobsSaga (action) {
  try {
    yield insertToStorage('jobs', {[action.processId]: action.newJobs});
    yield put({type: FETCH_JOBS_SUCCEEDED});
    yield put({type: FETCH_JOBS});
  } catch (error) {
    yield put({type: FETCH_JOBS_FAILED, error});
  }
}

export function* watchPostJobs () {
  yield takeEvery(POST_JOBS, postJobsSaga);
}

export function* deleteJobsSaga (action) {
  try {
    yield deleteFromStorage('jobs', action.processId);
    yield put({type: FETCH_JOBS_SUCCEEDED});
    yield put({type: FETCH_JOBS});
  } catch (error) {
    yield put({type: FETCH_JOBS_FAILED, error});
  }
}

export function* watchDeleteJobs () {
  yield takeEvery(DELETE_JOBS, postJobsSaga);
}
