import axios from "axios";
import { apiHandler } from "./apiHandler";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package`;

export const fetchAllPackages = (params = {}) => {
    return apiHandler(() => axios.get(API_URL, { params }));
};

export const fetchPackageDetails = (id) => {
    return apiHandler(() => axios.get(`${API_URL}/${id}`));
};

export const createPackage = (packageData) => {
    return apiHandler(() => axios.post(API_URL, packageData, { withCredentials: true }));
};

export const updatePackage = (id, packageData) => {
    return apiHandler(() => axios.patch(`${API_URL}/${id}`, packageData, { withCredentials: true }));
};

export const updatePackageStatus = (id, statusData) => {
    return apiHandler(() => axios.patch(`${API_URL}/status/${id}`, statusData, { withCredentials: true }));
};

export const deletePackage = (id) => {
    return apiHandler(() => axios.delete(`${API_URL}/${id}`, { withCredentials: true }));
};