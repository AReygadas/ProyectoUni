import React, { Component } from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Singup from './Components/SingUp'
import SingIn from './Components/LogIn'
import Equipos from './Pages/Equipos'
import Ser from './Pages/Ser'
import Layout from './Components/Layout'
import Home from './Pages/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>   
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/logIn' component={SingIn} />
            <Route exact path='/SingUp' component={Singup} />
            <Route exact path='/EvaSer' component={Ser} />
            <Route exact path='/ForEqui' component={Equipos} />
          </Switch>
        </Layout>
 
      </BrowserRouter>
    );
  }
}

export default App;
