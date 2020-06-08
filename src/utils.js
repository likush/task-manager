import theme from './theme';

export function getJsonValue (key, value) {
  if (key === 'processes') {
    return JSON.stringify(value);
  } else if (key === 'jobs') {
    return JSON.stringify(Array.from(value.entries()));
  }
}

export function parseDate (date) {
  return date.toISOString().slice(0, 16).replace('T', ' ');
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
