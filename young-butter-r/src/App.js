import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation.js'
import Dashboard from './components/dashboard/Dashboard.js'
import Courseslist from './components/projects/Courseslist.js'
import Coursedetails from './components/projects/Coursedetails.js'
import Signinpage from './components/authentication/Signinpage.js'
import Signuppage from './components/authentication/Signuppage.js'
import Addcourse from './components/projects/Addcourse.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/courses' component={Courseslist} />
          <Route path='/signin' component={Signinpage} />
          <Route path='/signup' component={Signuppage} />
          <Route path='/addcourse' component={Addcourse} />
          <Route path='/course/:id' component={Coursedetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
