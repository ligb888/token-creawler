/**
 * @author Gjf
 * @date 2021-07-26
 * @description 常用工具封装
 */



/** 
 * @funxtion 截取小数位(不四舍五入)
 * @param {Number | String} data 原始数据
 * @param {Number} num 保留小数位
 * @returns {String}
 */
export const _toFixed = (data = '', num = 2) => {
    const _arr = (data + '').split('.');
    const _num = num * 1;
    let [_integer = '', _decimals = ''] = _arr;

    if (_num === 0 || !_integer) {
        return _integer;
    }

    if (_decimals.length < _num) {
        for (let i = 0; i = _num - _decimals.length; i++) {
            _decimals += '0';
        }
    }

    return `${_integer}.${_decimals.slice(0, num)}`
}

/** 
 * @funxtion 返回 属方 Svg 路径
 * @param {String} url 路径
 * @param {String} color 颜色
 * @returns {String}
 */
export const getSvgUrl = (url, color) => {
    const _color = color || '#ff0000';
    return `${process.env.VUE_APP_BASE_API}/sys/file/svgColor?path=${url}&color=${encodeURIComponent(_color)}`
}

/**
 * @function 处理Gis的返回数据
 * @param {Number} data
 *  data[0] Gis坐标名称
 *
 *  data[1] Gis坐标数据
 *  坐标  [21381117.1875, 3164874.9999999995]
 *  21381117.1875        经度  前两位（21）地图范围经度 （整数位后三位 Gis精度数据）
 *  3164874.9999999995   纬度  前两位（31）地图范围纬度 （整数位后三位 Gis精度数据）
 *
 *  data[2] Gis坐标角度
 *
 *  @param {Boolean} isArray 是否返回数组类型
 *
 * @returns {String | Array} 移除（前两位、小数位、整数位后三位）
 */
export const backJunBiaoInfo = (data, isArray) => {
    if (!data) {
        return;
    }
    const val = Array.isArray(data) ? data : JSON.parse(data);
    const [name = [], coord = []] = val;

    const _coordArr = coord.map((item, i) => {
        const [_x = "", _y = ""] = item;
        let [x, y] = [parseInt(_x * 1) + "", parseInt(_y * 1) + ""];

        x = x.slice(2, x.length - 3);
        y = y.slice(2, y.length - 3);

        return `${name[i] || ""}(${x},${y})`;
    });

    let backParams = _coordArr;

    if (!isArray) {
        backParams = '';
        _coordArr.forEach((item) => (backParams += item));
    }

    return backParams;
}