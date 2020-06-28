import React from 'react';
import {Link, withRouter, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Layout from '../src/core/layout'

function App() {

  const home = ()=>(
    <div className='p-lg-5 m-lg-5'>
      <h1>
        Home Page
      </h1>
    </div>
  )

  return (

    <Layout>
          
          {home()}

    </Layout>
  );
}

export default App;


//rere