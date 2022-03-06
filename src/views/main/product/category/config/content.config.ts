export const contentTableConfig = {
  title: '分类列表',
  propList: [
    { prop: 'name', label: '商品分类', minWidth: '120' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],

  // 是否显示序号
  showIndexColumn: true,
  // 是否显示选中框
  showSelectColum: true
}
