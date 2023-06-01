import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './sec6.module.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import axios from 'axios';
import { doApiGet } from '../../../services/apiService';
export const Sec6 = () => {
    const regEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
 

    const onSub = async (bodyData) => {
                toast.success(`${bodyData.fullName} we will contact you soon`)
    }
    return (
        <div className={style.sec6}>
            <div className={style.container}>
                <h4 className={style.h4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, hic?</h4>

                <form onSubmit={handleSubmit(onSub)} >
                    <div className={style.row}>

                        <div className={style.inputBox}>
                        <input   {...register("fullName", { required: true })} placeholder='name' name="fullName" type="text" className={style.input +" " + style.inputLtr} />

                            {errors.fullName && <span className={style.error}>Lorem, ipsum.</span>}
                        </div>
                        <div className={style.inputBox}>
                        <input  {...register("phone", { required: true })} name="phone" placeholder='phone' type="text" className={style.input + " " + style.inputLtr} />
                            {errors.phone && <span className={style.error}>Lorem, ipsum.</span>}
                        </div>
                        <div className={style.inputBox}>
                        <input  {...register("email", { required: true, pattern: regEmail })} name="email" dir='ltr' placeholder='email' type="email" className={style.input + " " + style.inputLtr} />

                            {errors.email && <span className={style.error}>Lorem, ipsum.</span>}
                        </div>
                    </div>

                    <div className={style.btnBox}>
                        <Button type='submit' variant='contained'   className={style.syllabusBtn}>lorem ipsum</Button>
                    </div>
                </form>
            </div>
            

        </div>
    )
}
