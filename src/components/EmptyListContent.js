import React from 'react';
import styled, { withTheme } from 'styled-components';

const EmptyListContent = () => {

  return (
    <Container>
      <Message>There are no processes here yet, but you can create it.</Message>
    </Container>
  );
};

export default withTheme(EmptyListContent);

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const Message = styled.p`
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.purple};
`;
