import React, {useEffect, useState} from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import {Button, Form, Input, message} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import productService from '../../../Service/ProductService';
import categoryService from '../../../Service/CategoryService';
import $ from 'jquery';
import tinymce from 'tinymce/tinymce';

function CreateProduct() {
    const navigate = useNavigate();
    const [categories, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let isFeature = false;
    let isHot = false;

    const getListCategory = async () => {
        await categoryService.adminListCategory()
            .then((res) => {
                if (res.status === 200) {
                    console.log("list category", res.data)
                    setData(res.data.data)
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
    }

    const onFinish = async () => {
        setLoading(true)
        $('#btnCreate').prop('disabled', true).text('Đang tạo mới...');

        let inputs = $('#formCreate input, #formCreate textarea, #formCreate select');
        for (let i = 0; i < inputs.length; i++) {
            if (!$(inputs[i]).val()) {
                let text = $(inputs[i]).prev().text();
                alert(text + ' không được bỏ trống!');
                $('#btnCreate').prop('disabled', false).text('Tạo mới');
                setLoading(false);
                return;
            }
        }
        if ($('#isFeature').is(":checked")) {
            isFeature = true;
        }

        if ($('#isHot').is(":checked")) {
            isHot = true;
        }

        const formData = new FormData($('#formCreate')[0]);

        formData.append('isFeature', isFeature);
        formData.append('isHot', isHot);

        await productService.adminCreateProduct(formData)
            .then((res) => {
                setLoading(false)
                message.success("Tạo mới sản phẩm thành công")
                navigate("/admin/products/list")
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
                $('#btnCreate').prop('disabled', false).text('Tạo mới');
            })
    };

    useEffect(() => {
        getListCategory();
    }, [loading]);

    return (
        <>
            <Header/>
            <Sidebar/>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Tạo mới sản phẩm</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/admin/dashboard">Trang quản trị</Link></li>
                            <li className="breadcrumb-item">Quản lí sản phẩm</li>
                            <li className="breadcrumb-item active">Tạo mới sản phẩm</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tạo mới sản phẩm</h5>
                                    <Form onFinish={onFinish} id="formCreate">
                                        <div className="form-group">
                                            <label htmlFor="product_name">Tên sản phẩm</label>
                                            <input type="text" className="form-control" id="product_name" name="Name"
                                                   required/>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="last_price">Giá cũ</label>
                                                <input type="number" className="form-control" id="last_price"
                                                       name="LastPrice" required/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="price">Giá mới</label>
                                                <input type="number" className="form-control" id="price" name="Price"
                                                       required/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="quantity">Số lượng</label>
                                                <input type="number" className="form-control" id="quantity"
                                                       name="quantity"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="short_description">Mô tả ngắn</label>
                                            <textarea className="form-control tinymce-editor" name="short_description"
                                                      id="short_description"
                                                      rows="10"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Mô tả</label>
                                            <textarea className="form-control tinymce-editor" name="description"
                                                      id="description"
                                                      rows="10"></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="file">Hình ảnh</label>
                                                <input type="file" className="form-control" id="file" name="file"
                                                       required/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="categoryId">Danh mục</label>
                                                <select id="categoryId" className="form-control" name="CategoryId">
                                                    <option value="">Chọn danh mục</option>
                                                    {
                                                        categories.map((category) => (
                                                            <option value={category.id}>{category.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="status">Trạng thái</label>
                                                <select id="status" className="form-control" name="Status">
                                                    <option value="0">ACTIVE</option>
                                                    <option value="1">INACTIVE</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" id="btnCreate" className="btn btn-primary mt-3">
                                            Tạo mới
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CreateProduct
