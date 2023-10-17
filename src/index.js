import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    title: 'Outlive',
    author: 'Petter Attia',
    img: './images/book.jpg',
  },
  {
    title: 'The Shadow Work Journal',
    author: 'Keila Shaheen',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51cB5c5e1DL._AC_UL600_SR600,400_.jpg',
  },
];

const names = ['s', 'k', 'p'];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});

const BookList = () => {
  return <section className="booklist">{newNames}</section>;
};

// book component
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
