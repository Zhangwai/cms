import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/types'

// 根模块类型
export interface IRootState {
  name: string
  age: number
  entireRole: any[]
  entireDepartment: any[]
  entireMenu: any[]
  entireCategory: any[]
}

// setup中使用useStore技巧
export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
  dashboardModule: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
