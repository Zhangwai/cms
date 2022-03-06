import { Module } from 'vuex'

import { IStoryState } from './types'
import { IRootState } from '../../types'

import { getStoryList } from '@/service/main/story/list'

const listModule: Module<IStoryState, IRootState> = {
  namespaced: true,
  state() {
    return {
      storyList: []
    }
  },
  mutations: {
    changeStoryList(state, list) {
      state.storyList = list
    }
  },
  actions: {
    async getStoryDataAction({ commit }) {
      const storyListResult = await getStoryList()
      commit('changeStoryList', storyListResult.data)
    }
  }
}

export default listModule
