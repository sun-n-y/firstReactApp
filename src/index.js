import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <Person />
      <Msg />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Msg = () => {
  return <h2>msg</h2>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
