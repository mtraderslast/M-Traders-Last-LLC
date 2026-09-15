import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/savePackage`;

export const fetchSavedPackages = () => {
    return apiHandler(() => axios.get(`${API_URL}/saved`, { withCredentials: true }));
};

export const checkSavedPackage = (packageId) => {
    return apiHandler(() => axios.get(`${API_URL}/check/${packageId}`, { withCredentials: true }));
};

export const toggleSavePackage = (packageId) => {
    return apiHandler(() => axios.post(`${API_URL}/save/${packageId}`, {}, { withCredentials: true }));
};