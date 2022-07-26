/**
 * @author Gjf
 * @date 2021-08-23
 * @description XX分析-api
 */

import { POST } from '@/request';


export default {
    /**
     * api: 1080
     *
     * @function 获取XX列表(table)
     *
     */
    getTableData: params => POST('/cm/createCourse/corserAnalysisList', params),

    /**
     * api: 1074
     *
     * @function 获取部署配置左边树列表(tree)
     * @param {Object} params 接口入参
     *
     * @param {Number | String} params.soid 想定id
     */
    getTreeData: params => POST('/aisim/enemyme/allList', params),
}
