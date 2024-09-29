import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    //
    LIST_CATEGORY: "/api/categories/list",
    LIST_PRODUCT_CATEGORY: "/api/categories/list-products",
    DETAIL_CATEGORY: "/api/categories/detail/",
    //
    ADMIN_LIST_CATEGORY: "/admin/api/categories/list",
    ADMIN_LIST_STATUS_CATEGORY: "/admin/api/categories/list/",
    ADMIN_DETAIL_CATEGORY: "/admin/api/categories/detail/",
    ADMIN_CREATE_CATEGORY: "/admin/api/categories",
    ADMIN_UPDATE_CATEGORY: "/admin/api/categories/",
    ADMIN_DELETE_CATEGORY: "/admin/api/categories/",
}
class CategoryService {
    //
    listCategory = () => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_CATEGORY);
    }

    listProductCategory = () => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_PRODUCT_CATEGORY);
    }

    detailCategory = (id) => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_CATEGORY + id);
    }

    //
    adminListCategory = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_CATEGORY, config);
    }

    adminDetailCategory = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_CATEGORY + id, config);
    }

    adminListStatusCategory = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_STATUS_CATEGORY + data, config);
    }

    adminCreateCategory = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_CREATE_CATEGORY, data, config);
    }

    adminUpdateCategory = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_CATEGORY + id, data, config);
    }

    adminDeleteCategory = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_CATEGORY + id, config);
    }
}
const categoryService = new CategoryService();
export default categoryService;