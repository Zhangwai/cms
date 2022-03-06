// 配置文件
import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '新建商品分类',
  formItems: [
    {
      field: 'categoryId',
      type: 'input',
      label: '商品分类',
      placeholder: '请输入商品分类'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
