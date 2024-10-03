import React, {useEffect, useState} from 'react'
import Header from '../../../Shared/Admin/Header/Header'
import Sidebar from '../../../Shared/Admin/Sidebar/Sidebar'
import {Button, Form, Input, message} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import productService from '../../../Service/ProductService';
import categoryService from '../../../Service/CategoryService';
import $ from 'jquery';
import tinymce from 'tinymce/tinymce';

/**
 * Component for creating a new product.
 *
 * This component contains a form for creating a new product. The form
 * includes fields for the product name, price, quantity, short description,
 * description, image, category, and status. When the form is submitted, the
 * component sends a request to the server to create a new product with the
 * provided information.
 *
 * If the request is successful, the component shows a success message and
 * navigates to the list of products.
 *
 * If the request fails, the component shows an error message.
 *
 * @return {ReactElement}
 */
function CreateProduct() {
    const navigate = useNavigate();
    const [categories, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let isFeature = false;
    let isHot = false;

    /**
     * Fetches the list of categories from the server and updates the component state
     * accordingly.
     * @function
     * @async
     * @returns {Promise<void>} A Promise that resolves when the data has been fetched and
     * the component state has been updated.
     */
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

    /**
     * Handles the form submission of the create product form.
     *
     * This function retrieves the values of the form fields, creates a new product,
     * and if the API call is successful, it will redirect to the list of products.
     *
     * If the request fails, the component shows an error message.
     *
     * @function
     * @async
     * @returns {Promise<void>} A Promise that resolves when the request has been sent and
     * the component state has been updated.
     */
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
        if ($('#is_feature').is(":checked")) {
            isFeature = true;
        }

        if ($('#is_hot').is(":checked")) {
            isHot = true;
        }

        const formData = new FormData($('#formCreate')[0]);

        formData.append('is_feature', isFeature);
        formData.append('is_hot', isHot);

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

    const generateTable = () => `
        <table class="table table-bordered">
        <colgroup>
            <col width="x"/>
            <col width="8%"/>
            <col width="10%"/>
            <col width="10%"/>
            <col width="8%"/>
            <col width="5%"/>
        </colgroup>
        <thead>
            <tr>
                <th class="align-middle">
                    <div class="d-flex align-items-center gap-4">
                        <p>Thuộc tính</p>
                        <button type="button" class="btn btn-outline-warning btnAddProperty">Thêm</button>
                    </div>
                </th>
                <th>Số lượng</th>
                <th>Giá cũ</th>
                <th>Giá mới</th>
                <th>Hình ảnh</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>
                    <input type="number" class="form-control" name="option_quantity" required/>
                </td>
                <td>
                    <input type="number" class="form-control" name="option_price" min="1" required/>
                </td>
                <td>
                    <input type="number" class="form-control" name="option_sale_price" min="1" required/>
                </td>
                <td>
                    <input type="file" class="form-control" name="option_thumbnail" required/>
                </td>
                <td rowSpan="3" class="text-center align-middle">
                    <button class="btn btn-danger btnDelete" type="button">Xoá</button>
                </td>
            </tr>
            <tr>
                <th colSpan="5">Mô tả</th>
            </tr>
            <tr>
                <td colSpan="5">
                    <textarea name="option_description" class="form-control" rows="5"></textarea>
                </td>
            </tr>
        </tbody>
    </table>`;

    const generatePropertyItem = () => `
                <div class="row attribute_property_item_">
                    <div class="form-group col-md-5">
                        <label for="attribute_item">Thuộc tính</label>
                        <select name="attribute_item" class="form-select">
                            <option value="">-- Chọn thuộc tính --</option>
                        </select>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="property_item">Biến thể</label>
                        <select name="property_item" class="form-select">
                            <option value="">-- Chọn biến thể --</option>
                        </select>
                    </div>
                    <div class="col-md-2 mt-4">
                        <button type="button" onclick="removePropertyItem(this)" class="btn btn-danger">Xoá</button>
                    </div>
                </div>`;

    function addTableOption() {
        $('#render_table_attr').append(generateTable());
    }

    function addProperty(el) {
        $(el).closest('table').find('.list_option').append(generatePropertyItem());
    }

    window.removeTableOption = function(el) {
        $(el).closest('table').remove();
    }

    window.removePropertyItem = function(el) {
        $(el).closest('.attribute_property_item_').remove();
    };

    function setAttrId(el) {
        
    }

    useEffect(() => {
        getListCategory();
    }, [loading]);

    return (<>
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
                                        <div className="form-group col-md-6">
                                            <label htmlFor="file">Hình ảnh</label>
                                            <input type="file" className="form-control" id="file" name="file"
                                                   required/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="gallery">Gallery</label>
                                            <input type="file" className="form-control" id="gallery" name="gallery"
                                                   multiple required/>
                                        </div>
                                    </div>
                                    <div className="row m-1 mt-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="card-title">Thuộc tính sản phẩm</h5>
                                            <button className="btn btn-outline-primary" id="btnAddAttr"
                                                    onClick={addTableOption} type="button">Thêm thuộc tính
                                            </button>
                                        </div>
                                        <div id="render_table_attr">
                                            <table className="table table-bordered tableOption">
                                                <colgroup>
                                                    <col width="x"/>
                                                    <col width="8%"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="8%"/>
                                                    <col width="5%"/>
                                                </colgroup>
                                                <thead>
                                                <tr>
                                                    <th className="align-middle">
                                                        <div className="d-flex align-items-center gap-4">
                                                            <p>Thuộc tính</p>
                                                            <button type="button"
                                                                    onClick={event => addProperty(event.target)}
                                                                    className="btn btn-outline-warning btnAddProperty">
                                                                Thêm
                                                            </button>
                                                        </div>
                                                    </th>
                                                    <th>Số lượng</th>
                                                    <th>Giá cũ</th>
                                                    <th>Giá mới</th>
                                                    <th>Hình ảnh</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="list_option">
                                                            <div className="row">
                                                                <div className="form-group col-md-5">
                                                                    <label htmlFor="attribute_item">Thuộc
                                                                        tính</label>
                                                                    <select name="attribute_item"
                                                                            id="attribute_item"
                                                                            onChange={event => setAttrId(event.target.value)}
                                                                            className="form-select">
                                                                        <option value="">-- Chọn thuộc tính --
                                                                        </option>
                                                                    </select>
                                                                </div>

                                                                <div className="form-group col-md-5">
                                                                    <label htmlFor="property_item">Biến thể</label>
                                                                    <select name="property_item" id="property_item"
                                                                            className="form-select">
                                                                        <option value="">-- Chọn biến thể --
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input type="number" className="form-control"
                                                               id="option_quantity"
                                                               name="option_quantity" required/>
                                                    </td>
                                                    <td>
                                                        <input type="number" className="form-control"
                                                               id="option_price"
                                                               name="option_price" min="1" required/>
                                                    </td>
                                                    <td>
                                                        <input type="number" className="form-control"
                                                               id="option_sale_price" min="1"
                                                               name="option_sale_price" required/>
                                                    </td>
                                                    <td>
                                                        <input type="file" className="form-control"
                                                               id="option_thumbnail" min="1"
                                                               name="option_thumbnail" required/>
                                                    </td>
                                                    <td rowSpan="3" className="text-center align-middle">
                                                        <button className="btn btn-danger btnDelete" type="button">
                                                            Xoá
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th colSpan="5">Mô tả</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="5">
                                                        <textarea name="option_description" id="option_description"
                                                                  className="form-control" rows="5"></textarea>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="categoryId">Danh mục</label>
                                            <select id="categoryId" className="form-select" name="CategoryId">
                                                <option value="">Chọn danh mục</option>
                                                {categories.map((category) => (
                                                    <option value={category.id}>{category.name}</option>))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="status">Trạng thái</label>
                                            <select id="status" className="form-select" name="Status">
                                                <option value="ĐANG HOẠT ĐỘNG">ĐANG HOẠT ĐỘNG</option>
                                                <option value="KHÔNG HOẠT ĐỘNG">KHÔNG HOẠT ĐỘNG</option>
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
    </>)
}

export default CreateProduct
