<template>
  <div class="dashboard">
    <!-- 10px的间距 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <lx-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount" />
        </lx-card>
      </el-col>
      <el-col :span="10">
        <lx-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale" />
        </lx-card>
      </el-col>
      <el-col :span="7">
        <lx-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount" />
        </lx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <lx-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale" />
        </lx-card>
      </el-col>
      <el-col :span="12">
        <lx-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </lx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import LxCard from '@/base-ui/card'

import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    LxCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    // 发起网络请求数据
    store.dispatch('dashboardModule/getDashboardDataAction')

    // 获取数据
    // 饼图及玫瑰图
    const categoryGoodsCount = computed(() => {
      // map映射
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    // 折线图
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })

    // 柱状图
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    // 地图
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
