import React from 'react'
import {Navbar, Nav, Form, FormControl, Button, Spinner} from 'react-bootstrap'



export default function Header() {
  const constructUrl = (path, query) => {
    const TMDB_BASE_URL = "https://api.themoviedb.org"
    return `${TMDB_BASE_URL}/${path}?api_key=
      542003918769df50083a13c415bbc602
    &query=${query}`;
  };
    
    }
    return (
        <>
        <Navbar variant="dark" style={{backgroundColor: '#562666'}}>
          <Navbar.Brand href="../public/index.html">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="../public/index.html">Home</Nav.Link>
          </Nav>
          <Form inline  id = 'form' onSubmit={submit} > 
            <Spinner animation="border" role="status" style={{display:'none'}} id='spinner'>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input" onInput={onSearch}/>
            <Button variant="outline-warning" type="submit">Search</Button>
          </Form>
        </Navbar>
      </>
    )
}