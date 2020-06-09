import theme from './theme';

export function parseDate (date) {
  if (typeof date === 'string') {
    return date.slice(0, 16).replace('T', ' ');
  } else {
    return date.toISOString().slice(0, 16).replace('T', ' ');
  }
}

export function getStatusColor (status) {
  switch (status) {
    case 'running': {
      return theme.colors.orange;
    }
    case 'success': {
      return theme.colors.green;
    }
    case 'failed': {
      return theme.colors.red;
    }
    default: {
      return 'black';
    }
  }
}

export function getProcessStatus (statuses) {
  if (statuses.every(status => status === 'success')) {
    return 'success';
  } else if (statuses.every(status => status === 'failed')) {
    return 'failed';
  } else if (statuses.some(status => status === 'running')) {
    return 'running';
  } else if (statuses.some(status => status === 'failed')) {
    return 'failed';
  }
}

export const sortProcessesByName = (processes) => processes.sort((a, b) => a.name.localeCompare(b.name));
export const sortProcessesByJobsCount = (processes) => processes.sort((a, b) => a.jobsCount - b.jobsCount);
export const sortProcessesByStartDate = (processes) => processes.sort((a, b) =>
  a.startTime.localeCompare(b.startTime));

export function getParsedProcessResult (data) {
  const parsedData = JSON.parse(data);
  return parsedData.map(item => ({
    ...item, startTime: new Date(item.startTime)
  }));
}

export function getJsonValue (key) {
  const defaultValue = key === 'processes' ? [] : {};
  return (JSON.parse(localStorage.getItem(key))) || defaultValue;
}
