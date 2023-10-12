import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';
import Slider1 from './Slider1';
import Slider2 from './Slider2';

export default function Hero() {
  return (
    <Box sx={{
      '.swiper-button-next:after': {
        display: { xs: 'none', md: 'block' }
      },
      '.swiper-button-prev:after': {
        display: { xs: 'none', md: 'block' }
      },
    }}>
      <Swiper
        style={{ height: '100%' }}
        // spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide> <Slider1 /> </SwiperSlide>
        <SwiperSlide><Slider2 /> </SwiperSlide>
      </Swiper>
    </Box>
  );
}

