import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';

//es6 arrow function but can use regular vanilla js functions output will be the same
//functional component there are also class components 
//This is react preferred syntax jsx do not use regular javascript harder to read and debug
const App = () => {
  const title = 'React Coin';
  return (
    <div>
      <Header />
      <h1 className>{title}</h1>
      <br />
      <p>Up to date crypto currencies financial data</p>
    </div>
  );
}

//This is how you render react component
ReactDOM.render(
  <App />,
  document.getElementById('root')
)