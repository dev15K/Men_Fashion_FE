import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import memberService from '../Service/MemberService';
import Header from "../Shared/Client/Header/Header";
import Footer from "../Shared/Client/Footer/Footer";
import WOW from 'wowjs';

function About() {
    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default About
