import { LoadingTypes } from './loadingTypes';

const INITIAL_STATE = {
  pageLoading: false
};

export const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoadingTypes.OPEN_PAGE_LOADING:
      return { ...state, pageLoading: true };
    case LoadingTypes.CLOSE_PAGE_LOADING:
      return { ...state, pageLoading: false };
    default:
      return state;
  }
};
