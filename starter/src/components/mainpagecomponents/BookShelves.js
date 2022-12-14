import ShelfItems from "./ShelfItems";

const BookShelves = ({ onChangeShelf, books }) => {
  const shelves = [
    {
      name: "Currently Reading",
      value: "currentlyReading",
    },
    {
      name: "Want To Read",
      value: "wantToRead",
    },
    {
      name: "Read",
      value: "read",
    },
  ];

  return (
    <div>
      {shelves.map((shelf, index) => {
        const shelfBooks = books.filter((book) => book.shelf === shelf.value);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              {books.length > 0 && (
                <ShelfItems
                  key={index}
                  onChangeShelf={onChangeShelf}
                  book={shelfBooks}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookShelves;
