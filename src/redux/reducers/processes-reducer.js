import {
  FETCH_PROCESSES,
  FETCH_PROCESSES_SUCCEEDED,
  FETCH_PROCESSES_FAILED,
  POST_PROCESSES,
  POST_PROCESSES_SUCCEEDED,
  DELETE_PROCESS,
  DELETE_PROCESS_SUCCEEDED,
} from '../actions/process-actions';

const initialState = {
  result: [],
  error: '',
  isLoading: false
};

function processesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROCESSES: {
      return {...state, isLoading: true};
    }
    case FETCH_PROCESSES_SUCCEEDED:
      if (action.result) {
        return {...state, result: action.result, isLoading: false};
      } else {
        return {...state, isLoading: false};
      }
    case FETCH_PROCESSES_FAILED: {
      return {...state, isLoading: false, error: action.error};
    }


    case POST_PROCESSES: {
      return {...state, isLoading: true, result: [...state.result, action.newProcess]};
    }
    case DELETE_PROCESS: {
      const newResult = state.result.filter(process => process.id !== action.processId);
      return {...state, isLoading: true, result: newResult};
    }
    default:
      return state;
  }
}

export default processesReducer;
