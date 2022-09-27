import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
// import Posts from "./components/Posts/Posts";
// import Map from "./components/Map/Map";
import About from "./components/About/About";
// import References from "./components/References/References";
import AppSEO from "./components/SEO/AppSEO";
import PostsParent from "./components/Posts/PostsParent";
import References from "./components/References/References";
import Submissions from "./components/Submissions/Submissions";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppSEO />
      <br />
      <Header />
      <div className="Page_Parent">
        <Router basename="/#/">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/references" component={References} />
            {/*
            <Route path="/map" component={Map} /> */}
            <Route path="/posts" component={PostsParent} />
            <Route path="/submissions" component={Submissions} />

            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
