<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <!-- prop="name"匹配规则 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="coderwhy" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <!-- show-password隐藏密码 -->
        <el-input
          v-model="account.password"
          show-password
          placeholder="123456"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      // console.log('account正在登录')
      // 验证
      formRef.value?.validate((valid) => {
        if (valid) {
          // console.log('真正执行登录逻辑')
          // 1.判断是否需要记录密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2.开始登录验证
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
        // console.log(valid)
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
