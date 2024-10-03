import {Form, message} from 'antd';
import React, {useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import productService from '../../../Service/ProductService';
import Header from '../../../Shared/Admin/Header/Header';
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar';
import categoryService from "../../../Service/CategoryService";
import $ from "jquery";

async function getListCategory(id) {
    await categoryService.adminListCategory()
        .then((res) => {
            if (res.status === 200) {
                console.log("data", res.data)
                renderData(res.data, id);
            } else {
                console.log(res)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

function renderData(data, id) {
    let html = ``;
    let select = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].categoryId === id) {
            select = 'selected';
        } else {
            select = ''
        }
        html = html + `<option ${select} value="${data[i].categoryId}">${data[i].name}</option>`
    }

    $('#categoryId').empty().append(html);
}

function DetailProduct() {

    const {id} = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const detailProduct = async () => {
        await productService.adminDetailProduct(id)
            .then((res) => {
                console.log("details product", res.data);
                $('#name').val(res.data.name);
                $('#lastPrice').val(res.data.lastPrice);
                $('#price').val(res.data.price);
                $('#quantity').val(res.data.quantity);
                $('#description').val(res.data.description);
                $('#imageProduct').attr('src', res.data.image);
                if (res.data.status === 'ACTIVE') {
                    $('#status').val(0);
                } else {
                    $('#status').val(1);
                }
                getListCategory(res.data.categoryId);
            })
            .catch((err) => {
                console.log(err)
            })
    };

    useEffect(() => {
        detailProduct();
    }, [form, id])

    const onFinish = async (values) => {
        $('#btnSave').prop('disabled', true).text('Đang lưu...');

        let isFeature = false;
        let isHot = false;

        let inputs = $('#formCreate input, #formCreate textarea, #formCreate select');
        for (let i = 0; i < inputs.length; i++) {
            if (!$(inputs[i]).val() && $(inputs[i]).attr('type') !== 'file') {
                let text = $(inputs[i]).prev().text();
                alert(text + ' không được bỏ trống!');
                $('#btnSave').prop('disabled', false).text('Save');
                return
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


        await productService.adminUpdateProduct(id, formData)
            .then((res) => {
                console.log("data", res.data)
                alert("Thay đổi thành công")
                navigate("/admin/products/list")
            })
            .catch((err) => {
                console.log(err)
                message.error("Thay đổi thất bại")
                $('#btnSave').prop('disabled', false).text('Save');
            })
    };

    return (
        <>
            <Header/>
            <Sidebar/>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Chi tiết sản phẩm</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/admin/dashboard">Trang quản trị</Link></li>
                            <li className="breadcrumb-item">Quản lí sản phẩm</li>
                            <li className="breadcrumb-item active">Chi tiết sản phẩm</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Chi tiết sản phẩm</h5>
                                    <Form onFinish={onFinish} id="formCreate">
                                        <div className="form-group">
                                            <label htmlFor="name">Tên sản phẩm</label>
                                            <input type="text" className="form-control" id="name" name="Name"
                                                   required/>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="lastPrice">Giá cũ</label>
                                                <input type="number" className="form-control" id="lastPrice"
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
                                            <label htmlFor="description">Mô tả</label>
                                            <input type="text" className="form-control" id="description"
                                                   name="Description"
                                                   required/>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="file">Hình ảnh</label>
                                                <input type="file" className="form-control" id="file" name="file"/>
                                                <img src="" alt="" id="imageProduct" width="100px" className="mt-3"/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="categoryId">Danh mục</label>
                                                <select id="categoryId" className="form-control" name="CategoryId">

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
                                            Lưu thay đổi
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

export default DetailProduct
