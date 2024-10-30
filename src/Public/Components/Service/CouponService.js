import {BASE_URL_SERVER} from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    //
    LIST_COUPON: "/api/coupons/list",
    SEARCH_COUPON: "/api/coupons/search",
    DETAIL_COUPON: "/api/coupons/detail/",
    SAVE_COUPON: "/api/coupons/save/",
    //
    ADMIN_LIST_COUPON: "/api/admin/coupons/list",
    ADMIN_DETAIL_COUPON: "/api/admin/coupons/detail/",
    ADMIN_CREATE_COUPON: "/api/admin/coupons/create",
    ADMIN_UPDATE_COUPON: "/api/admin/coupons/update/",
    ADMIN_DELETE_COUPON: "/api/admin/coupons/delete/",
}

class CouponService {
    //
    listCoupon = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_COUPON, config);
    }

    searchCoupon = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.SEARCH_COUPON, config);
    }

    detailCoupon = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_COUPON + id, config);
    }

    saveCoupon = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.SAVE_COUPON, data, config);
    }
    //
    adminListCoupon = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_COUPON, config);
    }

    adminDetailCoupon = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_COUPON + id, config);
    }

    adminCreateCoupon = (data) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_CREATE_COUPON, data, config);
    }

    adminUpdateCoupon = (id, data) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_COUPON + id, data, config);
    }

    adminDeleteCoupon = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_COUPON + id, config);
    }
}

const couponService = new CouponService();
export default couponService;