import React from 'react'
import Nav from './NavBar'
import Footer from './Footer'

function Layotu(props){
        return(
            <React.Fragment>
                <Nav />
                 {props.children}
               <Footer />

            </React.Fragment>
        )
}
export default Layotu