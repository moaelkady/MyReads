import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [shelfBooks, setShelfBooks] = useState([]);

  const handleShelfChange = (book, setShelf) => {
    BooksAPI.update(book, setShelf);
    book.shelf = setShelf;
    setShelfBooks(shelfBooks.filter((book) => book.id !== shelfBooks.id));
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage onChangeShelf={handleShelfChange} />}
        />
        <Route
          path="/search"
          element={<SearchPage onChangeShelf={handleShelfChange} />}
        />
      </Routes>
    </div>
  );
}

export default App;
