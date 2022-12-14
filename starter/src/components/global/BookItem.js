import BookChoices from "./BookChoices";

const BookItem = ({ book, onChangeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.smallThumbnail : ""
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <BookChoices onChangeShelf={onChangeShelf} book={book}/>
          </div>
        </div>
        <div className="book-title">{book.title ? book.title : null}</div>

        {book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default BookItem;
