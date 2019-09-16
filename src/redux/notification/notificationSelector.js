import { createSelector } from 'reselect';

export const selectNotification = state => state.notification;

export const selectNotificationData = createSelector(
  [selectNotification],
  notification => notification.notificationData
);
