import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import loginModule from './login/login'
import systemModule from './main/system/system'
import dashboardModule from './main/analysis/dashboard'
import listModule from './main/story/list'

import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Kylin',
      age: 21,
      entireRole: [],
      entireDepartment: [],
      entireMenu: [],
      entireCategory: []
    }
  },
  getters: {},
  mutations: {
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    },
    changeEntireCategory(state, list) {
      state.entireCategory = list
    }
  },
  actions: {
    // 请求初始化的数据，如：角色、部门
    async getInitialDataAction({ commit }) {
      // 1.请求角色和部门数据
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      // 取别名
      const { list: roleList } = roleResult.data

      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data

      // 2.请求菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 2.请求商品分类数据
      const categoryResult = await getPageListData('/category/list', {})
      const { list: categoryList } = categoryResult.data

      // 3.保存数据
      commit('changeEntireRole', roleList)
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireMenu', menuList)
      commit('changeEntireCategory', categoryList)
    }
  },
  modules: {
    loginModule,
    systemModule,
    dashboardModule,
    listModule
  }
})

// 对store中的数据进行初始化
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

// 为state在Vue+TS中更好用
export function useStore(): Store<IStoreType> {
  // 依然是调用vuex的useStore
  return useVuexStore()
}

export default store
