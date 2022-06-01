import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import userImg from '../../assets/img/user.svg';

const UserDropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const { user } = props;
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <img src={userImg} alt="" />
      </DropdownToggle>
      <DropdownMenu tag="ul">
        <DropdownItem tag="li" header>{user && user.firstname} <span>{user && user.email}</span></DropdownItem>
        <DropdownItem tag="li">
          <Link to="/dashboard">Dashboard</Link>
        </DropdownItem>
        <DropdownItem tag="li">
          <Link to="/change-password">Change Password</Link>
        </DropdownItem>
        <DropdownItem tag="li">
          <Link to="/logout">Log Out</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserDropdown;
