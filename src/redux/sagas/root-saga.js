import { all } from 'redux-saga/effects';
import { watchFetchProcesses, watchPostProcesses, watchDeleteProcess } from './processes-sagas';
import { watchFetchJobs, watchPostJobs } from './jobs-sagas';

export default function* rootSaga () {
  yield all([
    watchFetchProcesses(),
    watchPostProcesses(),
    watchFetchJobs(),
    watchPostJobs(),
    watchDeleteProcess()
  ]);
}
