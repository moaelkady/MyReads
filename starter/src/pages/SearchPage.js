import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import ListBooks from "../components/searchbookcomponents/ListBooks";

const SearchBook = ({ onChangeShelf }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const getBooks = async () => {
      if (query.length > 0) {
        const res = await BooksAPI.search(query);
        if (!res) {
          setSearchResults([]);
        } else {
          setSearchResults(res);
        }
      } else {
        clearList();
      }
    };
    getBooks();
  }, [query]);

  const clearList = () => {
    setSearchResults([]);
  };

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
          </div>
        </div>

        {query && (
          <ListBooks
            searchResults={searchResults}
            onChangeShelf={onChangeShelf}
          />
        )}
      </div>
      {query.length === 0 && (
        <div className="search-page-empty">Type somthing to search for</div>
      )}
    </div>
  );
};

export default SearchBook;
