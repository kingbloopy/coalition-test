import './App.scss';
import './reset.css';
import React from "react";
import Mtns from './components/mtns/mtns';
import Summit from './components/summit/summit';
import Camp from './components/camp/camp';
import Tree from './components/tree';
import logo from './images/logo.png';
import Nav from './components/nav/nav';
import Sidebar from './components/nav/sidebar';

function App() {

  let className = "inverted";
  let scrollTrigger = 60;

  window.onscroll = () => {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };


  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"}/>
      <header>
        <a className='logo-container' href='/'>
          <img className='logo' src={logo} />
          <div className='logo-container__title-container'>
            <h4>San Juan</h4>
            <h5>Mountains</h5>
          </div>
        </a>
        <Nav/>
      </header>

      <div className='content'>
        <Mtns/>
        <div className='trees'>
          <Tree/>
          <Tree/>
          <Tree/>
        </div>
        <Summit/>
        <div className='trees'>
          <Tree/>
          <Tree/>
          <Tree/>
        </div>
        <Camp/>
        <div className='trees'>
          <Tree/>
          <Tree/>
          <Tree/>
        </div>
      </div>
      <footer>
        <a className='logo-container' href='/'>
          <img className='logo' src={logo} />
          <div className='logo-container__title-container'>
            <h4>San Juan</h4>
            <h5>Mountains</h5>
          </div>
        </a>
        <span className='copyright'>Copyright 2023. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
