import React from "react";
import Container from "react-bootstrap/Container";

// style //
import "./MyFooter.style.css";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        EpicBook Copyright © 2024
      </Container>
    </footer>
  );
};

export default MyFooter;
