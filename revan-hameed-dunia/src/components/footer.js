import React from 'react'
// this only create the footer nothing special 
export default function footer() {
    return (
        <footer className='py-5 ' style={{backgroundColor: '#562666', color: '#ffffff', width: '100%' , position:'absolute', bottom:'0'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md'>
                        <h5>Hameed Revan Dunia</h5>
                        <br></br>
                        <div className='m-3'>
                        <h5>Revan:</h5>
                        <a href="https://github.com/Revan99" target="_blank">Github account</a>
                        <h5>Hameed:</h5>
                        <a href="https://github.com/hameedalnaser" target="_blank">Github account</a>
                        <h5>Dunia:</h5>
                        <a href="https://github.com/DuniaNasr" target="_blank">Github account</a> 
                            
                        </div>
                    </div>
                    {/* <div className='col-6 col-md'></div> */}
                </div>
            </div>

        </footer>
    )
}
