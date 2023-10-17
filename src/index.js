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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

// event example
const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle click input');
  };
  return (
    <section>
      <form>
        <h2>typical form</h2>
        <input
          onChange={handleFormInput}
          type="text"
          name="example"
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

// book component
const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
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
