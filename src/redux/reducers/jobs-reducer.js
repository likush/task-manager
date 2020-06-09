import {
  FETCH_JOBS,
  FETCH_JOBS_SUCCEEDED,
  FETCH_JOBS_FAILED,
  POST_JOBS,
  DELETE_JOBS,
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
      if (action.result) {
        return {...state, result: action.result, isLoading: false};
      } else {
        return {...state, isLoading: false};
      }
    case FETCH_JOBS_FAILED:
      return {...state, error: action.error, isLoading: false};

    case POST_JOBS: {
      return {
        ...state,
        isLoading: true,
        result: {...state.result, [action.processId]: action.newJobs}
      };
    }

    case DELETE_JOBS: {
      const {[action.processId]: deletedJob, ...result} = state.result;
      return {...state, isLoading: true, result};
    }

    default:
      return state;
  }
}

export default jobsReducer;
