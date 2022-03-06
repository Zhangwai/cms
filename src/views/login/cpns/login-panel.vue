<template>
  <div class="login-panel">
    <h1 class="title">Kylin后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <el-icon style="vertical-align: middle">
            <user-filled />
          </el-icon>
          <span style="vertical-align: middle">账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <el-icon style="vertical-align: middle">
            <iphone />
          </el-icon>
          <span style="vertical-align: middle">手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    // <InstanceType<typeof LoginAccount>> 拿到LoginAccount导出的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 区分选择账号登录还是手机登录 默认账号登录
    const currentTab = ref('account')

    // 2.定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        // console.log('登录')
        // 因为没有传入东西，所以有可能是空的，需要加上? 可选
        // isKeepPassword.value传入判断是否需要记住密码
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // 执行手机登录逻辑
        phoneRef.value?.loginAction()
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 360px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
