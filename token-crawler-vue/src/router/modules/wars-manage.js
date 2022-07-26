/**
 * @author Gjf
 * @date 2021-08-19
 * @description XX管理
 */

export default [{
  path: '/document',
  name: 'document',
  redirect: '/document_origin',
  component: () => import('@/views/wars-manage'),
  meta: {
    whiteFlag: true
  },
  children: [{
    path: '/document_origin',
    name: 'document_origin',
    component: () => import('@/views/wars-manage/origin'),
    meta: {
      whiteFlag: true
    },
  },
  {
    path: '/document_bg',
    name: 'document_bg',
    component: () => import('@/views/wars-manage/background'),
    meta: {
      whiteFlag: true
    },
  },]
}]