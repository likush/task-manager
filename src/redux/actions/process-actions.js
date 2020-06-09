export const FETCH_PROCESSES = 'FETCH_PROCESSES';
export const FETCH_PROCESSES_SUCCEEDED = 'FETCH_PROCESSES_SUCCEEDED';
export const FETCH_PROCESSES_FAILED = 'FETCH_PROCESSES_FAILED';

export const POST_PROCESSES = 'POST_PROCESSES';

export const DELETE_PROCESS = 'DELETE_PROCESS';

export const fetchProcesses = () => ({type: FETCH_PROCESSES});
export const fetchProcessesSucceeded = (result) => ({type: FETCH_PROCESSES_SUCCEEDED, result});
export const fetchProcessesFailed = (error) => ({type: FETCH_PROCESSES_FAILED, error});

export const postProcesses = (newProcess) => ({type: POST_PROCESSES, newProcess});

export const deleteProcess = (processId) => ({type: DELETE_PROCESS, processId});



