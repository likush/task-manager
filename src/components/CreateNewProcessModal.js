import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled, { withTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import faker from 'faker';
import { postProcesses } from '../redux/actions/process-actions';
import { postJobs } from '../redux/actions/jobs-actions';
import BaseButton from './BaseButton';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px'
  }
};

const jobsStatuses = ['running', 'success', 'failed'];

const CreateNewProcessModal = (props) => {
  const {isOpen, closeModal} = props;
  const dispatch = useDispatch();
  const prevProcesses = useSelector(state => state.processes.result);
  const prevJobs = useSelector(state => state.jobs.result);

  const [process, setProcess] = useState({});
  const jobs = [];

  useEffect(() => createJobsData(), [process]);


  const createProcessData = () => {
    const id = uuidv1();
    const name = faker.random.words();
    const startTime = new Date();
    const jobsCount = Math.floor(Math.random() * (10 - 1) + 1);

    setProcess({id, name, startTime, jobsCount});

  };

  const createJobsData = () => {
    for (let i = 0; i < process.jobsCount; i++) {
      const id = uuidv1();
      const processId = process.id;
      const name = faker.random.words();
      const status = jobsStatuses[Math.floor(Math.random() * jobsStatuses.length)];

      const job = {id, processId, name, status};

      jobs.push(job);
    }
  };

  const dispatchActions = () => {
    const newProcesses = [...prevProcesses, process];
    const newJobs = new Map(prevJobs).set(process.id, jobs);

    dispatch(postProcesses(newProcesses));
    dispatch(postJobs(newJobs));

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={createProcessData}
      style={customStyles}
      ariaHideApp={false}
    >
      <Title>Create new process</Title>

      <div>
        <p>
          <DataKey>Process name:</DataKey>
          <span>{process.name}</span>
        </p>
        <p>
          <DataKey>Process id:</DataKey>
          <span>{process.id}</span>
        </p>
        <p>
          <DataKey>Jobs count:</DataKey>
          <span>{process.jobsCount}</span>
        </p>
        <p>
          <DataKey>Start time:</DataKey>
          <span>{process.startTime && process.startTime.toString()}</span>
        </p>
      </div>

      <BtnsContainer>
        <CloseBtn onClick={closeModal}>Close</CloseBtn>
        <CreateBtn onClick={dispatchActions}>Create</CreateBtn>
      </BtnsContainer>
    </Modal>
  );
};

export default withTheme(CreateNewProcessModal);

const Title = styled.h3`
  text-align: center;
  margin: 0;
`;

const DataKey = styled.span`
  font-weight: bold;
  padding-right: 8px;
`;

const BtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
`;

const CreateBtn = styled(BaseButton)`
  border-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.green}; 
  
  &:hover {
    color: white;
    background-color: ${({theme}) => theme.colors.green};
  }
`;

const CloseBtn = styled(BaseButton)`
  border-color: ${({theme}) => theme.colors.violet};
  color: ${({theme}) => theme.colors.violet};
  margin-right: 20px;
  
  &:hover {
    color: white;
    background-color: ${({theme}) => theme.colors.violet};
  }
`;

