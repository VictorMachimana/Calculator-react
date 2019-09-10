import React from "react";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header className="App-header">
      <Navbar bg="dark" variant="dark">
        <h1 className="logoName"> My Calculator</h1>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="./me.jpg"
              width="80"
              height="80"
              padding="0"
              margin="0"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
