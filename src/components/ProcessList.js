import React, { useState } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseButton from './BaseButton';
import ProcessModal from './ProcessModal';
import { deleteJobs } from '../redux/actions/jobs-actions';
import { deleteProcess } from '../redux/actions/process-actions';

import {
  getProcessStatus,
  getStatusColor,
  sortProcessesByJobsCount,
  sortProcessesByStartDate,
  sortProcessesByName,
  parseDate
} from '../utils';

const ProcessList = (props) => {
  const {sortType} = props;
  const dispatch = useDispatch();
  const processes = useSelector(state => state.processes.result);
  const jobs = useSelector(state => state.jobs.result);

  const [processModalData, changeProcessModalData] = useState({isOpen: false, activeProcess: {}});

  const openModal = (process, jobs, status) => changeProcessModalData(prevState => ({
    ...prevState,
    isOpen: true,
    activeProcess: process,
    processStatus: status,
    activeProcessJobs: jobs
  }));

  const closeModal = () => changeProcessModalData(prevState => ({
    ...prevState,
    isOpen: false,
    activeProcess: '',
    processStatus: '',
    activeProcessJobs: []
  }));

  const handleSortingProcesses = () => {
    if (sortType === 'name') {
      return sortProcessesByName(processes);
    } else if (sortType === 'jobsCount') {
      return sortProcessesByJobsCount(processes);
    } else if (sortType === 'startDate') {
      return sortProcessesByStartDate(processes);
    }
  };

  const deleteProcessAndJobs = (event, processId) => {
    event.stopPropagation();
    dispatch(deleteProcess(processId));
    dispatch(deleteJobs(processId));
  };

  const sortedProcesses = handleSortingProcesses();

  return (
    <ProcessesContainer>
      {sortedProcesses.map((process) => {
        const {id, name, startTime, jobsCount} = process;
        const processJobs = jobs[id];

        const jobsStatuses = processJobs.map(process => process.status);
        const processStatus = getProcessStatus(jobsStatuses);

        return (
          <ProcessItem onClick={() => openModal(process, processJobs, processStatus)} key={id}>
            <ProcessContent>
              <ProcessName>{name}</ProcessName>
              <ProcessData>{`Started: ${parseDate(startTime)}`}</ProcessData>
              <ProcessData>
                <span>Status:</span>
                <ProcessStatus color={getStatusColor(processStatus)}>{processStatus}</ProcessStatus>
              </ProcessData>
              <ProcessData>{`Jobs count: ${jobsCount}`}</ProcessData>
            </ProcessContent>
            <ToggleJobsBtn onClick={event => deleteProcessAndJobs(event, id)}>
              Delete process
            </ToggleJobsBtn>
          </ProcessItem>
        );
      })}
      <ProcessModal modalData={processModalData} closeModal={closeModal}/>
    </ProcessesContainer>
  );
};

export default withTheme(ProcessList);

const ProcessesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProcessItem = styled.div`
  width: 300px;
  height: max-content;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  
  &:hover {
     box-shadow: rgba(0,0,0,0.3) 0 0 10px;

  }
`;

const ProcessContent = styled.div`
  padding: 20px;
  border: 1px solid ${({theme}) => theme.colors.lightgray};
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ProcessName = styled.p`
  font-weight: bold;
  margin-top: 0;
`;

const ProcessData = styled.p`
  margin: 0 0 10px;
  
  &:last-child {
    margin: 0;
  }
  
  ${({color}) =>
  color &&
  css`
      color: ${color};
  `};
`;

const ToggleJobsBtn = styled(BaseButton)`
  width: 100%;
  padding: 10px;
  text-align: center;
  border: 1px solid ${({theme}) => theme.colors.lightgray};
  border-radius: 0 0 8px 8px;
  
  &:hover {
    background-color:  ${({theme}) => theme.colors.lightgray};
  }
`;

const ProcessStatus = styled.span`
  color: ${({color}) => color};
  padding-left: 8px;
`;
