import react from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route 
} from "react-router-dom";

import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Writings from './components/Writings/Writings';

const App = () => {
  return (
    <>
      <Router classname="background">
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/writings">
            <Writings />
          </Route>
          
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      
    </Router>
    </>
    );
}

export default App;
