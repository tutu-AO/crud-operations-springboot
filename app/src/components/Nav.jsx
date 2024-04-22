import React from "react";
import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
// import {Link} from 'react-router-dom';

function AppNavbar(){
        return(
            <Navbar className="navbar" color="dark" dark expand="md">
                <NavbarBrand to="/">Home</NavbarBrand>
                <Collapse navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/employees">Employees</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/orders">Orders</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
            </Navbar>
        );
}
export default AppNavbar;
