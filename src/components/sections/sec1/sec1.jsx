import React from 'react'
import style from './sec1.module.css'
import Logo from './blackOpsLogo/Artboard 28@4x.png'
const Sec1 = () => {
  return (
    <div>
      <div dir='rtl' className={style.box}>
        <div className=''>
        <img  className={style.imgLogo} src={'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2'} alt="Logo" />
          <h3> Lorem ipsum dolor sit</h3>
          <h1> <span className={style.devOps}>Lorem</span> <br /> <span className={style.engineer}>Ipsum</span> </h1>
        </div>
      </div>

    </div>
  )
}

export default Sec1