import React from 'react';
import styled from 'styled-components';

const BaseButton = (props) => {
  const {children, onClick, className} = props;
  return (
    <Btn onClick={onClick} className={className}>{children}</Btn>
  );
};

export default BaseButton;

const Btn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 3px;
  transition: 0.3s ease all;
`;
