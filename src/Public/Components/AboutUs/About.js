import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import memberService from '../Service/MemberService';
import Header from "../Shared/Client/Header/Header";
import Footer from "../Shared/Client/Footer/Footer";
import WOW from 'wowjs';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'

const elIcon = (<>
    <FontAwesomeIcon icon={faCirclePlay}/>
</>)

function About() {
    return (<div className="site-wrap">
        <Header/>
        <div className="bg-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-0"><a href="/">Trang chủ</a> <span
                        className="mx-2 mb-0">/</span> <strong className="text-black">Về chúng tôi</strong></div>
                </div>
            </div>
        </div>

        <div className="site-section border-bottom">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="block-16">
                            <figure>
                                <img src="/assets/clients/images/blog_1.jpg" alt="Image placeholder"
                                     className="img-fluid rounded"/>
                                <a href="https://vimeo.com/channels/staffpicks/93951774"
                                   className="play-button popup-vimeo d-flex align-items-center justify-content-center">
                                    {elIcon}
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="site-section-heading pt-3 mb-4">
                            <h2 className="text-black">Men Fashion - Tôn vinh phong cách đàn ông</h2>
                        </div>
                        <p>Men Fashion là nơi hội tụ những xu hướng thời trang nam mới nhất, từ trang phục công sở
                            thanh lịch đến phong cách đường phố cá tính. Chúng tôi cam kết mang đến cho bạn những
                            sản phẩm chất lượng, giúp bạn tự tin thể hiện phong cách riêng biệt.</p>

                        <p>Với Men Fashion, thời trang không chỉ là phong cách mà còn là tuyên ngôn cá nhân. Tại
                            đây, chúng tôi cung cấp các bộ sưu tập đa dạng, phù hợp với mọi phong cách từ cổ điển
                            đến hiện đại, đáp ứng mọi nhu cầu thời trang của phái mạnh.</p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-5">


                        <div className="site-section-heading pt-3 mb-4">
                            <h2 className="text-black">Men Fashion - Đẳng cấp của sự lịch lãm</h2>
                        </div>
                        <p>
                            Men Fashion là điểm đến lý tưởng cho những ai muốn làm mới phong cách bản thân. Với bộ sưu
                            tập đa dạng và chất lượng cao, chúng tôi mong muốn giúp bạn tự tin, lịch lãm trong mọi
                            khoảnh khắc.
                        </p>
                        <p>
                            Bước vào thế giới thời trang của Men Fashion, bạn sẽ tìm thấy những trang phục được thiết kế
                            tinh xảo, giúp bạn tỏa sáng trong mọi hoàn cảnh. Phong cách của chúng tôi giúp bạn xây dựng
                            một hình ảnh sang trọng và đầy tự tin.
                        </p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <div className="block-16">
                            <figure>
                                <img src="/assets/clients/images/blog_1.jpg" alt="Image placeholder"
                                     className="img-fluid rounded"/>
                                <a href="https://vimeo.com/channels/staffpicks/93951774"
                                   className="play-button popup-vimeo d-flex align-items-center justify-content-center">
                                    {elIcon}
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-section border-bottom">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>The Team</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">

                        <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                <img src="/assets/clients/images/person_1.jpg" alt="Image placeholder"
                                         className="mb-4"/>
                                    <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                                    <p className="block-38-subheading">CEO/Co-Founder</p>
                                </div>
                                <div className="block-38-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima
                                        nihil sit distinctio recusandae doloribus ut fugit officia voluptate
                                        soluta. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                    <img src="/assets/clients/images/person_2.jpg" alt="Image placeholder"
                                         className="mb-4"/>
                                    <h3 className="block-38-heading h4">Jennifer Greive</h3>
                                    <p className="block-38-subheading">Co-Founder</p>
                                </div>
                                <div className="block-38-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima
                                        nihil sit distinctio recusandae doloribus ut fugit officia voluptate
                                        soluta. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="block-38 text-center">
                            <div className="block-38-img">
                            <div className="block-38-header">
                                    <img src="/assets/clients/images/person_3.jpg" alt="Image placeholder"
                                         className="mb-4"/>
                                    <h3 className="block-38-heading h4">Patrick Marx</h3>
                                    <p className="block-38-subheading">Marketing</p>
                                </div>
                                <div className="block-38-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima
                                        nihil sit distinctio recusandae doloribus ut fugit officia voluptate
                                        soluta. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="block-38 text-center">
                            <div className="block-38-img">
                                <div className="block-38-header">
                                    <img src="/assets/clients/images/person_4.jpg" alt="Image placeholder"
                                         className="mb-4"/>
                                    <h3 className="block-38-heading h4">Mike Coolbert</h3>
                                    <p className="block-38-subheading">Sales Manager</p>
                                </div>
                                <div className="block-38-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima
                                        nihil sit distinctio recusandae doloribus ut fugit officia voluptate
                                        soluta. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="site-section site-section-sm site-blocks-1 border-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <span className="icon-truck"></span>
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Free Shipping</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                                Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <span className="icon-refresh2"></span>
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Free Returns</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                                Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <span className="icon-help"></span>
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Customer Support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                                Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default About
