/**
 * @author Gjf
 * @date 2021-11-04
 * @description 配置axios
 */

import axios from 'axios';
import store from '@/store';
import router from '@/router';
import md5 from 'js-md5';

import {
    Message
} from 'element-ui';

const appkey = 'media'
const appSecret = 'wFDjnoAjMUWYs2Lc'

const $http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 15000,
})

// Request interceptors
$http.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data.append("appkey", appkey)
        const token = store.state.token;
        if (token) {
            config.data.append("token", token)
        }
        config.data.sort()
        // 签名
        let sign = ''
        let paramStr = ''
        for(let item of config.data.keys()){
            paramStr += item + config.data.get(item)
        }
        sign = md5(appSecret + paramStr + appSecret).toUpperCase()
        config.data.append("sign", sign)
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// Response interceptors
$http.interceptors.response.use(
    (response) => {
        const data = response.data;
        const successCode = [0, 1];

        if (successCode.includes(data.code)) {
            return data
        }

        switch (data.code) {
            case 101:
                data.message = '登录已失效，请重新登录';
                break;
            case 400:
                data.message = '请求错误(400)';
                break;
            case 401:
                data.message = '未授权,请登录(401)';
                break;
            case 403:
                data.message = '拒绝访问(403)';
                break;
            case 404:
                data.message = `请求地址出错: ${response.config.url}`;
                break;
            case 405:
                data.message = '请求方法未允许(405)';
                break;
            case 408:
                data.message = '请求超时(408)';
                break;
            case 500:
                data.message = '服务器内部错误(500)';
                break;
            case 501:
                data.message = '服务未实现(501)';
                break;
            case 502:
                data.message = '网络错误(502)';
                break;
            case 503:
                data.message = '服务不可用(503)';
                break;
            case 504:
                data.message = '网络超时(504)';
                break;
            case 505:
                data.message = 'HTTP版本不受支持(505)';
                break;
            default:
                data.message = `${data.msg || '连接错误' }`;
        }

        Message.closeAll();
        Message.error(data.message);

        if (data.code === 101) {
            store.commit('clearStrore');
            router.push('/');
        }


        return Promise.reject(data);
    },
    (error) => {
        Message.closeAll();
        Message.error('连接到服务器失败，请联系管理员');
        return Promise.reject(error)
    }
)

export default $http