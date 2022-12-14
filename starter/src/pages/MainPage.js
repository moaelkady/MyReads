import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookShelves from "../components/mainpagecomponents/BookShelves";
import * as BooksAPI from "../BooksAPI";

const MainPage = ({ onChangeShelf }) => {

  const [shelfBooks,setShelfBooks] = useState([]);


  useEffect(()=>{
    const getShelfBooks = async ()=>{
      const res = await BooksAPI.getAll();
      setShelfBooks(res);
    };
    getShelfBooks();

  },[]);

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelves onChangeShelf={onChangeShelf} books={shelfBooks} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
