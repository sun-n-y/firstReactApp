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
  const someValue = 'shankenbake';
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

// book component
const Book = (props) => {
  const { img, title, author, displayValue } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
