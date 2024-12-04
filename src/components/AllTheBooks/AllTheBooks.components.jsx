import React, { useContext, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import horrorBooks from "../../books/horror.json";
import SingleBook from "../SingleBook";
import CommentArea from "../CommentArea";
import { ThemeContext } from "../../App";
import "./AllTheBooks.style.css";

const AllTheBooks = ({ searchQuery }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      fluid
      className={
        theme === "dark" ? "bg-dark text-light py-4" : "bg-light text-dark py-4"
      }
    >
      <Row>
        <Col md={8}>
          <Row className="g-4">
            {horrorBooks
              .filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((book) => (
                <Col xs={12} sm={6} md={6} lg={4} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selectedBook}
                    setSelected={setSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>

        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;
