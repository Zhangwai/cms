import lxRequest from '../../index'

import { IDataType } from '../../types'

// 获取页面列表数据
export function getPageListData(url: string, queryInfo: any) {
  return lxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除页面数据 url: /users/id
export function deletePageData(url: string) {
  return lxRequest.delete<IDataType>({
    url: url
  })
}

// 新建数据
export function createPageData(url: string, newData: any) {
  return lxRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

// 编辑数据
export function editPageData(url: string, editData: any) {
  return lxRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
