import React from 'react';
import styled from 'styled-components';
import InfoCard from './InfoCard';

const BalanceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
`;

const BalanceCard = styled(InfoCard)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const BalanceValue = styled.p`
  color: #2e7d32; /* Green color for positive balance */
  font-size: 1.8em;
  font-weight: bold;
  margin-top: 5px;
`;

const Currency = styled.span`
  font-size: 0.9em;
  margin-right: 5px;
`;

const BalanceTitle = styled.h3`
  color: #757575;
  margin-bottom: 5px;
  font-size: 1.1em;
`;

function BalanceCards() {
  return (
    <BalanceContainer>
      <BalanceCard>
        <BalanceTitle>Cash Balance</BalanceTitle>
        <BalanceValue>
          <Currency>₹</Currency>(DR) 8888888
        </BalanceValue>
      </BalanceCard>
      <BalanceCard>
        <BalanceTitle>Bank Balance</BalanceTitle>
        <BalanceValue>
          <Currency>₹</Currency>(DR) 6022100
        </BalanceValue>
      </BalanceCard>
    </BalanceContainer>
  );
}

export default BalanceCards;