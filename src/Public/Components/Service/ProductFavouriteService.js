import {BASE_URL_SERVER} from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_PRODUCT_FAVOURITE: "/api/product-favourite/list/",
    CREATE_PRODUCT_FAVOURITE: "/api/product-favourite/create",
    UPDATE_PRODUCT_FAVOURITE: "/api/product-favourite/update/",
}

class ProductFavouriteService {
    listProductFavourite = (userId) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_PRODUCT_FAVOURITE + userId, config);
    }

    createProductFavourite = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.CREATE_PRODUCT_FAVOURITE, data, config);
    }

    updateProductFavourite = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.UPDATE_PRODUCT_FAVOURITE + id, data, config);
    }

}

const productFavouriteService = new ProductFavouriteService();
export default productFavouriteService;