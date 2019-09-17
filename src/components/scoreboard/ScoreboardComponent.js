import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGameScore,
  selectModalStatus
} from '../../redux/game/gameSelector';
import { closeModal } from '../../redux/game/gameAction';

const ScoreboardComponent = ({ scoreBoard, modalStatus, closeModal }) => {
  return (
    <div className={`modal ${modalStatus ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="list is-primary is-hoverable">
          <li className="list-item">{scoreBoard.correct}</li>
          <li className="list-item">{scoreBoard.wrong}</li>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeModal()}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  closeModal: score => dispatch(closeModal(score))
});

const mapStateToProps = createStructuredSelector({
  scoreBoard: selectGameScore,
  modalStatus: selectModalStatus
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreboardComponent);
