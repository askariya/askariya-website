import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Container.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact'

function Container({ location }) {
  return (
    <>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}


export default withRouter(Container);