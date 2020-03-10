import React from 'react'
import Nav from './NavBar'
import Footer from './Footer'
import Tesr from './Test'
function Layotu(props){
        return(
            <React.Fragment>
                <Nav />
                
                 {props.children}
                 <Tesr />
               <Footer />

            </React.Fragment>
        )
}
export default Layotu