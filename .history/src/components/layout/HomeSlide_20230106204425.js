import React from 'react'
import Slider from "react-slick";
const HomeSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <div className='main-slide'>
    <Slider {...settings}>
            <div>
                <img src="https://cdn.inflearn.com/public/main_sliders/fdfd9381-cce4-42ae-a051-ef86bae2feb3/%5B%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5D3%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB_521.webp"></img>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    </div>
    
  )
}

export default HomeSlide