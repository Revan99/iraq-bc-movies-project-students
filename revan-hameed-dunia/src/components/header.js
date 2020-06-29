import React from 'react'
import {Navbar, Nav, Form, FormControl, Button, Spinner} from 'react-bootstrap'
import fetchData from './fetchData'
import Category from './category'

export default function Header(props) {
    const dropdownOnChange = ()=>{
      
    }
    return (
        <>
        <Navbar variant="dark" style={{backgroundColor: '#562666'}}>
          <Navbar.Brand href="../public/index.html">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="../public/index.html">Home</Nav.Link>
            <select>
              <option selected>All Movies</option>
              {props.categorys.map(element=>{
                return(
                <Category categoryName = {element}/>
                )
              })}
            </select>
          </Nav>
          <Form inline  id = 'form'> 
            <Spinner animation="border" role="status" style={{display:'none'}} id='spinner'>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input"/>
            <Button variant="outline-warning" type="submit">Search</Button>
          </Form>
        </Navbar>
      </>
    )
}