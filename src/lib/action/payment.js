import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000").replace(/\/$/, "")}/api/payments`;

export const getActiveGatewayApi = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/active-gateway`)
    );
};

export const getAdminGatewaysApi = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/admin/gateways`, { withCredentials: true })
    );
};

export const switchGatewayApi = (gateway) => {
    return apiHandler(() =>
        axios.patch(
            `${API_URL}/admin/switch-gateway`,
            { gateway },
            { withCredentials: true }
        )
    );
};
