import React from 'react'
import style from './footer.module.css'
import facebook from './icons/facebook.png'
import linkdin from './icons/linkdin.png'
import instagram from './icons/instagram.png'
import youtube from './icons/youtube.png'
import smartPhone from './icons/smartphone.png'
import mail from './icons/mail.png'
import location from './icons/location.png'
import syllabus from './icons/syllabus.png'
import adults from './icons/adultsStories.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const nav = useNavigate()
    return (
        <div>
            <div className={style.socialIcons}>
                <h4 className={style.h4}>Lorem, ipsum</h4>
                <div className={style.row}>
                    <div className={style.iconBox}>
                        <img onClick={() => window.open("")} className={style.icon} src={youtube} alt="youtube" />
                    </div>
                    <div className={style.iconBox}>
                        <img onClick={() => window.open("")} className={style.icon} src={linkdin} alt="linkdin" />
                    </div>
                    <div className={style.iconBox}>
                        <img onClick={() => window.open("")} className={style.icon} src={facebook} alt="facebook" />
                    </div>
                    <div className={style.iconBox}>
                        <img onClick={() => window.open("")} className={style.icon} src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>

            <div className={style.whiteFooter}>
                <div className={style.row + " " + style.center}>
                    <div>
                        <h5 style={{ fontWeight: '800' }} className='m-0 p-0'>lorem lordsa</h5>
                        <div className={'d-flex align-items-center p-0 py-1'} style={{ cursor: 'pointer' }}>
                            <img className='mx-2' src={smartPhone} width={'30px'} alt="smartPhone" />
                            <a className={style.a + ' p-0 m-0'} href="tel:dsadasfa" >+1-432-435-32</a>
                        </div>
                        <div className={'d-flex align-items-center p-0 py-1'} style={{ cursor: 'pointer' }}>
                            <img className='mx-2' src={mail} width={'30px'} alt="mail" />
                            <a className={style.a + ' p-0 m-0'} href="mailto:info@info.com" >info@info.com</a>
                        </div>
                        <div className={'d-flex align-items-center p-0 py-1'} style={{ cursor: 'pointer' }}>
                            <img className='mx-2' src={location} width={'30px'} alt="location" />
                            <a className={style.a + ' p-0 m-0'} target="_blank" href='https://www.google.com/maps/place/los+angeles/data=!4m2!3m1!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4?sa=X&ved=2ahUKEwi3157Tq6L_AhWNRvEDHcb1CDYQ8gF6BAgREAE' >Lorem, ipsum dolor</a>
                        </div>

                    </div>
                    <div>
                        <h5 style={{ fontWeight: '800' }}> Lorem, ipsum.</h5>
                        <div onClick={() => {
                            nav('/syllabus')
                        }} className={'d-flex align-items-center p-0 py-1'} style={{ cursor: 'pointer' }}>
                            <img className='mx-2' src={syllabus} width={'30px'} alt="syllabus" />
                            <p className='p-0 m-0'>Lorem</p>
                        </div>
                        <div onClick={() => {

                            window.scrollTo(0, document.body.scrollHeight - 2250);

                        }} className={'d-flex align-items-center p-0 py-1'} style={{ cursor: 'pointer' }}>
                            <img className='mx-2' src={adults} width={'30px'} alt="adults" />
                            <p className='p-0 m-0'>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.blackOpsBlue}>
                <p>YarinBukai© 2023</p>
            </div>
        </div>
    )
}

export default Footer