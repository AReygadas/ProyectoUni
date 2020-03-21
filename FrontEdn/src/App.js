import React, { Component } from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Singup from './Components/SingUp'
import SingIn from './Components/LogIn'
import Equipo from './Pages/Equipos'
import Ser from './Pages/Ser'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Page404 from './Pages/404'

const UserLog = ({children}) =>{

  return children({isAuth: true})

}

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Layout >   
          <Switch>

            <UserLog>
              {
                ({isAuth}) => 
                  isAuth ?
                  <React.Fragment>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/logIn' component={Page404} />
                    <Route exact path='/SingUp' component={Page404} />
                    <Route exact path='/EvaSer' component={Ser} />
                    <Route exact path='/ForEqui' component={Equipo} />

                  </React.Fragment>
                  :
                  <React.Fragment>
                    <Route exact path='/' component={SingIn} />
                    <Route exact path='/logIn' component={SingIn} />
                    <Route exact path='/SingUp' component={Singup} />
                    <Route exact path='/EvaSer' component={Page404} />
                    <Route exact path='/ForEqui' component={Page404} />
                   
                    
                  </React.Fragment>
              }
            </UserLog>
          </Switch>
        </Layout>
 
      </BrowserRouter>
    );
  }
}

export default App;
