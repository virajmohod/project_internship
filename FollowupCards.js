import React from 'react';
import styled from 'styled-components';

const FollowupSection = styled.div`
  margin-bottom: 20px;
`;

const FollowupTitle = styled.h3`
  color:rgb(0, 0, 0);
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: bold;
`;

const FollowupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

const FollowupCard = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content */
  align-items: center; /* Horizontally center content */
  height: 100px; /* Ensure a minimum height for consistent centering */
`;

const CardLabel = styled.p`
  color:rgb(0, 0, 0);
  font-size: 0.9em;
  margin-bottom: 5px;
`;

const CardValue = styled.p`
  color: #2196f3;
  font-size: 1.4em;
  font-weight: bold;
`;

const TotalDueCard = styled(FollowupCard)`
  text-align: center; /* Override FollowupCard's text-align */
  align-items: center; /* Ensure horizontal centering */
`;

const TotalDueLabel = styled.p`
  color:rgb(0, 0, 0);
  font-size: 0.9em;
  margin-bottom: 5px;
`;

const TotalDueValue = styled.p`
  color: #d32f2f; /* Red color for total due */
  font-size: 1.6em;
  font-weight: bold;
`;

function FollowupCards() {
  return (
    <div>
      <FollowupSection>
        <FollowupTitle>Enquiry Followups</FollowupTitle>
        <FollowupContainer>
          <FollowupCard>
            <CardLabel>Today's Follow Up</CardLabel>
            <CardValue>0</CardValue>
          </FollowupCard>
          <FollowupCard>
            <CardLabel>OverDue Follow UP</CardLabel>
            <CardValue>5</CardValue>
          </FollowupCard>
        </FollowupContainer>
      </FollowupSection>

      <FollowupSection>
        <FollowupTitle>Recovery Followups</FollowupTitle>
        <FollowupContainer>
          <FollowupCard>
            <CardLabel>Today's Follow-up</CardLabel>
            <CardValue>0</CardValue>
          </FollowupCard>
          <TotalDueCard>
            <TotalDueLabel>Total Due Amount</TotalDueLabel>
            <TotalDueValue>8475297</TotalDueValue>
          </TotalDueCard>
        </FollowupContainer>
      </FollowupSection>
    </div>
  );
}

export default FollowupCards;