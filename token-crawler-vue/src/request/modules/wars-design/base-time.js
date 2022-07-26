/**
 * @author Gjf
 * @date 2021-08-19
 * @description XX设计 - 基础数据 - 时间设置  api
 */

import {
  POST
} from '@/request';

export default {
  /**
   * api: 1776
   * 
   * @function 查询想定
   * @param {Object} params 接口入参
   * 
   * @param {String} params.soid 想定ID
   */
  getScenarioInfo: (params) => {
    return POST('/aisim/scene/stage/getSceneObject', params);
  },

  /**
   * api: 1777
   * 
   * @function 更新想定时间
   * @param {Object} params 接口入参
   * 
   * @param {String} params.soid 想定ID
   * @param {String} params.beginTime 开始时间
   * @param {String} params.endTime 结束时间
   */
  saveScenarioApi: (params) => {
    return POST('/aisim/scene/stage/updateSceneObjectTime', params);
  },

  /**
   * api: 568
   * 
   * @function 获取想定时刻列表(table)
   * @param {Object} params 接口入参
   * 
   * @param {String} params.soid 想定ID
   */
  getTableData: (params) => {
    return POST('/aisim/scene/time/list', params);
  },

  /**
   * api: 569
   * 
   * @function 新增保存时刻(dialog)
   * @param {Object} params 接口入参
   * 
   * @param {String} params.soid 想定ID
   * @param {String} params.name 名称
   * @param {String} params.tag 代号
   * @param {String} params.des 说明
   * @param {String} params.time 时间
   */
  saveData: (params) => {
    return POST('/aisim/scene/time/save', params);
  },

  /**
   * @function 编辑保存时刻(dialog)
   * @param {Object} params 接口入参
   * 
   * @param {String} params.id 修改项id
   * @param {String} params.soid 想定ID
   * @param {String} params.name 名称
   * @param {String} params.tag 代号
   * @param {String} params.des 说明
   * @param {String} params.time 时间
   */
  updateData: (params) => {
    return POST('/aisim/scene/time/update', params);
  },

  /**
   * api: 570
   * 
   * @function 删除时刻(table)
   * @param {Object} params 接口入参
   * 
   * @param {Number | String} params.soid 想定ID
   */
  deleteData: (params) => {
    return POST('/aisim/scene/time/delete', params);
  },

  /**
   * @function 校验时刻是否关联任务(table)
   * @param {Object} params 接口入参
   * 
   * @param {Number | String} params.opport 时刻ID
   */
  checkTimeRelevance: (params) => {
    return POST('/aisim/scene/time/getTaskList', params);
  },
}