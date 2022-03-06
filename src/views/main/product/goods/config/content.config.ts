export const contentTableConfig = {
  title: '商品列表',
  newBtnTitle: '新建商品',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价', minWidth: '60', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '60', slotName: 'newPrice' },
    // { prop: 'desc', label: '描述', minWidth: '60' },
    { prop: 'status', label: '状态', minWidth: '60', slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '80', slotName: 'image' },
    {
      prop: 'inventoryCount',
      label: '库存数量',
      minWidth: '80',
      slotName: 'inventoryCount'
    },
    {
      prop: 'saleCount',
      label: '销售数量',
      minWidth: '80',
      slotName: 'saleCount'
    },
    {
      prop: 'favorCount',
      label: '收藏数量',
      minWidth: '80',
      slotName: 'favorCount'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '60',
      slotName: 'address'
    },
    // {
    //   prop: 'categoryId',
    //   label: '分类号',
    //   minWidth: '60',
    //   slotName: 'categoryId'
    // },
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
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],

  // 是否显示序号
  showIndexColumn: true,
  // 是否显示选中框
  showSelectColum: true
}
