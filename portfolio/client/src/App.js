import React from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import PostCertificate from './components/PostCerticate';
import PostProjects from './components/PostProjects';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import { Switch, Route, Redirect } from "react-router-dom";
export default function App() {
  return (
    <div className="App ">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/new/certificate" component={PostCertificate} />
        <Route exact path="/new/project" component={PostProjects} />
        <Redirect to="/" />
       
      </Switch>
      <Footer />
    </div>
  );
}
