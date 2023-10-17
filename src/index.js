import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
  title: 'Outlive',
  author: 'Petter Attia',
  img: './images/book.jpg',
};
const secondBook = {
  title: 'The Shadow Work Journal',
  author: 'Keila Shaheen',
  img: 'https://images-na.ssl-images-amazon.com/images/I/51cB5c5e1DL._AC_UL600_SR600,400_.jpg',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

// book component
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
