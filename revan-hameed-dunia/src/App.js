import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};

function App() {
  return (
    <div className="App">
     <Header/>
     <Footer/>
    </div>
  );
}

export default App;
