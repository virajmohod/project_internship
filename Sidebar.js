import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Trying Feather icons

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #303f9f;
  color: white;
  padding: 15px 10px;
`;

const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  padding-left: 15px;
  font-size: 1.4em;
  font-weight: 500;
`;

const MenuItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 0.95em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const SubMenuItem = styled.li`
  padding: 8px 10px;
  cursor: pointer;
  font-size: 0.9em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const menuItems = [
  { label: 'Dashboard', subItems: [] },
  { label: 'Presales', subItems: ['Enquiries', 'Follow Ups', 'Lost Presales'] },
  { label: 'Tractor Purchase', subItems: ['New Purchase', 'Purchase History'] },
  { label: 'Tractor Sales', subItems: ['New Sales', 'Sales History', 'Customer List'] },
  { label: 'Exchange Report', subItems: [] },
  { label: 'Accessories', subItems: ['Add Accessory', 'Accessory List'] },
  { label: 'Implement', subItems: ['Add Implement', 'Implement List'] },
  { label: 'Spare Parts', subItems: ['Add Part', 'Part List', 'Stock Management'] },
  { label: 'Workshop', subItems: ['New Job Card', 'Job Card List', 'Service History'] },
  { label: 'Salesman Reports', subItems: [] },
  { label: 'Sales Reports', subItems: [] },
  { label: 'Outstanding Reports', subItems: [] },
  { label: 'Tax Reporting Invoice', subItems: [] },
  { label: 'Finance Reports', subItems: [] },
  { label: 'Account Report', subItems: [] },
];

function Sidebar() {
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (label) => {
    setOpenSubMenus(prevState => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <SidebarContainer>
      <SidebarTitle>TECH SHOWROOM</SidebarTitle>
      {menuItems.map((item) => (
        <div key={item.label}>
          <MenuItem onClick={() => toggleSubMenu(item.label)}>
            {item.label}
            {item.subItems.length > 0 && (
              openSubMenus[item.label] ? <FiChevronUp /> : <FiChevronDown />
            )}
          </MenuItem>
          {item.subItems.length > 0 && openSubMenus[item.label] && (
            <SubMenu>
              {item.subItems.map((subItem) => (
                <SubMenuItem key={subItem}>{subItem}</SubMenuItem>
              ))}
            </SubMenu>
          )}
        </div>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;