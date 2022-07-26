/**
 * @author Gjf
 * @date 2021-08-18
 * @description 封装常用请求
 */
import $http from '@/request/http';
import request_huanjing from '@/utils/request_huanjing';
import request_model from '@/utils/request_model';
import request_taishi from '@/utils/request_taishi';
import request_mapInfo from '@/utils/request_mapInfo';

export function dPost(obj) {
    let type = obj.port;
    //prot:不传:XX作业 ,1、 环境编辑端口; 2、XX分析
    if (type === 1) {
        request_huanjing({
            url: obj.url,
            method: 'post',
            data: obj.params
        }).then(res => {
            obj.succ(res)
        })
    } else if (type === 2) {
        request_taishi({
            url: obj.url,
            method: 'post',
            data: obj.params
        }).then(res => {
            obj.succ(res)
        })
    } else if (type === 3) {
        request_model({
            url: obj.url,
            method: 'post',
            data: obj.params
        }).then(res => {
            obj.succ(res)
        })
    }else {
        const params = new URLSearchParams()
        for(let item in obj.params){
            params.append(item, obj.params[item])
        }
        $http({
            url: obj.url,
            method: 'post',
            data: params
        }).then(res => {
            obj.succ(res)
        })
    }
}

/**
 * @function 封装POST请求---gis
 */
export function gisPOST(url, params = {}) {
  return request_taishi.post(url, params, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


/**
 * @function 封装POST请求
 */
export function POST(url, params = {}) {
    return $http.post(url, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

/**
 * @function 封装GET请求
 */
export function GET(url, params) {
    return $http({
        url,
        method: 'get',
        params
    })
}

/**
  * @desc: 封装获取地图信息GET请求
  * @params:
  * @return:
  **/
export function mapGET(url, params) {
  return new Promise(resolve => {
    request_mapInfo({
      url,
      method: 'get',
      params
    }).then(res=>{
      resolve(res);
    });
  })
}


/**
 * @function 上传文件
 * async
 */
export function uploadFile() {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.click();

        input.onchange = () => {
            const form = new FormData();
            const [file] = input.files;
            form.append('file', file);

            $http.post('/sys/file/upload', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                resolve({
                    data: res.data
                });
            }).catch(err => {
                reject({
                    msg: err.msg || '文件上传失败'
                })
            })
        }
    })
}


/**
 * @function 下载文件
 * @param {String} data file-info
 */
export function downFile(data) {
    // const url = escape(data.url)
    const url = encodeURIComponent(data.url);
    let fileName = encodeURIComponent(data.fileName)
    window.open(`${process.env.VUE_APP_BASE_API}/sys/file/download?url=${url}&fileName=${fileName}`)
}
