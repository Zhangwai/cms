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
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'enable',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '在售', value: 1 },
        { title: '售空', value: 0 }
      ]
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
