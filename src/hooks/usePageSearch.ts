// 重置、搜索的hooks
import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleSearchClick = (searchInfo: any) => {
    pageContentRef.value?.getPageData(searchInfo)
  }

  return [pageContentRef, handleResetClick, handleSearchClick]
}
