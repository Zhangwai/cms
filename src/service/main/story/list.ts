import lxRequest from '../../index'

export function getStoryList() {
  return lxRequest.post({
    url: '/story/list'
  })
}
