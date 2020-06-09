export const FETCH_JOBS = 'FETCH_JOBS';
export const FETCH_JOBS_SUCCEEDED = 'FETCH_JOBS_SUCCEEDED';
export const FETCH_JOBS_FAILED = 'FETCH_JOBS_FAILED';

export const POST_JOBS = 'POST_JOBS';
export const DELETE_JOBS = 'DELETE_JOBS';

export const fetchJobs = () => ({type: FETCH_JOBS});
export const fetchJobsSucceeded = (result) => ({type: FETCH_JOBS_SUCCEEDED, result});
export const fetchJobsFailed = (error) => ({type: FETCH_JOBS_FAILED, error});

export const postJobs = (processId, newJobs) => ({type: POST_JOBS, processId, newJobs});

export const deleteJobs = (processId) => ({type: DELETE_JOBS, processId});
