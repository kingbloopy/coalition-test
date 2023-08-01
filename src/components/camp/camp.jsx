import React, { useState } from "react";
import camp from '../../images/camp.jpg';
import './camp.scss';

const Camp = () => {
  const [tellurideActive, setTellurideActive] = useState(true);
  const [oureyActive, setOureyActive] = useState(false);

  return (
    <div className='section camp' id='camp'>
      <div className='camp__content-container'>
        <div className='camp__content-container__title'>
          <h1>02.</h1>
          <h2>Camp</h2>
        </div>
        <p className='camp__content-container__body'>There are many camping opportunities on the San Juan National Forest. We offer developed campgrounds and more isolated dispersed camping areas. With some planning you can find a perfect spot for you and your family. While sewer, water hook-ups and showers are not available, most campgrounds have drinking water, picnic tables, fire rings and vault toilets. </p>
      </div>
      <div className="camp__interactive">
        <img alt='camping' className='section__background-pic' src={camp} />
        <div className="camp__tabs">
          <div className={tellurideActive ? "camp__tabs__tab telluride active" : "camp__tabs__tab telluride"} id="telluride-tab" onClick={() => {
            setTellurideActive(true);
            setOureyActive(false);
          }}>
            Telluride
          </div>
          <div className={oureyActive ? "camp__tabs__tab ourey active" : "camp__tabs__tab ourey"} id="ourey-tab" onClick={() => {
            setTellurideActive(false);
            setOureyActive(true);
          }}>
            Ourey
          </div>
        </div>
        <div className="camp__schedule-container">
          <div className={tellurideActive ? "camp__telluride active" : "camp__telluride"} id="telluride">
            <h6 className="camp__telluride__heading">Telluride Availability</h6>
            <ul className="camp__telluride__grid">
              <li>1 Aug '23</li>
              <li className="status">Open</li>
              <li>2 Aug '23</li>
              <li className="status">Open</li>
              <li>3 Aug '23</li>
              <li className="status full">Full</li>
              <li>4 Aug '23</li>
              <li className="status">Open</li>
            </ul>
          </div>
          <div className={oureyActive ? "camp__ourey active" : "camp__ourey"} id="ourey">
            <h6 className="camp__ourey__heading">Ourey Availability</h6>
            <ul className="camp__ourey__grid">
              <li>1 Aug '23</li>
              <li className="status full">Full</li>
              <li>2 Aug '23</li>
              <li className="status">Open</li>
              <li>3 Aug '23</li>
              <li className="status full">Full</li>
              <li>4 Aug '23</li>
              <li className="status full">Open</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camp;