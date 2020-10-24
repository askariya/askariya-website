import './App.css';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <h1> Arunalu Kariyawasam </h1>
      <Router>
        <Navigation />
        <Switch>
          {/* the exact keyword prevents cconfusion with other links that extend from this path*/}
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
