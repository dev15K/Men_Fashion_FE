import React, {useEffect} from 'react';
import Header from "../Shared/Client/Header/Header";
import Footer from "../Shared/Client/Footer/Footer";
import {useLocation} from 'react-router-dom';
import $ from 'jquery';
import orderService from "../Service/OrderService";
import {message} from "antd";

function ThanksYou() {
    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default ThanksYou
