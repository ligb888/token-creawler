/**
 * @author Gjf
 * @date 2021-08-19
 * @description XX设计 - 基础数据 - 想定阶段  api
 */

import {
  POST
} from '@/request';

export default {
  /**
   * api: 568
   *
   * @function 获取想定阶段列表(table)
   * @param {Object} params 接口入参
   *
   * @param {String} params.soid 想定ID
   */
  getTableData: (params) => {
    return POST('/aisim/scene/stage/list', params);
  },

  /**
   * api: 569
   *
   * @function 新增保存阶段(dialog)
   * @param {Object} params 接口入参
   *
   * @param {String} params.soid 想定ID
   * @param {String} params.name 名称
   * @param {String} params.tag 代号
   * @param {String} params.des 说明
   * @param {String} params.time 时间
   */
  saveData: (params) => {
    return POST('/aisim/scene/stage/save', params);
  },

  /**
   * @function 编辑保存阶段(dialog)
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
    return POST('/aisim/scene/stage/update', params);
  },

  /**
   * api: 570
   *
   * @function 删除阶段(table)
   * @param {Object} params 接口入参
   *
   * @param {Number | String} params.soid 想定ID
   */
  deleteData: (params) => {
    return POST('aisim/scene/stage/delete', params);
  },
}