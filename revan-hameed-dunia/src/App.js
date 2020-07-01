
import React,{useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import fetchData from './components/fetchData'
import Category from './components/category'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from '../src/components/moviecard'

// const constructUrl = (path, query) => {
//   return `${TMDB_BASE_URL}/${path}?api_key=${atob(
//     "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
//   )}&query=${query}`;
// };
function App() {
  const [movies, setMovies] = useState([])



  let geners = fetchData({path:'3/genre/movie/list', query:'', dataType:'genres'})
  let popular = fetchData({path:'3/movie/popular', query:'', dataType:'results'})


  console.log('hameed url',popular)
  // console.log(geners)

  const MovieGrid = ()=>(
    <div className='container'>
    <div className='row'>
      {popular.map((popular,i)=>(<MovieCard key={i} movies={popular}/>))}
    </div></div>
  )
  console.log(movies);
  return (

    <div className="App">
   
    <Header categorys={geners} setMovies={setMovies}/>
    {/* //{MovieGrid()} */}
    <Main movies={movies}/>
    <Footer/>
   </div>
 );
 

}

export default App;
