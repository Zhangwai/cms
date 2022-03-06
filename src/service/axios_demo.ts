import axios from 'axios'

// 模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

// // 模拟get请求并请求参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'Kylin',
//       age: 21
//     }
//   })
//   .then((res) => console.log(res.data))

// // 模拟post请求并请求参数
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'Kylin',
//       age: 21
//     }
//   })
//   .then((res) => console.log(res.data))

// Promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve('Kylin')
// }).then((res) => {
//   console.log(res)
// })

// axios的配置选项
// 全局
axios.defaults.baseURL = 'http://httpbin.org'
// 超时
axios.defaults.timeout = 10000
// 请求头
// axios.defaults.headers = {}

// 每个请求单独设置
// 模拟get请求并请求参数
// axios
//   .get('/get', {
//     params: {
//       name: 'Kylin',
//       age: 21
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => console.log(res.data))

// // 模拟post请求并请求参数
// axios
//   .post('/post', {
//     data: {
//       name: 'Kylin',
//       age: 21
//     }
//   })
//   .then((res) => console.log(res.data))

// axios.all([]) 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'Kylin', age: 21 } }),
    axios.post('/post', { data: { name: 'Kylin', age: 21 } })
  ])
  .then((res) => console.log(res))

// 拦截器

// 拦截请求
// fn1：请求发送成功会执行的函数
// fn2：请求发送失败会执行的函数
// axios.interceptors.request.use(fn1, fn2)
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    return config
  },
  (err) => {
    return err
  }
)

// 拦截响应
// fn1：数据响应成功会执行的函数（服务器正常返回数据）
// fn2：数据响应失败会执行的函数
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return err
  }
)
