import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const ProcessList = (props) => {
  const processes = useSelector(state => state.processes);
  const jobs = useSelector(state => state.jobs);

  return (
    <Container>
      {processes.result.map(({id, name, startTime}) => (
        <ProcessItem key={id}>
          <ProcessName>{name}</ProcessName>
          <p>{`Started: ${startTime}`}</p>
        </ProcessItem>
      ))}
    </Container>
  );
};

export default withTheme(ProcessList);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProcessItem = styled.div`
  width: 250px;
  margin: 20px;
  padding: 20px;
  border: 1px solid ${({theme}) => theme.colors.lightgray};
  border-radius: 8px;
`;

const ProcessName = styled.p`
  font-weight: bold;
  margin-top: 0;
`;
