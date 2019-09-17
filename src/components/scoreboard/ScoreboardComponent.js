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
      <div className="modal-card">
        <div className="field is-grouped has-text-centered is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Correct</span>
              <span className="tag is-primary">{scoreBoard.correct}</span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Wrong</span>
              <span className="tag is-danger">{scoreBoard.wrong}</span>
            </div>
          </div>
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
