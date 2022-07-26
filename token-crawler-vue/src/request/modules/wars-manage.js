/**
 * @author Gjf
 * @date 2021-08-18
 * @description XX管理-api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * api: 993
     * 
     * @function 获取资料类型(select)
     * @param {Object} params 接口入参
     * 
     * @param {Number | String} params.menuId 菜单类型  1: XX原始文献, 2: XX背景资料, 3:XX教学资料
     */
    getSelectList: (params) => {
        return POST('/dm/material/other/materialTypeList', params);
    },

    /**
     * api: 995
     * 
     * @function 获取资料列表(table)
     * @param {Object} params 接口入参
     * 
     * @param {Number | String} params.menuId 菜单类型  1: XX原始文献, 2: XX背景资料, 3:XX教学资料
     * @param {Number | String} params.materialTypeId 资料类型id
     * @param {String} params.dataName 资料名称
     * @param {String} params.uploader 上传人
     * @param {Number | String} params.pageSize 每页大小
     * @param {Number | String} params.pageNum 当前页
     */
    getTableData: (params) => {
        return POST('/dm/material/other/page', params);
    },

    /**
     * api: 994
     * 
     * @function 资料添加(dialog)
     * @param {Object} params 接口入参
     * 
     * @param {Number | String} params.materialTypeId 资料类型id
     * @param {String} params.dataName 资料名称
     * @param {String} params.url 文件路径
     * @param {String} params.fileName 文件名称
     */
    saveData: (params) => {
        return POST('/dm/material/other/save', params);
    },

    /**
     * api: 996
     * 
     * @function 资料删除(table)
     * @param {Object} params 接口入参
     * 
     * @param {Number | String} params.id 资料id
     */
    deleteData: (params) => {
        return POST('/dm/material/other/delete', params);
    },

    getTaskTableData: (params) => {
        return POST('/dm/work/commit/record/page', params);
    },
    deleteTaskTableData: (params) => {
        return POST('/dm/work/commit/record/delete', params);
    },
    saveTaskData: (params) => {
        return POST('/dm/work/commit/record/save', params);
    },
}