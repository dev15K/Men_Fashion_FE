import {BASE_URL_SERVER} from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    ADMIN_DASHBOARD: "/api/admin/dashboard",
}

class AdminService {
    adminDashboard = (type, size, sort, keyword) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DASHBOARD + '?type=' + type + '&size=' + size + '&sort=' + sort + '&keyword=' + keyword, config);
    }

}

const adminService = new AdminService();
export default adminService;