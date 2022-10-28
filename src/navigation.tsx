import React from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        Matte
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="container-fluid" navbar>
          <NavItem>
            <NavLink tag={Link} to="/addition">
              Addition
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/subtraktion">
              Subtraktion
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/multiplikation">
              Multiplikation
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
