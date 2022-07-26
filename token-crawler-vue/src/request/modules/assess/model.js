/**
 * @author Gjf
 * @date 2021-09-08
 * @description 分析评估 - 模型指标 - api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * @function 获取数据表(table)
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定id
     * @param {Number | String} params.courseId 课程id
     */
    getTableData: params => POST('aisim/scene/getTableData', params),


    // ================================ 评估模型 =================================== START

    /**
     * 
     * @function 获取评估模型类别列表
     */
    getModelTypeList: params => POST('/evaluate/get', params),

    /**
     * @function 新增
     * @param {Object} params 接口入参
     * @param {Object} params.type 数据层级：1为类别，2为模型，3为参数，4为得分，5为公式
     * @param {Object} params.parentid 父级id（新增模型时，父级id为模型归属的类别id）；新增的为类别时，id为空
     */
    addSave: params => POST('/evaluate/save', params),

    /**
     * @function 删除
     */
    onDeleteItem: params => POST('/evaluate/delete', params),

    /**
     * @function 更新
     */
    onUpdate: params => POST('/evaluate/update', params),

    // ============================================================================ END
}