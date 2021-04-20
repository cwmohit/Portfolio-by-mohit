import React,{useState} from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Education from "./Images/load1.gif";
import Education2 from "./Images/load2.gif";
import PostCertificate from './components/PostCerticate';
import PostProjects from './components/PostProjects';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import { Switch, Route, Redirect } from "react-router-dom";
export default function App() {
  const [bgColor,setBgColor]=useState('Appdark');
  const [bgtext,setBgtext]=useState('text-white');
  const [bg,setBg]=useState('black');
  const [education,setEducation]=useState(Education);
  const setTheme=(theme)=>{
  console.log(theme);
  if(theme){
    setBgColor("Applight");
    setBgtext("text-dark");
    setBg("white")
    setEducation(Education2);
  }else{
    setBgColor("Appdark");
    setBgtext('text-white');
    setBg("black")
    setEducation(Education);
  }
  }

  return (
    <div className={bgColor}>
      <Navbar setTheme={setTheme} bgColor={bgColor} />
      <Switch>
        <Route exact path="/"  component={()=><Home bg={bg} education={education}  bgColor={bgtext} />} />
        <Route exact path="/About" component={()=><About bg={bg} bgColor={bgtext} />} />
        <Route exact path="/Project" component={()=><Project bg={bg} bgColor={bgtext} />} />
        <Route exact path="/Contact" component={()=><Contact bg={bg} bgColor={bgtext}/>} />
        <Route exact path="/new/certificate" component={()=><PostCertificate bgColor={bgtext}/>} />
        <Route exact path="/new/project" component={PostProjects} />
        <Redirect to="/" />     
      </Switch>
      <Footer bg={bg}  bgColor={bgtext} />
    </div>
  );
}
