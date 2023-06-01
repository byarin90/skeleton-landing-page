import React from 'react'
import style from './sec2.module.css'
import personIcon from './person.png'
import computerIcon from './computer.png'
import keyBoardIcon from './keyboard.png'
import clockIcon from './clock.png'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

const Sec2 = () => {
const nav = useNavigate()
    return (
        <div dir='rtl' className={style.box}>
               <div className={style.btnBox}>
                    <Button onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight - 1300);
                    }} variant='contained' className={style.syllabusBtn}> Lorem ipsum dolor </Button>
                </div>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={computerIcon} alt="computerIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem ipsum</h1>
                        <p className={style.extraBold}>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, expedita</p>
                        <p >•  <strong className={style.extraBold}>Lorem ipsum</strong> Lorem ipsum dolor sit </p>
                        <p>•  <strong className={style.extraBold}>dolor sit amet</strong> Lorem ipsum dolor sit amet consectetur</p>
                        <p>•  <strong className={style.extraBold}>sitlmet</strong> Lorem ipsum dolor sit amet consectetur</p>
                        <p >•  <strong className={style.extraBold}>adipisicing</strong> adipisicing elit. Ratione, expedita consectetur.</p>

                        <p >• <strong className={style.extraBold} >Lorem, ipsum dolor </strong>  Lorem ipsum dolor sit amet. </p>
                        <p >•  <strong className={style.extraBold}>Lorem, ipsum</strong> Lorem ipsum dolor sit amet consectetur.</p>
                        <p >•  <strong className={style.extraBold}>Lorem, ipsum dolor.</strong> Lorem ipsum dolor sit.</p>

                    </div>

                </div>
                <div className={style.row}>
                    <div className={style.icon}>
                        <img src={personIcon} alt="personIcon" />
                    </div>
                    <div>
                        <h1 className={style.extraBold} >Lorem ipsum dolor sit?</h1>
                        <p>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eum unde omnis, fugit illo, excepturi facilis cumque distinctio adipisci quidem doloribus obcaecati ullam perspiciatis laudantium! Facere excepturi rem reiciendis ut eaque unde nam recusandae veniam?</p>
                        <p className={style.bold}>• Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis libero enim sequi quo esse obcaecati rerum temporibus! Consectetur, non id! </p>

                    </div>
                </div>



                <div className={style.btnBox}>
                    <Button onClick={()=>nav('/syllabus')} variant='contained' className={style.syllabusBtn}> Lorem ipsum dolor sit
                    </Button>
                </div>

                <div className={style.rowIcons}>
                    <div className={style.boxIcon}>
                        <div >
                            <h4 className={style.extraBold} >Lorem, ipsum</h4>
                            <p>• Lorem, ipsum dolor.</p>
                            <p>• Lorem, ipsum.</p>

                        </div>
                        <div className={style.iconButtom}>
                            <img src={keyBoardIcon} alt="keyBoardIcon" />
                        </div>
                    </div>
                    <div className={style.boxIcon}>
                        <div >
                            <h4 className={style.extraBold} >Lorem, ipsum.</h4>
                            <p>Lorem ipsum dolor sit. <br className={style.brNone} />  09:00-15:00</p>
                        </div>
                        <div className={style.iconButtom}>
                            <img src={clockIcon} alt="clockIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec2