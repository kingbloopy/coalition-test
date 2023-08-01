import React, { useState } from "react";
import './nav.scss';

const Nav = () => {
  return (
    <ul className='nav'>
      <a className='nav__link' href='#summit'>01. Summit</a>
      <a className='nav__link' href='#camp'>02. Camp</a>
    </ul>
  );
}

export default Nav;