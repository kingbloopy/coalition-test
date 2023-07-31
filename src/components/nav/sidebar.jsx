import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  return (
    // Pass on our props
    <Menu {...props}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      >
      <a onClick={closeSideBar} className='nav__link' href='#summit'>01. Summit</a>
      <a onClick={closeSideBar} className='nav__link' href='#camp'>02. Camp</a>
    </Menu>
  );
};
