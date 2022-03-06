<template>
  <div class="list">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="story"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useStore } from '@/store'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  components: {
    PageContent
  },
  setup() {
    const store = useStore()
    // 发起网络请求数据
    store.dispatch('listModule/getStoryDataAction')
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
