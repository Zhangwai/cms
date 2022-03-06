<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="department"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="department"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 重置、搜索的hooks
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()

    // 2.动态添加角色和部门的逻辑
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems?.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      return modalConfig
    })

    // 3.调用hook获取公共的变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      modalConfigRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
