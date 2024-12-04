import { Col, Row, Container } from 'react-bootstrap';

const NotFound = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col xs={12} md={6} className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <h2>Pagina non trovata!</h2>
        <p>La pagina che stai cercando non esiste o è stata rimossa.</p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
