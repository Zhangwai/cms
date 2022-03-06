// 配置文件
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  // itemStyle: {
  //   padding: '10px 30px'
  // },
  // colLayout: {
  //   // 有默认值
  //   span: 8
  // },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '分类名称',
      placeholder: '请输入分类名称'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        // 时间选择范围
        type: 'daterange'
      }
    }
  ]
}
