// 编写规则
export const rules = {
  // 对应name
  number: [
    // 规则一
    {
      required: true, //必传
      message: '手机号是必须写的', //错误时显示
      trigger: 'blur' //失去焦点时检测，change只要改变就检测
    },
    // 规则二
    {
      // type: 'number',
      pattern: /^[0-9]{11,11}$/,
      message: '手机号必须是11个数字',
      trigger: 'blur'
    }
  ],
  // 对应password
  code: [
    {
      required: true, //必传
      message: '验证码是必须写的', //错误时显示
      trigger: 'blur' //失去焦点时检测，change只要改变就检测
    }
  ]
}
