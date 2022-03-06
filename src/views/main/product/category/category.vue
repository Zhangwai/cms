<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="category"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="category"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'category',
  components: {
    pageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 重置、搜索的hooks
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
