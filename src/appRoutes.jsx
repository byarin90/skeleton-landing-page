import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home';
import NotFound from './components/page404/notFound';
import { Sec6 } from './components/sections/sec6/sec6';
import Syllabus from './components/syllabus/syllabus';
import Layout from './layout/layout';


export default function AppRoutes(props) {


    return (
        <Router>
            <Routes>

                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/syllabus' element={<Syllabus />} />
                    
                </Route>
                <Route path='/sec6' element={<Sec6 />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    )
}
