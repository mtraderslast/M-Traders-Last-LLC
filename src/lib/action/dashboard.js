import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard`;

export const fetchDashboardStats = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/user/dashboard-stats`, { withCredentials: true })
    );
};

export const fetchAdminDashboardStats = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/admin/dashboard-stats`, { withCredentials: true })
    );
};

export const fetchUserMonthlyExpense = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/orders/monthly-expense`, { withCredentials: true })
    );
};

export const fetchAdminMonthlyRevenue = () => {
    return apiHandler(() =>
        axios.get(`${API_URL}/monthly-revenue`, { withCredentials: true })
    );
};