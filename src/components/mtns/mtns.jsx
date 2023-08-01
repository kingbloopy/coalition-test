import React from "react";
import mtns from '../../images/mtns.jpg';
import './mtns.scss';

const Mtns = () => {
  return (
    <div className='section mtns' id="mtns">
      <img alt="mountains" className='section__background-pic' src={mtns} />
    </div>
  );
}

export default Mtns;