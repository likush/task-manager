import React from 'react';
import Modal from 'react-modal';
import styled  from 'styled-components';
import { getStatusColor } from '../utils';
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
const ProcessModal = (props) => {
  const {closeModal, modalData: {activeProcess, activeProcessJobs, isOpen, processStatus}} = props;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalInner>
        <Title>{activeProcess.name}</Title>
        <p>{`Start date: ${activeProcess.startTime}`}</p>
        <p>
          <span>Process status:</span>
          <Status color={getStatusColor(processStatus)}>{processStatus}</Status>
        </p>

        <JobsTitle>Jobs list:</JobsTitle>
        {<JobsList>
          {activeProcessJobs && activeProcessJobs.map(job => (
            <JobsListItem key={job.id}>
              <JobItemContent>
                <JobItemName>{job.name}</JobItemName>
                <Status color={getStatusColor(job.status)}>{`(${job.status})`}</Status>
              </JobItemContent>

            </JobsListItem>
          ))}
        </JobsList>}
      </ModalInner>
      <CloseBtn onClick={closeModal}>✕</CloseBtn>
    </Modal>
  );
};

export default ProcessModal;

const ModalInner = styled.div`
  position: relative;
`;

const Title = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const JobsTitle = styled.h4`
 margin: 0 0 10px;
`;

const JobsList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const JobsListItem = styled.li`
  margin-bottom: 10px;
`;

const JobItemContent = styled.div`
  display: flex;
`;

const JobItemName = styled.p`
  margin: 0;
`;

const Status = styled.span`
  color: ${({color}) => color};
  margin: 0;
  padding-left: 8px;
`;

const CloseBtn = styled(BaseButton)`
   position: absolute;
   top: 10px;
   right: 10px;
   padding: 5px;
`;
