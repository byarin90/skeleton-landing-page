import style from './sec7.module.css'
import React from 'react'
import pic1 from './BlackOpsPics/1.jpg'
import pic2 from './BlackOpsPics/2.jpg'
import pic3 from './BlackOpsPics/3.jpg'
import pic4 from './BlackOpsPics/4.jpg'
import pic5 from './BlackOpsPics/5.jpg'
import pic6 from './BlackOpsPics/6.jpg'
import pic7 from './BlackOpsPics/7.jpg'
import pic8 from './BlackOpsPics/8.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Card } from '@mui/material'


const Sec7 = () => {
    const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]
    return (
        <div className={style.sec7}>
            <div className={style.desktop}>
            <div className={style.row}>
                <div className={style.img}>
                    <img width={'100%'} src={pic1} alt="pic1" />
                </div>
                <div className={style.img}>
                    <img width={'100%'} src={pic5} alt="pic1" />
                </div>
            </div>

            </div>
            {/* <iframe src={'/sec6'} width={'100%'} height={'304.7px'}></iframe> */}

            <div className={style.container + " " + style.showMobile}>
                <Swiper
               
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}

                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    freeMode={true}

                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {pics.map((item, i) => (
                        <SwiperSlide key={i} className=' p-4'>

                            <Card className={style.cardSwiper} elevation={10} sx={{ width: '100%' }}>
                                <div className={"w-100 h-100 " + style.bgStory} style={{ backgroundImage: `url(${item})` }} >

                                </div>
                            </Card>


                        </SwiperSlide>

                    ))}

                </Swiper>



            </div>
        </div>
    )
}

export default Sec7