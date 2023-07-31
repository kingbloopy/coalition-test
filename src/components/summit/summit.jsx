import React from "react";
import summit from '../../images/summit.jpg';

const Summit = () => {
  return (
    <div className='section summit' id='summit'>
      <div className='summit__mobile-title'>
        <h1>01.</h1>
        <h2>Summit</h2>
      </div>
      <img className='section__background-pic' src={summit} />
      <div className='summit__content-container'>
        <div className='summit__content-container__title'>
          <h1>01.</h1>
          <h2>Summit</h2>
        </div>
        <p className='summit__content-container__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default Summit;