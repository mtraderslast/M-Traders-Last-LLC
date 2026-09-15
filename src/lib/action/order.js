import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order`;

export const fetchMyOrders = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/my-orders`, { withCredentials: true })
    );
};

export const fetchOrderDetails = (orderId) => {
    return apiHandler(() =>
        axios.get(`${API_URL}/order-details/${orderId}`, { withCredentials: true })
    );
};

export const fetchAllOrders = (params = {}) => {
    return apiHandler(() =>
        axios.get(`${API_URL}/get-allOrders`, { params, withCredentials: true })
    );
};

export const updateOrderStatus = (orderId, statusData) => {
    return apiHandler(() =>
        axios.patch(`${API_URL}/update-order/${orderId}`, statusData, { withCredentials: true })
    );
};

export const cancelOrder = (orderId) => {
    return apiHandler(() =>
        axios.delete(`${API_URL}/cancel-order/${orderId}`, { withCredentials: true })
    );
};