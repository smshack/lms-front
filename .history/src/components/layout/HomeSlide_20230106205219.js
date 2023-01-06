import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const HomeSlide = () => {

  return (
    <div className='main-slide'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><img src="https://cdn.inflearn.com/public/main_sliders/2bb11b09-e564-4191-ab4a-c4032d429136/%5B%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5D%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A6%E1%84%87%E1%85%A6%E1%86%AF_521.webp"></img></SwiperSlide>
        <SwiperSlide><img src="https://cdn.inflearn.com/public/main_sliders/dd5c29ab-6be1-4bc2-b347-29e0c9388e99/%5B%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3%5D%E1%84%82%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB%E1%84%8E%E1%85%A9%E1%84%87%E1%85%A9%E1%84%83%E1%85%A12_main_521.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://cdn.inflearn.com/public/main_sliders/fdfd9381-cce4-42ae-a051-ef86bae2feb3/%5B%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5D3%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB_521.webp"></img></SwiperSlide>
        <SwiperSlide><img src="https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif"></img></SwiperSlide>
        </Swiper>
    </div>
    
  )
}

export default HomeSlide