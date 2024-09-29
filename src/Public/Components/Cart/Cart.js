import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {message} from 'antd';
import contactService from '../Service/ContactService';
import Header from "../Shared/Client/Header/Header";
import Footer from "../Shared/Client/Footer/Footer";
import $ from "jquery";
import cartService from "../Service/CartService";

function Cart() {
    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default Cart
