import './App.scss';
import './reset.css';
import Mtns from './components/mtns/mtns';
import Summit from './components/summit/summit';
import Camp from './components/camp/camp';
import Tree from './components/tree';
import logo from './images/logo.png';

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
      <header>
        <a className='logo-container' href='/'>
          <img className='logo' src={logo} />
          <div className='logo-container__title-container'>
            <h4>San Juan</h4>
            <h5>Mountains</h5>
          </div>
        </a>
        <ul className='nav'>
          <a className='nav__link' href='#summit'>01. Summit</a>
          <a className='nav__link' href='#camp'>02. Camp</a>
        </ul>
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
