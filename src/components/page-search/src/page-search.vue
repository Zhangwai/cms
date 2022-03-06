<template>
  <div class="page-search">
    <!-- 高级封装组件 -->
    <lx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
            <el-icon style="vertical-align: middle">
              <refresh />
            </el-icon>
            <span style="vertical-align: middle"> 重置 </span>
          </el-button>
          <el-button type="primary" @click="handleSearchClick">
            <el-icon style="vertical-align: middle">
              <search />
            </el-icon>
            <span style="vertical-align: middle"> 搜索 </span>
          </el-button>
        </div>
      </template>
    </lx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LxForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    LxForm
  },
  emits: ['resetBtnClick', 'searchBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定的
    // 1.优化一：formData中的属性应该动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    // item拿到的是一个个对象
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    // formData搜索框中的数据
    const formData = ref(formOriginData)
    // 这是之前有所欠缺的写法
    // const formData = ref({
    //   id: '',
    //   name: '',
    //   status: '',
    //   createTime: ''
    // })

    // 2.优化二：重置按钮 发送事件到user，user再传到page-content进行网络请求
    const handleResetClick = () => {
      // formData.value = formOriginData
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    // 3.优化三：搜索实现 发送事件到user，user再传到page-content进行网络请求
    const handleSearchClick = () => {
      emit('searchBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 30px 20px 0;
}
</style>
