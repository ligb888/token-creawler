/**
 * @author Gjf
 * @date 2021-09-14
 * @description XX设计 - 基础数据 - 战场环境  api
 */

import {
    POST,
} from '../../../request';

export default {
    /**
     * @function 获取详情
     * @param {Object} params 接口入参
     *
     * @param {String} params.soid 想定ID
     */
    getDetails: (params) => POST('/aisim/scene/detail', params),

    /**
     * @function 获取地图列表
     * @param {Object} params 接口入参
     *
     * @param {String} params.pageNum 页码
     * @param {String} params.pageSize 数量
     */
    getMapList: (params) => POST('/es/map/page', params),

    /**
     * @function 更新地图
     * @param {Object} params 接口入参
     * @param {String} params.soid 想定ID
     * @param {String} params.mapId 地图ID
     */
    updateMap: (params) => POST('/aisim/scene/update', params),
}
