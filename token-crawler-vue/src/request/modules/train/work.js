/**
 * @author Gjf
 * @date 2021-09-02
 * @description 训练管理 - 作业管理 - api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * api: 1113
     * 
     * @function 获取课程列表(table)
     */
    getCourseList: params => POST('/aisim/v2/wm/list', params),

    /**
     * api: 1114
     * 
     * @function 获取作业列表(table)
     * @param {Object} params 接口入参
     * 
     * @param {Number | String} params.courseId 课程id
     */
    getWorkList: params => POST('/aisim/v2/wm/workList', params),

    /**
     * api: 1115
     * 
     * @function 获取作业状态列表(table)
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定id
     * @param {Number | String} params.courseId 作业id
     */
    getWorkStateList: params => POST('/aisim/v2/scene/workrecord/list', params),

    /**
     * api: 1116
     * 
     * @function 获取作业状态信息
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定id
     * @param {Number | String} params.courseId 作业id
     */
    getWorkStateInfo: params => POST('/aisim/v2/scene/workstate/get', params),

    /**
     * api: 1117
     * 
     * @function 下发作业
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 想定id
     * @param {Number | String} params.courseId 作业id
     */
    sendWork: params => POST('/aisim/v2/scene/workstate/issue', params),

    /**
     * api: 1118
     * 
     * @function 获取作业概要
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 作业状态id
     */
    getWorkOutline: params => POST('/aisim/v2/scene/workrecord/desc', params),

    /**
     * api: 1544
     * 
     * @function 获取作业记录
     * @param {Object} params 接口入参
     * 
     * @param {String} params.soid 作业状态id
     * @param {Number | String} params.courseId 作业id
     */
    getWorkrecord: params => POST('/aisim/v2/scene/workrecord/get', params),
}