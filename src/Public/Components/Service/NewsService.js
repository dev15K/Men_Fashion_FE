import {BASE_URL_SERVER} from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_NEWS: "/api/news/list",
    DETAIL_NEWS: "/api/news/detail/",
    // ADMIN
    ADMIN_LIST_NEWS: "/admin/api/news/list",
    ADMIN_LIST_NEWS_STATUS: "/admin/api/news/list/",
    ADMIN_DETAIL_NEWS: "/admin/api/news/detail/",
    ADMIN_POST_NEWS: "/admin/api/news",
    ADMIN_UPDATE_NEWS: "/admin/api/news/",
    ADMIN_DELETE_NEWS: "/admin/api/news/",
}

class NewsService {
    // USER
    listNews = () => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_NEWS);
    }

    detailNews = (id) => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_NEWS + id);
    }

    // ADMIN
    adminListNews = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_NEWS, config);
    }

    adminDetailNews = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_NEWS + id, config);
    }

    adminCreateNews = (data) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_POST_NEWS, data, config);
    };

    adminUpdateNews = (id, data) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_NEWS + id, data, config)
    };

    adminDeleteNews = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_NEWS + id, config);
    }
}

const newsService = new NewsService();
export default newsService;