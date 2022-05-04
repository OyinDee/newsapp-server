import React from 'react'
import Nav from '../components/Nav'
import AfterNav from '../components/AfterNav'
import WhatWedo from '../components/WhatWedo'
import Signup from '../components/Signup'
import All from '../components/All'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'


export default function Home() {
    return (
        <>
        <Nav/>
        <AfterNav/>
        <WhatWedo/>
        <Signup/>  
        <All/>      
        <Feedback/>
        <Footer/>
        </>
    )
}
