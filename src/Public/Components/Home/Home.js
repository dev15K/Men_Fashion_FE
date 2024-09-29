import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import Header from '../Shared/Client/Header/Header';
import Footer from '../Shared/Client/Footer/Footer';
import $ from 'jquery';
import productService from "../Service/ProductService";
import categoryService from "../Service/CategoryService";
import marketingService from "../Service/MarketingService";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

window.jQuery = $;
window.$ = $;


function Home() {

    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default Home;
