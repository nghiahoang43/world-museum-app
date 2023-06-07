import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderObjects } from '../../data/objects';
import './Slider.css'

const Slider = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    return (
        <div className="s-container">
            <Swiper
                modules={[Pagination, Navigation]}
                className='mySwiper'
                navigation={true}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    720: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
            >
                {SliderObjects.map((obj, index) => {
                    return (
                        <SwiperSlide 
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="s-left">
                                <div className="name">
                                    <span>{obj.name}</span>
                                    <span>{obj.percentage + "%"}</span>
                                </div>
                                <div className="size">
                                    <span>{obj.size}</span>
                                    <span> items</span>
                                </div>
                            </div>
                            <img 
                                src={obj.img} 
                                alt={obj.name}
                                style={{opacity: hoveredIndex === index ? 0.6 : 0}}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider
