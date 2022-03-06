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
      label: '菜单名称',
      placeholder: '请输入菜单名称'
    },
    {
      field: 'type',
      type: 'input',
      label: '菜单类型',
      placeholder: '请输入菜单类型'
    },
    {
      field: 'permission',
      type: 'input',
      label: '按钮权限',
      placeholder: '请输入按钮权限'
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
