
// // Imports
// import axios from 'axios';
// // import LOGGER from '../logging/logging.js';
// // import END_POINTS from '../api/endpoints';
// // import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

// // import store from '../store';
// // import swal from 'sweetalert2';

// // get access tokens from store
// const accessToken = store.getters['Auth/accessToken'];
// const refreshToken = store.getters['Auth/refreshToken'];
// const authUser = store.getters['Auth/user'];

// // build a new axios instance
// const instance = axios.create({
//     headers: {
//         'Authorization': 'Bearer ' + accessToken,
//         'RefreshToken': refreshToken,
//         'AuthUser': JSON.stringify(authUser),
//         'Accept': '*/*',
//         'Cache-Control': 'no-cache',
//         "Access-Control-Allow-Origin": "*",
//     },
//     //adapter: cacheAdapterEnhancer(axios.defaults.adapter),
// });

// // add request interceptor
// const requestInterceptor = instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // add response interceptor
// const responseInterceptor = instance.interceptors.response.use(function (response) {
//     // Do something with response data
//     return response;
// }, function (error) {
//     // handle token expiration along with response error
//     if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx

//         // access token has been expired
//         if(error.response.data.msg == 'Token has expired') {
//             store.dispatch('Auth/tokenExpired');

//             swal({
//                 title: 'Error!',
//                 text: 'Your session has been expired. Please, login to the dashboard again.',
//                 type: 'error',
//                 confirmButtonText: 'Login',
//                 allowOutsideClick: false,
//             }).then((result) => {
//                 location.href = '/login';
//             });
//         }
//         else {
//             // prepare & send logging info
//             LOGGER.request.method = error.response.config.method;
//             LOGGER.request.url = error.response.config.url;
//             LOGGER.request.params = JSON.parse(error.response.config.data);
//             LOGGER.response.status = error.response.status;
//             LOGGER.response.statusText = error.response.statusText;
//             LOGGER.response.data = error.response.data;
//             LOGGER.send("error");
//         }
//     } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//         // http.ClientRequest in node.js
//         console.log(error.request);
//     } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log('Error', error.message);
//     }

//     return Promise.reject(error);
// });

// export default instance;