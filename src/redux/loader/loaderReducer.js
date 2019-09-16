import { LoaderTypes } from './loaderTypes';

const INITIAL_STATE = {
  pageLoading: false,
};

export const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderTypes.OPEN_PAGE_LOADING:
      return { ...state, pageLoading: true };
    case LoaderTypes.CLOSE_PAGE_LOADING:
      return { ...state, pageLoading: false };
    default:
      return state;
  }
};
