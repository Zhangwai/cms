<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// 按需引用element-plus
// import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/theme-chalk/el-button.css'

export default defineComponent({
  name: 'App',
  components: {
    // ElButton
    ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
