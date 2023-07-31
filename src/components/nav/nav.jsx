import React, { useState } from "react";
import Hamburger from 'hamburger-react';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ul className='nav'>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <a className='nav__link' href='#summit'>01. Summit</a>
      <a className='nav__link' href='#camp'>02. Camp</a>
    </ul>
  );
}

export default Nav;