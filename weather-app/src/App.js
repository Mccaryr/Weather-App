import React from 'react';
import logo from './logo.svg';
import Titles from './components/title';
import Form from './components/form';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titles />
        <Form />
      </header>
    </div>
  );
}
}

export default App;
