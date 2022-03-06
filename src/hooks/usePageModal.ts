import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(
  newCallBack?: CallbackFn,
  editCallBack?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    // 新建情况下为空对象
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // 当前面的有值时，才会调用后面的
    newCallBack && newCallBack()
  }
  const handleEditData = (item: any) => {
    // 编辑时，赋值回显
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCallBack && editCallBack(item)
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
