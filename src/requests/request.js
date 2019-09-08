
// Imports
import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
// import swal from 'sweetalert2';

// build a new axios instance
let instance = axios.create();


// add request interceptor
const requestInterceptor = instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// add response interceptor
const responseInterceptor = instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    return error;
});

export default instance;