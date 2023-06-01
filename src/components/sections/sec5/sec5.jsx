import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Card } from "@mui/material";
import style from './sec5.module.css'
import pic1 from './stories/1.jpg'
import pic2 from './stories/2.jpg'
import pic3 from './stories/3.jpg'
import pic4 from './stories/4.jpg'
import pic5 from './stories/5.jpg'
import pic6 from './stories/6.jpg'
import pic7 from './stories/7.jpg'
import pic8 from './stories/8.jpg'
import pic9 from './stories/9.jpg'
import prevIcon from './stories/prev.png'
import nextIcon from './stories/next.png'
const Sec5 = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const data = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const [slider, setSlider] = useState(mediaQuery.matches ? 1 : 2);

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 767px)");
        mediaQuery.addEventListener("change", (e) => {
            if (e.matches) setSlider(2);
            else {
                setSlider(1);
            }
        });
    }, [slider]);
    return (
        <div className={style.sec5}>
            <h3 className={style.storiesH}>Lorem ipsum</h3>

            <div className={style.container + " " + style.showMobile}>
                <Swiper
                key={1111}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}

                    slidesPerView={slider}
                    spaceBetween={20}
                    slidesPerGroup={slider}
                    freeMode={true}

                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={item} className=' p-4'>

                            <Card className={style.cardSwiper} elevation={10} sx={{ width: '100%' }}>
                                <div className={"w-100 h-100 " + style.bgStory} style={{ backgroundImage: `url(${item})` }} >

                                </div>
                            </Card>


                        </SwiperSlide>

                    ))}

                </Swiper>



            </div>

            <div className={style.container + " " + style.showDekstop}>
                <img className={style.prevAndNextIcons} ref={navigationPrevRef} src={prevIcon} alt="prevIcon" />
                <Swiper
       

                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        // Both prevEl & nextEl are null at render so this does not work
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        // Delay execution for the refs to be defined
                        setTimeout(() => {
                            // Override prevEl & nextEl now that refs are defined
                            swiper.params.navigation.prevEl = navigationPrevRef.current
                            swiper.params.navigation.nextEl = navigationNextRef.current

                            // Re-init navigation
                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        })
                    }}

                    slidesPerView={3}
                    spaceBetween={16}
                    slidesPerGroup={3}
                    freeMode={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={item} className=' p-4'>

                            <Card className={style.cardSwiper} sx={{ width: '100%' }}>
                                <div className={"w-100 h-100 " + style.bgStory} style={{ backgroundImage: `url(${item})` }} >

                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <img className={style.prevAndNextIcons} ref={navigationNextRef} src={nextIcon} alt="nextIcon" />




            </div>
        </div>
    )
}

export default Sec5