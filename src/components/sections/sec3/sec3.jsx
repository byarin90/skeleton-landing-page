import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from './sec3.module.css'
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./gradientSvg";

const Sec3 = () => {
    const [percentage, setPercentage] = useState(0)
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        const obs = setTimeout(() => {
            const observer = new IntersectionObserver((enteries) => {
                const entery = enteries[0]
                if (entery.isIntersecting) {
                    setFlag(true)
                }

            })

            observer.observe(myRef.current)
        }, 1500)



        if (flag)
            if (percentage < 95) {
                setTimeout(() => {
                    setPercentage(percentage + 1)
                }, 40);
            }


    }, [percentage, flag])

    const myRef = useRef()
    const idCSS = "hello";


    return (
        <div ref={myRef} className={`${style.sec3}`}>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.child} dir='rtl'>
                        <h3 className={style.h3} style={{ fontWeight: '600' }}> Lorem ipsum dolor sit amet </h3>
                        <p className={style.p}>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis iste quod. Dolorem dicta impedit voluptas numquam officiis commodi? Omnis.</p>

                        <p className={style.p}>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati reprehenderit ab libero quia possimus nihil delectus minima est nostrum?</p>
                    </div>
                    <div className={style.child}>
                        <div className={style.circularProgressbar}>

                            <GradientSVG />


                            <CircularProgressbarWithChildren
                                strokeWidth={8}
                                className={style.circleBg}
                                value={percentage}
                                styles={{
                                    path: { stroke: `url(#${idCSS})`, height: "100%" },
                                    trail: {
                                        stroke: "#151641"
                                    }
                                }}
                            >
                                <strong className={style.circlePercentage} style={{ fontSize: '2em', paddingLeft: '10px', color: 'white' }}>{percentage}%</strong>
                                <p className={style.circleText}>Lorem ipsum</p>

                            </CircularProgressbarWithChildren>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sec3