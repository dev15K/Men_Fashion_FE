import React, {useEffect, useState} from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import {Button, Form, Table} from 'antd';
import couponService from '../../../Service/CouponService';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

function ListCoupon() {
    const handleDelete = async (id) => {
        setLoading(true)
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            await couponService.adminDeleteCoupon(id)
                .then((res) => {
                    alert(`Xóa thành công!`)
                    getListProperty();
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getListProperty = async () => {
        await couponService.adminListCoupon()
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data.data)
                    setLoading(false)
                } else {
                    alert('Error')
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }


    useEffect(() => {
        getListProperty();
    }, [loading]);

    return (
        <>
            <Header/>
            <Sidebar/>

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Danh sách mã giảm giá</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/admin/dashboard">Trang quản trị</Link></li>
                            <li className="breadcrumb-item">Giá trị thuộc tính</li>
                            <li className="breadcrumb-item active">Danh sách mã giảm giá</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <div className="row">

                </div>
            </main>
        </>
    )
}

export default ListCoupon
