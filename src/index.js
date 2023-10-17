import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    title: 'Outlive',
    author: 'Petter Attia',
    img: './images/book.jpg',
  },
  {
    id: 2,
    title: 'The Shadow Work Journal',
    author: 'Keila Shaheen',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51cB5c5e1DL._AC_UL600_SR600,400_.jpg',
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

// book component
const Book = (props) => {
  const { img, title, author, id, getBook } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
