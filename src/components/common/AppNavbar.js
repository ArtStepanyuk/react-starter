import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap'

export default function Example({ isAuthenticated, toggleUserLoggedStatus, history }) {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>Stuff</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <button type="button" onClick={() => toggleUserLoggedStatus()}>
          {isAuthenticated ? 'Logged in' : 'Not logged'}
          Toggle logged in status
        </button>
        <NavItem>
          <Button onClick={() => history.push('/protected')}>
            Protected route {isAuthenticated ? 'You can come :)' : 'You cant come'}
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
