import {
  FETCH_PROCESSES,
  FETCH_PROCESSES_SUCCEEDED,
  FETCH_PROCESSES_FAILED,
  POST_PROCESSES,
  POST_PROCESSES_FAILED,
  POST_PROCESSES_SUCCEEDED,
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
      return {...state, result: action.result, isLoading: false};
    case FETCH_PROCESSES_FAILED:
      return {...state, error: action.error, isLoading: false};

    case POST_PROCESSES: {
      return {...state, isLoading: true};
    }
    case POST_PROCESSES_SUCCEEDED: {
      return {...state, isLoading: false};
    }
    case POST_PROCESSES_FAILED: {
      return {...state, isLoading: false, error: action.error};
    }

    default:
      return state;
  }
}

export default processesReducer;
