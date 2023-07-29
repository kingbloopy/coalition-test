import './App.scss';
import './reset.css';
import homepic from './images/homepage.jpg';
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
        <a href='/'><img className='logo' src={logo} /></a>
        <ul className='nav'>
          <a className='nav__link' href='#history'>01. History</a>
          <a className='nav__link' href='#climb'>02. Climb</a>
        </ul>
      </header>

      <div className='section'>
        <img className='section__background-pic' src={homepic} />
      </div>

      <div className='section'>
        <img className='section__background-pic' src={homepic} />
      </div>
    </div>
  );
}

export default App;
