import {
  FETCH_JOBS,
  FETCH_JOBS_SUCCEEDED,
  FETCH_JOBS_FAILED,
  POST_JOBS,
  POST_JOBS_FAILED,
  POST_JOBS_SUCCEEDED,
  DELETE_JOBS,
  DELETE_JOBS_SUCCEEDED,
  DELETE_JOBS_FAILED
} from '../actions/jobs-actions';

const initialState = {
  result: {},
  error: '',
  isLoading: ''
};

function jobsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS: {
      return {...state, isLoading: true};
    }
    case FETCH_JOBS_SUCCEEDED:
      return {...state, result: action.result, isLoading: false};
    case FETCH_JOBS_FAILED:
      return {...state, error: action.error, isLoading: false};

    case POST_JOBS: {
      return {
        ...state,
        isLoading: true,
        result: {...state.result, [action.processId]: action.newJobs}
      };
    }
    case POST_JOBS_SUCCEEDED: {
      return {...state, isLoading: false};
    }
    case POST_JOBS_FAILED: {
      return {...state, isLoading: false, error: action.error};
    }

    case DELETE_JOBS: {
      const {[action.processId]: deletedJob, ...result} = state.result;
      return {...state, isLoading: true, result};
    }
    case DELETE_JOBS_SUCCEEDED: {
      return {...state, isLoading: false};
    }
    case DELETE_JOBS_FAILED: {
      return {...state, isLoading: false, error: action.error};
    }

    default:
      return state;
  }
}

export default jobsReducer;
