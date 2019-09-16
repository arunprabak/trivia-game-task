import { NotificationTypes } from './notificationTypes';

export const closeNotification = () => ({
  type: NotificationTypes.CLOSE_NOTIFICATION,
  payload: {
    message: '',
    color: 'is-primary',
    show: false
  }
});

export const openNotification = notificationData => {
  return dispatch => {
    dispatch({
      type: NotificationTypes.OPEN_NOTIFICATION,
      payload: notificationData
    });
    setTimeout(() => {
      dispatch(closeNotification());
    }, 3000);
  };
};
