import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken, removeToken } from './auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_huanjing,
  timeout: 15000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        config.headers['timestamp'] = new Date().getTime();
        let token = getToken();
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data;
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 0) {
            if (res.code === 1) {
                Message({
                    message: res.msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
            if (res.code === 400) {
                Message({
                    message: res.msg,
                    type: 'error',
                    duration: 3 * 1000
                })
            }
            if (res.code === 101) {
                console.log(res)
                Message({
                    message: '登陆信息超时,请重新登陆',
                    type: 'error',
                    duration: 3 * 1000
                })
                removeToken();
                window.location.href = '/'
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
export default service
