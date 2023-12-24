import messagesArray from '../../data'
let pageLimit = 20

export const changePageNumber = (pagenumber) => {
  const indexOfLastPost = pagenumber * pageLimit
  const indexOfFirstPost = indexOfLastPost - pageLimit

  let currentMessages = null

  currentMessages = messagesArray.slice(indexOfFirstPost, indexOfLastPost)

  return currentMessages
}
