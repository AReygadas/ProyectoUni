import React, { Component } from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Singup from './Components/SingUp'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        

        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/SingUp' component={Singup} />
            </Switch>
          </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
