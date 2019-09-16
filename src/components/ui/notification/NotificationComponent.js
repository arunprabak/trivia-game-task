import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeNotification } from '../../../redux/notification/notificationAction';
import { selectNotificationData } from '../../../redux/notification/notificationSelector';

const Notification = ({
  notificationData: { message, color, show },
  closeNotification
}) => {
  return show ? (
    <div className={`notification box-4 notification-position ${color}`}>
      <button className="delete" onClick={closeNotification}></button>
      {message}
    </div>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  closeNotification: () => dispatch(closeNotification())
});

const mapStateToProps = createStructuredSelector({
  notificationData: selectNotificationData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
