import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import styled from 'styled-components'
import '../css/header.module.css'

function Header(){
  return(
    <div className='header'>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src='../img/logo'
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> 
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#makeens">Make ENS</Nav.Link>
            <Nav.Link href="#market">Market</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
            <Nav.Link href="#ranking">Ranking</Nav.Link>
            <Button.Link href="#login"></Button.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header;