import React from 'react';
import {Link, withRouter, Route} from 'react-router-dom';
// import './App.css';
import Layout from '../layout'

function Page() {

  const page = ()=>(
    <div className='m-lg-5'>
      <h1 className='p-5'>
        Second Page
      </h1>
    </div>
  )

  return (

    <Layout>
          
          {page()}

    </Layout>
  );
}

export default Page;
