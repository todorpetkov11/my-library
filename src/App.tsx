import React from 'react';
import './App.css';
import HeaderComponent from './components/header/Header';
import HeroComponent from './components/Hero';
import NewBooksComponent from './components/new-books-list/NewBooksComponent';

function App() {
  return (
    <div className="main-container">
      <HeaderComponent />
      <HeroComponent />
      <NewBooksComponent />
    </div>
  );
}

export default App;
