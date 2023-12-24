import { createSelector } from 'reselect'

const selectStarred = (state) => state.starred

export const selectStarredList = createSelector([selectStarred], (star) => star.starredUpdate)

export const changeStarColor = createSelector([selectStarred], (star) => star.starColor)
