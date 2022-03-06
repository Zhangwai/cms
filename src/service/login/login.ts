import lxRequest from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'

// 枚举
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //user/id
  UserMenus = '/role/' //用法：role/id/menu
}

export function accountLoginRequest(account: IAccount) {
  return lxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return lxRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return lxRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
