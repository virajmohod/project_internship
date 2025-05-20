// src/Dashboard.js
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import BalanceInfo from './BalanceInfo';
import FollowupCards from './FollowupCards';
import ServiceAppointment from './ServiceAppointment';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #e0f2f7;
  font-family: 'Roboto', sans-serif;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WelcomeBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  flex: 1; /* Allow it to take available width */
`;

const BalanceBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  /* Adjust width as needed, or use flex */
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <TopSection>
          <WelcomeBox>
            <WelcomeSection />
          </WelcomeBox>
          <BalanceBox>
            <BalanceInfo />
          </BalanceBox>
        </TopSection>
        <FollowupCards />
        <ServiceAppointment />
        {/* Add other sections as needed */}
      </MainContent>
    </DashboardContainer>
  );
}

export default Dashboard;