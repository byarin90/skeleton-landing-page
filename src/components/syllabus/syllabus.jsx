import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sec6 } from '../sections/sec6/sec6'
import style from './syllabus.module.css'

const Syllabus = () => {
  const nav = useNavigate()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })

  }, [])
  const syllabus = [
    {
      title: "Lorem Ipsum Dolor",
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Pellentesque fermentum velit sed",
        "In dignissim lacus varius",
        "Aliquam tincidunt ultricies sem",
        "Quisque facilisis arcu"
      ]
    },
    {
      title: "Sit Amet Consectetur",
      list: [
        "Ut tincidunt purus eget",
        "Etiam sit amet tortor",
        "Morbi aliquet sapien id",
        "Curabitur vel lectus nec",
        "Praesent in sem eget",
        "Aenean in massa at"
      ]
    },
    {
      title: "Adipiscing Elit Vivamus",
      list: [
        "Sed fringilla mauris et",
        "Suspendisse porttitor efficitur nisl",
        "Duis a nulla at",
        "In sed diam lacinia",
        "Aliquam sed fermentum nulla"
      ]
    },
    {
      title: "Fusce Et Ligula",
      list: [
        "Cras dapibus feugiat bibendum",
        "Sed dapibus sem a",
        "Praesent mollis velit in",
        "Ut in magna eu",
        "Quisque non justo in",
        "Sed quis massa in"
      ]
    },
    {
      title: "Mauris Auctor Elit",
      list: [
        "Vivamus eu arcu eget",
        "Ut vitae mauris nec",
        "Aenean aliquam magna in",
        "Pellentesque dapibus neque"
      ]
    },
    {
      title: "Dolor Sit Amet",
      list: [
        "Curabitur aliquet felis a",
        "Praesent condimentum leo eget",
        "Ut vulputate nibh a",
        "Aliquam ut diam eget",
        "Suspendisse ut lorem sed",
        "Aenean eu lacus in"
      ]
    },
  ]
  
  return (
    <div className={style.bg}>
    <div className={style.box}>
           <div style={{ position: 'fixed', zIndex: 99, bottom: '5%', left: 0 }}  >
        <Button onClick={()=> window.scrollTo(0, document.body.scrollHeight-1300) } className={style.btnMoreDetail} sx={{ color: 'white', padding: '5px 10px', borderRadius: '0 25px 25px 0', fontFamily: 'Heebo', fontWeight: '100', fontSize: '13px' }} variant="contained" color="success">
          Lorem ipsum dolor sit.
        </Button>
      </div>
      <div className='d-flex align-items-center flex-column py-4 '>
        <div className={style.underlineGradient + " mb-3"}></div>
        <h1 className={style.bigTitle + ` text-center`}> Lorem ipsum dolor sit</h1>


      </div>
      <div className=" py-4">
        {syllabus.map((item, i) => (

          <div key={i}>
            <h4 className={style.title}>{item?.title}</h4>
            <ul style={{ listStyleType: 'none' }} className={style.ul1}>
              {item?.list.map((item, j) => (
                <li  key={j} className={style.li}>○ {item} </li>
              ))}
               <li  >Lorem ipsum dolor sit </li>
            </ul>
            
          </div>
        ))}
        <p style={{cursor:'pointer'}} className='text-decoration-underline py-3' onClick={() => nav(-1)}>Back</p>
      </div>

    </div>
    <Sec6/>
    </div>
  )
}

export default Syllabus