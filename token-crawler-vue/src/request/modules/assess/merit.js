/**
 * @author Gjf
 * @date 2021-11-17
 * @description 分析评估 - 指标体系 - api
 */

import {
    POST
} from '@/request';

export default {
    /**
     * @function 获取数据表(table)
     */
    getTableData: params => POST('indicators/get', params),

    /**
     * @function 添加数据表(table)
     */
    saveData: params => POST('indicators/add', params),

    /**
     * @function 删除数据表(table)
     */
    deleteData: params => POST('indicators/delete', params),

    /**
     * @function 进入课程，获取树节点(table)
     */
    getTreeData: params => POST('indicators/tree/get', params),

    /**
     * @function 增加节点(table)
     */
    addTree: params => POST('indicators/tree/add', params),

    /**
     * @function 修改节点(table)
     */
    updateTree: params => POST('indicators/tree/update', params),

    /**
     * @function 删除节点(table)
     */
    deleteTree: params => POST('indicators/tree/delete', params),

    /**
     * @function 获取关联模型(table)
     */
    getLinkInfo: params => POST('indicators/tree/getLinkInfo',params),

    /**
     * @function 切换平均值、聚合值
     */
    choseType: params => POST('indicators/tree/change',params),
}