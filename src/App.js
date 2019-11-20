import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/Dashboard'
import ProjectDetails from './Components/projects/ProjectDetails'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import CreateProject from './Components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/CreateProject' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;