/**
 * @author Gjf
 * @date 2021-11-19
 * @description 分析评估 - 作业评估 - api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * @function 获取组织树(tree)
     * @param {String|Number} params.treeId 作业Id
     * @param {String|Number} params.userId 学员Id
     * @param {String|Number} params.trainingId 科目Id
     */
    getTreeData: params => POST('indicators/tree/studentget', params),

    /**
     * @function 获取课程关联的用户(select)
     * @param {String|Number} params.treeId 作业Id
     */
    getUserData: params => POST('indicators/tree/getUser', params),

    /**
     * @function 获取课程关联的科目(select)
     * @param {String|Number} params.treeId 作业Id
     */
    getTrainingData: params => POST('indicators/tree/getTraining', params),
}