import './App.scss';
import './reset.css';
import mtns from './images/mtns.jpg';
import summit from './images/summit.jpg';
import camp from './images/camp.jpg';
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

      <div className='section' id="mtns">
        <img className='section__background-pic' src={mtns} />
        <div className='mtns__title-container'>
          <h1>San Juan</h1>
          <h2>Mountains</h2>
        </div>
      </div>

      <div className='section' id='summit'>
        <img className='section__background-pic' src={summit} />
      </div>

      <div className='section' id='camp'>
        <img className='section__background-pic' src={camp} />
      </div>
    </div>
  );
}

export default App;
