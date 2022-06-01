import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';

import './header.scss'
import { SearchBox, UserDropdown } from '../index';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { isLogin, userData } = props;

  return (
    <header>
      <Navbar expand="md">
        <Link className="navbar-brand" to="/home"><img src={logo} alt="Travender" /></Link>
        {
          isLogin ?
            <React.Fragment>
              <UserDropdown user={userData} />
            </React.Fragment>
            :
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/community">Community</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/blog">Blog</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link btn btn-primary" to="/login">Login</Link>
                </NavItem>
              </Nav>
            </Collapse>
        }
      </Navbar>


    </header>
  );
}


export default Header;
