import React, { Component } from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Singup from './Components/SingUp'
import SingIn from './Components/LogIn'
import AboutU from './Pages/AbautUs'
import NotFound from './Pages/NotFound'
import Grupo from './Pages/Grupos'

class App extends Component {
  render() {
    return (
      <React.Fragment>
       
        <BrowserRouter>
            <NavBar />
            <Switch>

              <Route exact path='/' component={Home} />
              <Route exact path='/logIn' component={SingIn} />
              <Route exact path='/SingUp' component={Singup} />
              <Route exact path='/About' component={AboutU} />  
              <Route exact path='/Grupos' component={Grupo} />  
              <Route component = {NotFound} />      
            
            </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
