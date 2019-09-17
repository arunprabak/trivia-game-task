import { LoadingTypes } from './loadingTypes';


export const openPageLoading = () => ({ type: LoadingTypes.OPEN_PAGE_LOADING });

export const closePageLoading = () => ({
  type: LoadingTypes.CLOSE_PAGE_LOADING
});
