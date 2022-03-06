// 注册属性

import type { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  // 添加全局的属性 过滤 时间格式化
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
