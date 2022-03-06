<template>
  <div class="pie-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

import { IDataType } from '../types'

// 泛型表示接收一些什么样的属性
const props = defineProps<{
  pieData: IDataType[]
}>()

// computed会收集props.pieData的依赖，一旦props传入的数据改变，
// options就会更新，template就会重新渲染
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    //方向 水平
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
