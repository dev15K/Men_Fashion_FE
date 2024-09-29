import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {message} from 'antd';
import orderService from '../Service/OrderService';
import Header from "../Shared/Client/Header/Header";
import Footer from "../Shared/Client/Footer/Footer";
import {Form, Input} from 'antd';
import cartService from "../Service/CartService";
import $ from "jquery";
import accountService from "../Service/AccountService";

function Checkout() {
    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default Checkout
