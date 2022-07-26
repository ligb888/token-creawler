/**
 * @author Gjf
 * @date 2021-09-02
 * @description XX设计 - 剖析课目 - 选择课目  api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * api: 1082
     * 
     * @function 选择课目列表(table)
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定ID
     */
    getTableData: params => POST('/aisim/v2/scene/training/list', params),

    /**
     * api: 576
     * 
     * @function 模板列表(dialog)
     */
    getTemplateList: params => POST('/aisim/scene/training/list', params),

    /**
     * api: 569
     * 
     * @function 新增课目(dialog)不引入模板
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定ID
     * @param {String} params.title 训练问题标题
     * @param {String} params.content 训练问题内容
     */
    saveData: params => POST('/aisim/v2/scene/training/saveObject', params),

    /**
     * api: 1065
     * 
     * @function 新增课目(dialog)引入模板
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定ID
     * @param {String} params.trainingIds 训练问题模板ID，多个使用逗号分割
     */
    saveUseTemplate: params => POST('/aisim/v2/scene/training/useTraining', params),

    /**
     * api: 1069
     * 
     * @function 删除课目(table)
     * @param {Object} params 接口入参
     * 
     * @param {Number | String} params.trainingObjectId 课目ID
     */
    deleteData: params => POST('/aisim/v2/scene/training/deleteObject', params),
}