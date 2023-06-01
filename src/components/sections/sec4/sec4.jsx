import React from 'react'
import style from './sec4.module.css'
import medalIcon from './medal.png'
import peopleIcon from './people.png'
import rocketIcon from './rocket.png'
import timesIcon from './times.png'
import paymentIcon from './money.png'
import { Button } from '@mui/material'

const Sec4 = () => {
    return (
        <div dir='rtl' className={style.box}>
            <div className={style.container}>
                <div className={style.btnBox}>
                    <Button onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight - 1300);
                    }} variant='contained' className={style.syllabusBtn}>לבדיקת התאמה ופרטים</Button>
                </div>

                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={medalIcon} alt="personIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, tempora. </p>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={rocketIcon} alt="rocketIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={paymentIcon} alt="paymentIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem, ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing  <strong>60%</strong> Lorem ipsum dolor sit.</p>
                    </div>

                </div>
                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={timesIcon} alt="timesIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem ipsum dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugiat</p>
                    </div>

                </div>
                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={peopleIcon} alt="peopleIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem ipsum dolor sit amet consectetur</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam similique velit labore animi ullam!</p>
                    </div>

                </div>


                <div className={style.btnBox}>
                    <Button onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight - 1300);
                    }} variant='contained' className={style.syllabusBtn}> Lorem ipsum dolor sit</Button>
                </div>

            </div>
        </div>

    )
}

export default Sec4