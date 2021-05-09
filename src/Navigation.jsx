import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Logo from './logo_supercell@2x.png';
import Slogo from "./logo_supercell_id.png";
export default function Navigation() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" fixed="top" className="allnav" >
  <Navbar.Brand className="slogo"><img src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="navberpages" > <p>Gamers</p></Nav.Link>
      <Nav.Link className="navberpages" > <p>Careers</p></Nav.Link>
      <Nav.Link className="navberpages" > <p>Support</p></Nav.Link>
      <Nav.Link className="navberpages" > <p>...</p></Nav.Link>
    </Nav>
    <Form inline>
    <Navbar.Brand className="slogotwo"><img src={Slogo} /></Navbar.Brand>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
