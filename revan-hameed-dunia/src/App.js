
import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import fetchData from './components/fetchData'
import Category from './components/category'
import 'bootstrap/dist/css/bootstrap.min.css';

// const constructUrl = (path, query) => {
//   return `${TMDB_BASE_URL}/${path}?api_key=${atob(
//     "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
//   )}&query=${query}`;
// };
function App() {


let data = fetchData({path:'3/genre/movie/list', query:'', dataType:'genres'})

console.log(data)

  return (

    <div className="App">
   
    <Header categorys={data}/>
    <Main/>
    <Footer/>
   </div>
 );
 

}

export default App;
