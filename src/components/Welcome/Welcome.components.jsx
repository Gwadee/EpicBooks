import React from "react";
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
  return (
    <div>
      <Container> 
        <h1> Benvenuti in EpicBooks</h1>
        <Alert variant= "dark">
          Please do a Login
        </Alert>
      </Container>
    </div>
  );
};

export default Welcome;
