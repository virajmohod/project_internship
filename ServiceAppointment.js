import React from 'react';
import styled from 'styled-components';

const AppointmentContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
`;

const AppointmentTitle = styled.h3`
  color:rgb(0, 0, 0);
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: bold;
`;

const ServiceDueSection = styled.div`
  color: #616161;
  font-size: 0.95em;
`;

const ServiceDueLabel = styled.div`
  margin-bottom: 5px;
`;

const ServiceDueDays = styled.div`
  /* Style the days as needed */
`;

function ServiceAppointment() {
  return (
    <AppointmentContainer>
      <AppointmentTitle>Service Appointment Due (In Days)</AppointmentTitle>
      <ServiceDueSection>
        <ServiceDueLabel>Service Due</ServiceDueLabel>
        <ServiceDueDays>1 Day: 0 | 2 Days: 0 | 3 Days: 0</ServiceDueDays>
      </ServiceDueSection>
    </AppointmentContainer>
  );
}

export default ServiceAppointment;