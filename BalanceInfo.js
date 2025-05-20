// src/BalanceInfo.js
import React from 'react';
import styled from 'styled-components';

const BalanceContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const BalanceItem = styled.div`
  background-color: #e3f2fd; /* Very light blue */
  color: #1976d2;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
  flex: 1; /* Allow items to take equal width */
`;

const BalanceLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1em;
`;

const BalanceValue = styled.div`
  font-size: 1.2em;
`;

function BalanceInfo() {
  return (
    <BalanceContainer>
      <BalanceItem>
        <BalanceLabel>Cash Balance</BalanceLabel>
        <BalanceValue>₹ (DR) 8888888</BalanceValue>
      </BalanceItem>
      <BalanceItem>
        <BalanceLabel>Bank Balance</BalanceLabel>
        <BalanceValue>₹ (DR) 8888888</BalanceValue>
      </BalanceItem>
    </BalanceContainer>
  );
}

export default BalanceInfo;