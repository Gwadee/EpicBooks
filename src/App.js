import React, { useState, createContext } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav/MyNav.components";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.components";
import MyFooter from "./components/MyFooter/MyFooter.componets";
import Welcome from "./components/Welcome/Welcome.components";
import BookDetail from "./components/BookDetails";
import NotFound from "./components/NotFound";
import "./App.css";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`app ${theme}`}>
          <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Container>
            <Welcome />
            <Routes>
              <Route
                path="/"
                element={<AllTheBooks searchQuery={searchQuery} />}
              />
              <Route path="/book/:asin" element={<BookDetail />} />
              <Route path="/about" element={<NotFound />} />
              <Route path="/browse" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
          <MyFooter />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
