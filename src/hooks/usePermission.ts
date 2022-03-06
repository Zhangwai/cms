import { useStore } from '@/store'

// 哪个页面、权限名称
export function usePermission(pageName: string, permissionName: string) {
  const store = useStore()
  const permissions = store.state.loginModule.permissions

  // 要验证的权限
  const verifyPermission = `system:${pageName}:${permissionName}`

  // 判断传入的pageName是否在permission中  !!转为布尔值
  // name = 'Kylin' !name -> false !!name -> true
  return !!permissions.find((item) => item === verifyPermission)
  // return Boolean(permissions.find((item) => item === verifyPermission))
}
