// src/WelcomeSection.js
import React from 'react';
import styled from 'styled-components';

const WelcomeMessage = styled.div`
  h1 {
    margin-bottom: 5px;
    font-size: 1.6em;
    font-weight: 500;
    color: #1976d2;
  }
  p {
    font-size: 1em;
    color: #757575;
  }
`;

function WelcomeSection() {
  return (
    <WelcomeMessage>
      <h1>Welcome to YASH TRACTORS</h1>
      <p>Check Your Dealership Highlights</p>
    </WelcomeMessage>
  );
}

export default WelcomeSection;