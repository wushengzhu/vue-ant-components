import axios from 'axios';

// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV === 'production') {

// }

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 10000,
    // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (response.status !== 200) {

            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return response.data;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;