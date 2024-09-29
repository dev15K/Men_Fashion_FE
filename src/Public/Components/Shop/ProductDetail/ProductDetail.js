import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Form, message} from 'antd';
import cartService from '../../Service/CartService';
import Header from "../../Shared/Client/Header/Header";
import Footer from "../../Shared/Client/Footer/Footer";
import productService from "../../Service/ProductService";
import feedbackService from "../../Service/FeedbackService";
import productFavourite from "../../Service/ProductFavouriteService";
import $ from "jquery";

function ProductDetail() {
    return (
        <div className="site-wrap">
            <Header/>

            <Footer/>
        </div>
    )
}

export default ProductDetail
