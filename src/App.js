import react from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import './App.css';
import About from './components/About/About';
import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import Writings from './components/Writings/Writings';

const App = () => {
  return (
    <>

    <NavBar/>
      <Router classname="background">
      
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
