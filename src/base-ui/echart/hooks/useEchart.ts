import * as echarts from 'echarts'

// 注册地图
import ChinaMapData from '../data/china.json'

echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  // 可传三个参数(dom, theme, 渲染器)
  // (echartDivRef.value!, 'light', { renderer: 'svg/canvas' })
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    // 使用刚指定的配置项和数据显示图表
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  // 当浏览器宽度变化时监听，响应式变化echarts
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
