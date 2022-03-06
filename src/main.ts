import { createApp } from 'vue'

import { globalRegister } from './global'

// css初始化
import 'normalize.css'
import './assets/css/index.less'

// import '@element-plus/icons'

// 全局引入ElementPlus
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入样式

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

// import './service/axios_demo'
// import lxRequest from './service'

const app = createApp(App)

// 1.注册ElementPlus
// globalRegister(app)
// 2.插件形式使用
app.use(globalRegister)

// 注册vuex
app.use(store)
// 注册路由
// 路由匹配前，先把它注册好
setupStore()
app.use(router)

app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// 每个单独的请求也可以有自己的拦截  少见
// lxRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的config')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// lxRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     // 是否显示loading
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
