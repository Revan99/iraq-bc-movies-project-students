import React, {Fragment} from 'react';
import {Link, withRouter, Route, BrowserRouter} from 'react-router-dom';
// import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
// import {NavDropdown} from 'react-bootstrap'


const Layout = ({children,match,history}) =>{

    const isActive = path =>{
        if(match.path === path){
            return{color: '#fff', fontSize: '1.2rem'};
        }else{
            return{color: '#f2f2f2'};
        }
    };

    const nav = ()=>(
        // <DirectionProvider direction={DIRECTIONS.RTL}>
        <ul className="nav nav-tabs navbar navbar-expand-lg" style={{backgroundColor: '#562666', color: '#ffffff'}}>
            <div className='container d-flex flex-column flex-md-row justify-content-between'>
            <li className="nav-item">
                <Link to="/" className=" nav-link" style={isActive('/')}>
                    Home
                </Link>
            </li>


            <li className="nav-item">
                
                <Link to='/page' className='nav-link font-weight-bold' style={isActive('/page')}>
                    page
                </Link>
            
            </li>

           </div>
        </ul>
        // </DirectionProvider>
    );

    const Footer = ()=>(
        <footer className='py-5 ' style={{backgroundColor: '#562666', color: '#ffffff', width: '100%'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md'>
                        <h5>Hameed Revan Dunia</h5>
                        <br></br>
                        <div className='m-3'>
                        <h5>Hameed Revan Dunia</h5>
                        <h5>Hameed Revan Dunia</h5>
                        <h5>Hameed Revan Dunia</h5> 
                            
                        </div>
                    </div>
                    <div className='col-6 col-md'>
                    <h5>Hameed Revan Dunia</h5>
                    <h5>Hameed Revan Dunia</h5>
                    <h5>Hameed Revan Dunia</h5>
                    </div>
                    <div className='col-6 col-md'>
                    <h5>Hameed Revan Dunia</h5> 
                    <h5>Hameed Revan Dunia</h5>
                    <h5>Hameed Revan Dunia</h5>
                    </div>
                    <div className='col-6 col-md'>
                    <h5>Hameed Revan Dunia</h5>
                    <h5>Hameed Revan Dunia</h5>
                    <h5>Hameed Revan Dunia</h5>
                    </div>
                    {/* <div className='col-6 col-md'></div> */}
                </div>
            </div>

        </footer>
    )

    return(
        <Fragment>
            {nav()}
            <div className='container-fluid'>
                <div className='row' style={{backgroundColor: '#FDFDFB'}}>
                    {children}
                </div>
            </div>
            {Footer()}
        </Fragment>
    );
};

export default withRouter(Layout);
