import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Form, message} from 'antd';
import cartService from '../../Service/CartService';
import Header from "../../Shared/Client/Header/Header";
import Footer from "../../Shared/Client/Footer/Footer";
import productService from "../../Service/ProductService";
import feedbackService from "../../Service/FeedbackService";
import $ from "jquery";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

function ProductDetail() {
    return (
        <div className="site-wrap">
            <Header/>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="">Home</a> <span
                            className="mx-2 mb-0">/</span> <strong className="text-black">Tank Top T-Shirt</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/clients/images/cloth_1.jpg" alt="Image" className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-black">Tank Top T-Shirt</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo?
                                Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt
                                doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
                            <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem
                                perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis
                                reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                            <p><strong className="text-primary h4">$50.00</strong></p>
                            <div className="mb-1 d-flex">
                                <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input
                                        type="radio" id="option-sm" name="shop-sizes"/></span> <span
                                    className="d-inline-block text-black">Small</span>
                                </label>
                                <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input
                                        type="radio" id="option-md" name="shop-sizes"/></span> <span
                                    className="d-inline-block text-black">Medium</span>
                                </label>
                                <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input
                                        type="radio" id="option-lg" name="shop-sizes"/></span> <span
                                    className="d-inline-block text-black">Large</span>
                                </label>
                                <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                                    <span className="d-inline-block mr-2"
                                          style={{top: '-2px', position: 'relative'}}><input
                                        type="radio" id="option-xl" name="shop-sizes"/></span> <span
                                    className="d-inline-block text-black"> Extra Large</span>
                                </label>
                            </div>
                            <div className="mb-5">
                                <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary js-btn-minus"
                                                type="button">-</button>
                                    </div>

                                    <input type="text" className="form-control text-center" value="1" placeholder=""
                                           aria-label="Example text with button addon"
                                           aria-describedby="button-addon1"/>

                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary js-btn-plus"
                                                type="button">+</button>
                                    </div>
                                </div>

                            </div>
                            <p><a href="/cart" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section block-3 site-blocks-2 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="block-4 text-center">
                                                <figure className="block-4-image">
                                                    <img src="/assets/clients/images/cloth_1.jpg"
                                                         alt="Image placeholder"
                                                         className="img-fluid"/>
                                                </figure>
                                                <div className="block-4-text p-4">
                                                    <h3><a href="#">Tank Top</a></h3>
                                                    <p className="mb-0">Finding perfect t-shirt</p>
                                                    <p className="text-primary font-weight-bold">$50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="block-4 text-center">
                                                <figure className="block-4-image">
                                                    <img src="/assets/clients/images/shoe_1.jpg" alt="Image placeholder"
                                                         className="img-fluid"/>
                                                </figure>
                                                <div className="block-4-text p-4">
                                                    <h3><a href="#">Corater</a></h3>
                                                    <p className="mb-0">Finding perfect products</p>
                                                    <p className="text-primary font-weight-bold">$50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="block-4 text-center">
                                                <figure className="block-4-image">
                                                    <img src="/assets/clients/images/cloth_2.jpg"
                                                         alt="Image placeholder"
                                                         className="img-fluid"/>
                                                </figure>
                                                <div className="block-4-text p-4">
                                                    <h3><a href="#">Polo Shirt</a></h3>
                                                    <p className="mb-0">Finding perfect products</p>
                                                    <p className="text-primary font-weight-bold">$50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="block-4 text-center">
                                                <figure className="block-4-image">
                                                    <img src="/assets/clients/images/cloth_3.jpg"
                                                         alt="Image placeholder"
                                                         className="img-fluid"/>
                                                </figure>
                                                <div className="block-4-text p-4">
                                                    <h3><a href="#">T-Shirt Mockup</a></h3>
                                                    <p className="mb-0">Finding perfect products</p>
                                                    <p className="text-primary font-weight-bold">$50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="block-4 text-center">
                                                <figure className="block-4-image">
                                                    <img src="/assets/clients/images/shoe_1.jpg" alt="Image placeholder"
                                                         className="img-fluid"/>
                                                </figure>
                                                <div className="block-4-text p-4">
                                                    <h3><a href="#">Corater</a></h3>
                                                    <p className="mb-0">Finding perfect products</p>
                                                    <p className="text-primary font-weight-bold">$50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductDetail
