import React from 'react';
import SearchInput from './components/SearchInput';
import './App.css'; 
const App = () => {
  return (
    <div className="container">
      <h1>Search for Country</h1>
      <SearchInput />
    </div>
  );
};

export default App;
