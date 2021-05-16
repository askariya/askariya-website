import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Container.css';
import ScrollToTop from "./ScrollToTop";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact'
import uCook from './pages/uCook'

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
            <ScrollToTop />
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/projects/ucook' component={uCook} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}


export default withRouter(Container);