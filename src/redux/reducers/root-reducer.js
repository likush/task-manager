import { combineReducers } from 'redux';
import jobsReducer from './jobs-reducer';
import processesReducer from './processes-reducer';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    processes: processesReducer
  }
);

export default rootReducer;
