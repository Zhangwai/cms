<template>
  <div class="page-content">
    <lx-table
      :listData="listData"
      v-bind="contentTableConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- v-model:page取了个page的名字 -->
      <!-- 1.hander中的插槽 -->
      <template #handerHandler>
        <!-- <el-button size="medium" icon="el-icon-refresh">刷新</el-button> -->
        <el-button size="medium">
          <el-icon style="vertical-align: middle">
            <refresh />
          </el-icon>
          <span style="vertical-align: middle"> 刷新 </span>
        </el-button>
        <el-button
          v-if="isCreate"
          size="medium"
          type="primary"
          @click="handleNewClick"
          >新建数据</el-button
        >
      </template>

      <!-- 2.列中的插槽 -->
      <!-- 这个应该不是公共的插槽 -->
      <!-- <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template> -->
      <template #createAt="scope">
        <!-- 时间格式化 -->
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="hander-btns">
          <el-button
            v-if="isUpdate"
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="mini"
            type="text"
            icon="el-icon-delete"
            style="color: red"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 3.在page-content中动态插入剩余(各个页面私有的)的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <!-- 动态插槽 -->
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </lx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'

// 自己的useStore
import { useStore } from '@/store'

import { usePermission } from '@/hooks/usePermission'

import LxTable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    LxTable
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.双向绑定pageInfo 默认从第一页开始
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2.发送查询网络请求 searchInfo是搜索时的查询条件
    const getPageData = (searchInfo: any = {}) => {
      // 如果没有查询权限，直接退出，不发送网络请求
      if (!isQuery) return
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        // 查询条件
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize, //偏移量
          size: pageInfo.value.pageSize, // 一个页面展示10条数据
          ...searchInfo
        }
      })
    }
    getPageData()

    // 3.从vuex中获取数据
    const listData = computed(() =>
      store.getters[`systemModule/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`systemModule/pageListCount`](props.pageName)
    )

    // 4.获取其他的动态插槽名称，排除公共的插槽
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        // if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 5.删除/新建/编辑操作
    const handleDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch('systemModule/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      pageInfo,
      listData,
      dataCount,
      getPageData,
      otherPropSlots,
      isCreate,
      isDelete,
      isUpdate,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
