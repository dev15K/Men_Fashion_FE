import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import productFavouriteService from '../../Service/ProductFavouriteService';
import {Link} from 'react-router-dom';
import $ from "jquery";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

function ListProductFavourite() {
    let userId = sessionStorage.getItem('id');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getListProduct = async () => {
        await productFavouriteService.listProductFavourite(userId)
            .then((res) => {
                if (res.status === 200) {
                    console.log("data", res.data)
                    setData(res.data)
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }

    useEffect(() => {
        getListProduct();
    }, []);

    return (
        <div>
            <Header/>
            <Sidebar/>

            <main id="main" className="main" style={{backgroundColor: "#f6f9ff"}}>
                <div className="pagetitle">
                    <h1>Sản phẩm yêu thích</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/profile">Người dùng</Link></li>
                            <li className="breadcrumb-item">Sản phẩm yêu thích</li>
                            <li className="breadcrumb-item active">Sản phẩm yêu thích</li>
                        </ol>
                    </nav>
                </div>

                <div className="row">
                    {data.map((prod, index) => (
                        <div className="item col-md-3">
                            <div className="block-4 text-center">
                                <figure className="block-4-image">
                                    <img src={prod.product.image} alt="Image placeholder"
                                         className="img-fluid"/>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><a
                                        href={'/products/' + prod.product.id}>{prod.product.name}</a>
                                    </h3>
                                    <p className="mb-0 text-truncate">{prod.product.description}</p>
                                    <p className="text-primary font-weight-bold">{prod.product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default ListProductFavourite
