import { LoaderTypes } from './loaderTypes';


export const openPageLoading = () => ({ type: LoaderTypes.OPEN_PAGE_LOADING });

export const closePageLoading = () => ({
  type: LoaderTypes.CLOSE_PAGE_LOADING
});
