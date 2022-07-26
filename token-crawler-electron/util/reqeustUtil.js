const request = require("request")
const requestUtil = {}

requestUtil.get = async function(url, headers){
    return new Promise(resolve => {
        request({
            url: url,
            headers: headers
        }, function(error, response, body) {
            if(error){
                console.log(error)
            }
            if (response && response.statusCode == 200) {
                // console.log(response.headers)
                // console.log(headers)
                if(response.headers["set-cookie"]){
                    headers.cookie = response.headers["set-cookie"].join("; ")
                }
                return resolve(body)
            }else{
                console.log("请求异常")
            }
            return resolve("")
        });
    })
}

module.exports = requestUtil