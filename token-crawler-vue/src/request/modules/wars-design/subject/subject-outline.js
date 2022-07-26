/**
 * @author Gjf
 * @date 2021-09-02
 * @description XX设计 - 剖析课目 - 作业概要
 */

import {
    POST
} from '@/request';

export default {
    /**
     * api: 1071
     * 
     * @function 获取作业概要
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定ID
     */
    getTask: params => POST('/aisim/v2/scene/training/detailsObject', params),

    /**
     * api: 1072
     * 
     * @function 获取作业列表(select)
     */
    getTaskList: params => POST('/aisim/scene/work/listAll', params),

    /**
     * api: 1068
     * 
     * @function 保存修改作业概要
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定ID
     * @param {String} params.title 训练问题标题
     * @param {String} params.content 训练问题内容
     * @param {String} params.workIds 作业id 多个逗号分隔
     */
    saveTask: params => POST('/aisim/v2/scene/training/updateObject', params),
}