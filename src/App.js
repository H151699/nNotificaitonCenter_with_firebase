import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectsDetails from './components/projects/ProjectsDetails'
import signIn from './components/auth/signIn';

class App extends Component {
  render() {
    return (

      <BrowserRouter> 
      
      <div className="App">
        <Navbar/>
        <Switch> 
          <Route exact path= '/'component={Dashboard} /> 
          <Route path = '/project/:id' component ={ProjectsDetails}/>
          <Route path = '/signin' component ={signIn}/>
        </Switch>

      </div>

      </BrowserRouter>
    );
  }
}

export default App;
