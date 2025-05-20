// src/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #1976d2;
  color: white;
  padding: 10px 20px; /* Reduced padding */
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end; /* Align user info to the right */
  align-items: center;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  background-color: #bbdefb;
  color: #1976d2;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 1em;
  font-weight: bold;
`;

const DropdownMenu = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 0.95em;
`;

const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 10px 0;
  margin-top: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  min-width: 200px;
  color: #333;
`;

const DropdownItem = styled.li`
  padding: 8px 20px;
  cursor: pointer;
  font-size: 0.9em;
  &:hover {
    background-color: #f0f0f0;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <UserSection>
        <UserIcon>S</UserIcon>
        <DropdownMenu>
          <DropdownButton onClick={toggleDropdown}>
            System Administrator
          </DropdownButton>
          {isOpen && (
            <DropdownContent>
              <DropdownItem>User Management</DropdownItem>
              <DropdownItem>Module Permission</DropdownItem>
              <DropdownItem>Database Backup</DropdownItem>
              <DropdownItem>WhatsApp Messages</DropdownItem>
              <DropdownItem>User Guide</DropdownItem>
              <DropdownItem>Log Out</DropdownItem>
            </DropdownContent>
          )}
        </DropdownMenu>
      </UserSection>
    </HeaderContainer>
  );
}

export default Header;