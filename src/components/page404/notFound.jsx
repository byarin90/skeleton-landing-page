import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './notFound.module.css'

const NotFound = () => {
    const nav = useNavigate()
  return (
    <div className={style.bigBox} onClick={()=>nav('/')} style={{cursor:'pointer'}}>
    <header className="top-header">
  </header>
  
  <div>
    <div className={style.starsec}></div>
    <div className={style.starthird}></div>
    <div className={style.starfourth}></div>
    <div className={style.starfifth}></div>
  </div>
  
  
  <div className={style.lamp__wrap}>
    <div className={style.lamp}>
      <div className={style.cable}></div>
      <div className={style.cover}></div>
      <div className={style.inCover}>
        <div className={style.bulb}></div>
      </div>
      <div className={style.light}></div>
    </div>
  </div>
  <section className={style.error}>
    <div className={style.errorContent}>
      <div className={style.errorMessage+" "+ style.message}>
        <h1 className={style.messageTitle}>Page Not Found</h1>
        <p className={style.messageText}>We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
      </div>
      <div className={style.error__nav + " "+ style.eNav}>
        <button  className={"btn btn-light"}></button>
      </div>
    </div>
  
  </section>
  
   </div>
  )
}

export default NotFound