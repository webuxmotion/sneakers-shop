import React from 'react';
import './App.css';
import HomePage from './pages/home/home.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <HomePage />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
