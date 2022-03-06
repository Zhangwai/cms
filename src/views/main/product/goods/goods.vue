<template>
  <div class="goods">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <!-- 插槽，配置goods私有的 -->
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.status ? 'success' : 'danger'"
          plain
          >{{ scope.row.status ? '在售' : '售空' }}</el-button
        >
      </template>
      <template #image="scope">
        <el-image
          style="width: 70px; height: 70px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    pageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
