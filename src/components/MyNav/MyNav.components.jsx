import React, { useContext } from "react";
import { Container, Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";

const MyNav = ({ searchQuery, setSearchQuery }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className={`bg-${theme}`} variant={theme}>
      <Container>
        <Navbar.Brand as={Link} to="/">Epic-Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Cerca un libro..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
          <Button
            onClick={toggleTheme}
            variant={theme === "dark" ? "light" : "dark"}
            className="ms-2"
          >
            {theme === "dark" ? "Tema Chiaro" : "Tema Scuro"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
