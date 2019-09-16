import { NotificationTypes } from './notificationTypes';

const INITIAL_STATE = {
  notificationData: {
    message: '',
    color: 'is-primary',
    show: false
  }
};

export const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationTypes.OPEN_NOTIFICATION:
      return {
        ...state,
        notificationData: action.payload
      };
    case NotificationTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        notificationData: action.payload
      };
    default:
      return state;
  }
};
