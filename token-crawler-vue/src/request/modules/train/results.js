/**
 * @author Gjf
 * @date 2021-09-02
 * @description 训练管理 - 成绩管理 - api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * api: 1545
     * 
     * @function 获取成绩列表(table)
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定id
     * @param {Number | String} params.courseId 课程id
     */
    getTableList: params => POST('/aisim/v2/scene/workrecord/scoreList', params),

    /**
     * api: 1545
     * 
     * @function 下载成绩列表(table)
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定id
     * @param {Number | String} params.courseId 课程id
     */
    downLoad: params => POST('/aisim/v2/scene/workrecord/scoreGenDoc', params),
}