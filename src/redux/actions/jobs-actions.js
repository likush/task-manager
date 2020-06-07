export const FETCH_JOBS = 'FETCH_JOBS';
export const FETCH_JOBS_SUCCEEDED = 'FETCH_JOBS_SUCCEEDED';
export const FETCH_JOBS_FAILED = 'FETCH_JOBS_FAILED';

export const POST_JOBS = 'POST_JOBS';
export const POST_JOBS_SUCCEEDED = 'POST_JOBS_SUCCEEDED';
export const POST_JOBS_FAILED = 'POST_JOBS_FAILED';


export const fetchJobs = () => ({type: FETCH_JOBS});
export const fetchJobsSucceeded = (result) => ({type: FETCH_JOBS_SUCCEEDED, result});
export const fetchJobsFailed = (error) => ({type: FETCH_JOBS_FAILED, error});

export const postJobs = (newJobs) => ({type: POST_JOBS, newJobs});
export const postJobsSucceeded = () => ({type: POST_JOBS_SUCCEEDED});
export const postJobsFailed = (error) => ({type: POST_JOBS_FAILED, error});
