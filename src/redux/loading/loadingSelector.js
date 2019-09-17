import { createSelector } from 'reselect';

export const selectLoading = state => state.loading;

export const selectPageLoading = createSelector(
  [selectLoading],
  loading => loading.pageLoading
);
