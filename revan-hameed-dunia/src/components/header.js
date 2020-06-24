import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'



export default function Header() {
    function onSubmit(){
        console.log(document.getElementById("input").value);
       // document.getElementById("input").value = ''
       document.getElementById("form").reset()
    }
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="../public/index.html">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="../public/index.html">Home</Nav.Link>
          </Nav>
          <Form inline onSubmit={onSubmit} id = 'form' > 
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input"/>
            <Button variant="outline-info" type="submit">Search</Button>
          </Form>
        </Navbar>
      </>
    )
}