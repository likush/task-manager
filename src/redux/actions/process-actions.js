export const FETCH_PROCESSES = 'FETCH_PROCESSES';
export const FETCH_PROCESSES_SUCCEEDED = 'FETCH_PROCESSES_SUCCEEDED';
export const FETCH_PROCESSES_FAILED = 'FETCH_PROCESSES_FAILED';

export const POST_PROCESSES = 'POST_PROCESSES';
export const POST_PROCESSES_SUCCEEDED = 'POST_PROCESSES_SUCCEEDED';
export const POST_PROCESSES_FAILED = 'POST_PROCESSES_FAILED';

export const DELETE_PROCESS = 'DELETE_PROCESS';
export const DELETE_PROCESS_SUCCEEDED = 'DELETE_PROCESS_SUCCEEDED';
export const DELETE_PROCESS_FAILED = 'DELETE_PROCESS_FAILED';

export const fetchProcesses = () => ({type: FETCH_PROCESSES});
export const fetchProcessesSucceeded = (result) => ({type: FETCH_PROCESSES_SUCCEEDED, result});
export const fetchProcessesFailed = (error) => ({type: FETCH_PROCESSES_FAILED, error});

export const postProcesses = (newProcess) => ({type: POST_PROCESSES, newProcess});
export const postProcessesSucceeded = () => ({type: POST_PROCESSES_SUCCEEDED});
export const postProcessesFailed = (error) => ({type: POST_PROCESSES_FAILED, error});

export const deleteProcesses = (processId) => ({type: DELETE_PROCESS, processId});
export const deleteProcessesSucceeded = () => ({type: DELETE_PROCESS_SUCCEEDED});
export const deleteProcessesFailed = (error) => ({type: DELETE_PROCESS_FAILED, error});