import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className='nav__link' href='#summit'>01. Summit</a>
      <a className='nav__link' href='#camp'>02. Camp</a>
    </Menu>
  );
};
