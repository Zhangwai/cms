<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="phone" ref="formRef">
      <!-- prop="name"匹配规则 -->
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="codeBtn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { ElForm } from 'element-plus'

import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const store = useStore()

    const phone = reactive({
      number: '',
      code: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      // console.log('account正在登录')
      // 验证
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')

          // 开始登录验证
          store.dispatch('loginModule/phoneLoginAction', { ...phone })
        }
      })
    }

    return {
      phone,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.getCode {
  display: flex;
}
.codeBtn {
  margin-left: 8px;
}
</style>
