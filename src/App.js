import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './layouts/Navbar';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { EditUser } from './components/EditUser';
import { User } from './components/User';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/users/edit/:id' component={EditUser}/>
          <Route exact path='/users/:id' component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
