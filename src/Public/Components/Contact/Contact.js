import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, message} from 'antd';
import contactService from '../Service/ContactService';
import Header from "../Shared/Client/Header/Header";
import Footer from "../Shared/Client/Footer/Footer";
import $ from 'jquery';

function Contact() {

    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>)
}

export default Contact
