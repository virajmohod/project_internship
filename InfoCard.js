import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: #283593;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  color: #757575;
  font-size: 1.1em;
  font-weight: bold;
`;

function InfoCard({ title, value }) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>{value}</CardContent>
    </Card>
  );
}

export default InfoCard;