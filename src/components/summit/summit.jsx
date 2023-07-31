import React from "react";
import summit from '../../images/summit.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import aspens from '../../images/aspens.jpg';
import lake from '../../images/lake.jpg';
import peak from '../../images/peak.jpg';
import trucks from '../../images/trucks.jpg';
import toad from '../../images/toad.jpg';
import blue from '../../images/blue.jpg';

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
        <p className='summit__content-container__body'>Engineer Mountain is a distinctive, high 12er rising to the southwest of the historic mining town of Silverton, Colorado. The lower of two summits named "Engineer Mountain" in Colorado, the bulking mass of Engineer Mountain is visible from various points along US Hwy 550. This summit has nearly 1,500 of vertical prominence, with the visual prominence to match!</p>
      </div>
      <div className="summit__swiper-container">
        <Swiper
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide><img className='swiper-img' src={lake} /></SwiperSlide>
          <SwiperSlide><img className='swiper-img' src={aspens} /></SwiperSlide>
          <SwiperSlide><img className='swiper-img' src={peak} /></SwiperSlide>
          <SwiperSlide><img className='swiper-img' src={toad} /></SwiperSlide>
          <SwiperSlide><img className='swiper-img' src={blue} /></SwiperSlide>
          <SwiperSlide><img className='swiper-img' src={trucks} /></SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}

export default Summit;