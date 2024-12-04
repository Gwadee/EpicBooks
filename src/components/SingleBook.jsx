import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBook = ({ setSelected, selected, book }) => {
  return (
    <Card
      className="single-book h-100"
      onClick={() => setSelected(book.asin)}
      style={{
        border: selected === book.asin ? "3px solid red" : "1px solid #ddd",
        cursor: "pointer",
      }}
    >
      <Card.Img
        className="book-cover"
        variant="top"
        src={book.img}
        alt={book.title}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-center card-title">{book.title}</Card.Title>
        <Link to={`/book/${book.asin}`}>
          <Button variant="primary" className="w-100 mt-3">
            Visualizza Dettagli
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
