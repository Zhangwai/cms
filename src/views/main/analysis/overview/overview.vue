<template>
  <div class="overview">
    <lx-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </lx-card>
    <lx-card title="技术栈">
      <lx-text-link :text-arrs="technologyStacks" />
    </lx-card>

    <lx-card title="Git提交规范">
      <lx-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add . ' },
          { name: 'commit 操作', description: 'npm run commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </lx-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LxDescriptions from '@/base-ui/descriptions'
import LxTextLink from '@/base-ui/text-link'
import LxCard from '@/base-ui/card'

import { technologyStacks } from './config'
export default defineComponent({
  components: {
    LxDescriptions,
    LxCard,
    LxTextLink
  },

  setup() {
    return {
      technologyStacks
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
