// 配置文件
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  // itemStyle: {
  //   padding: '10px 30px'
  // },
  // colLayout: {
  //   // 有默认值可不写
  //   span: 8
  // },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限名称',
      placeholder: '请输入权限名称'
    },
    {
      field: 'createTime',
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
