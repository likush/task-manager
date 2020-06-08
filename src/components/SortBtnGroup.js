import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import BaseButton from './BaseButton';

const sortTypesData = [
  {title: 'start date', value: 'startDate'},
  {title: 'jobs count', value: 'jobsCount'},
  {title: 'name', value: 'name'}
];

const SortBtnGroup = (props) => {
  const {sortType, changeSortType} = props;

  return (
    <Container>
      <p>Sort by:</p>
      <BtnGroup>
        {sortTypesData.map(({value, title}, index) =>
          <SortBtn onClick={() => changeSortType(value)}
                   selected={value === sortType}
                   key={value + index}>
            {title}
          </SortBtn>)}
      </BtnGroup>
    </Container>
  );
};

export default withTheme(SortBtnGroup);

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const BtnGroup = styled.div`
  margin: 0 20px;
`;

const SortBtn = styled(BaseButton)`
  border-color: ${({theme}) => theme.colors.purple};
  margin: 0 10px;
  color: ${({theme}) => theme.colors.purple};
  padding: 5px 30px;
  
  &:hover {
    color: white;
    background-color: ${({theme}) => theme.colors.purple};
  }
  
  ${({selected}) =>
  selected &&
  css`
    color: white;
    background-color: ${({theme}) => theme.colors.violet};
    border-color: ${({theme}) => theme.colors.violet};
  `};
`;
