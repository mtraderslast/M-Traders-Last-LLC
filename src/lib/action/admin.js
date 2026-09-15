import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin`;

export const getAllUsersApi = (params = {}) => {
    return apiHandler(() =>
        axios.get(`${API_URL}/user`, {
            params,
            withCredentials: true
        })
    );
};

export const updateUserRoleApi = (userId, role) => {
    return apiHandler(() =>
        axios.patch(
            `${API_URL}/user/${userId}/role`,
            { role },
            { withCredentials: true }
        )
    );
};