export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '120' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单图标', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],

  // 是否显示序号
  showIndexColumn: false,
  // 是否显示选中框
  showSelectColum: false,

  // 是否展开
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },

  // 不展示footer
  showFooter: false
}
