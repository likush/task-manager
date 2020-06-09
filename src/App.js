import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { fetchProcesses } from './redux/actions/process-actions';
import { fetchJobs } from './redux/actions/jobs-actions';
import BaseButton from './components/BaseButton';
import CreateNewProcessModal from './components/CreateNewProcessModal';
import ProcessList from './components/ProcessList';
import SortBtnGroup from './components/SortBtnGroup';

const App = () => {
  const dispatch = useDispatch();
  const processes = useSelector(state => state.processes.result);
  const jobs = useSelector(state => state.jobs.result);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortType, changeSortType] = useState('name');

  // console.log('processes', processes);
  // console.log('jobs', jobs);

  useEffect(() => {
    dispatch(fetchProcesses());
    dispatch(fetchJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isProcessListShown = processes.length > 0 && Object.keys(jobs).length > 0;

  return (
    <MainContainer>
      <Header><span>Task manager</span></Header>

      <Content>
        <SortBtnGroup sortType={sortType} changeSortType={changeSortType}/>
        {isProcessListShown && <ProcessList sortType={sortType}/>}
      </Content>

      <AddBtn onClick={() => setIsModalOpen(true)}>+</AddBtn>
      <CreateNewProcessModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
    </MainContainer>
  );
};

export default withTheme(App);

const MainContainer = styled.main`
  position: relative;
`;

const Header = styled.header`
  background-color: ${({theme}) => theme.colors.blue};
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  color: white;
`;

const Content = styled.div`
  padding: 30px
`;

const AddBtn = styled(BaseButton)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.violet};
  color: white;
  font-size: 30px;
`;

