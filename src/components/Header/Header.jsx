import React from "react";
import s from "./Header.module.scss";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import SearchBox from "../SearchBox/SearchBox";
import logo from "../../assets/logo2.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Navbar className={s.navbar} bg="light" expand="lg">
      <NavLink to="/home">
        <Navbar.Brand>
          <img src={logo} alt="gaze" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={s.toggler} />
      <Navbar.Collapse id="basic-navbar-nav" className={s.navbarMain}>
        <SearchBox />
        <NavDropdown title="Alexander Nemtsov" id="basic-nav-dropdown">
          <NavLink to="/action" className="dropdown-item">
            My films
          </NavLink>
          <NavLink to="/rate" className="dropdown-item">
            Rate
          </NavLink>
          <NavLink to="/reviews" className="dropdown-item">
            Reviews
          </NavLink>
          <NavDropdown.Divider />
          <NavLink to="/myaccount" className="dropdown-item">
            My account
          </NavLink>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
