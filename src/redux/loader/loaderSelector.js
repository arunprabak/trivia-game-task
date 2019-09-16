import { createSelector } from 'reselect';

export const selectLoader = state => state.loader;

export const selectPageLoading = createSelector(
  [selectLoader],
  loader => loader.pageLoading
);
