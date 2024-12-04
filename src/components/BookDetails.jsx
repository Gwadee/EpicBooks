import React from "react";
import { useParams } from "react-router-dom";
import horror from "../books/horror.json";
import CommentArea from "../components/CommentArea";
import { Container, Row, Col, Card } from "react-bootstrap";

const BookDetails = () => {
  const { asin } = useParams();
  const book = horror.find((b) => b.asin === asin);

  if (!book) {
    return (
      <Container className="text-center">
        <h1>Libro non trovato</h1>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src={book.img} alt={book.title} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                <strong>Prezzo:</strong> €{book.price}
              </Card.Text>
              <Card.Text>
                <strong>Categoria:</strong> {book.category}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <h4 className="mb-3">Recensioni</h4>
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
