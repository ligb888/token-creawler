/**
 * @author Gjf
 * @date 2021-08-19
 * @description XX设计-api
 */

import { POST } from '@/request';

export default {
    /**
     * api: 563
     *
     * @function 获取想定列表(table)
     * @param {Object} params 接口入参
     *
     * @param {Number | String} params.pageNum 当前页数
     * @param {Number | String} params.pageSize 每页条数
     */
    getTableData: (params) => {
        return POST('/aisim/scene/page', params);
    },

    /**
     * api: 566
     *
     * @function 新增想定(dialog)
     * @param {Object} params 接口入参
     *
     * @param {Number | String} params.cname 想定中文名称
     */
    saveData: (params) => {
        return POST('/aisim/scene/save', params);
    },

    saveFileData: (params) => {
        return POST('/aisim/scene/savePath', params);
    },

    /**
     * api: 567
     *
     * @function 删除想定(table)
     * @param {Object} params 接口入参
     *
     * @param {Number | String} params.soid 想定ID
     */
    deleteData: (params) => {
        return POST('/aisim/scene/delete', params);
    },
}
