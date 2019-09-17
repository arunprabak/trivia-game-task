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
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Modal title</p>
          <button
            class="delete"
            aria-label="close"
            onClick={() => closeModal()}
          />
        </header>
        <section class="modal-card-body">
          <div className="tags has-addons">
            <h3 className="tag is-size-4">Correct</h3>
            <h3 className="tag is-size-4 is-primary">{scoreBoard.correct}</h3>
          </div>
          <div className="tags has-addons">
            <h3 className="tag is-size-4">Wrong</h3>
            <h3 className="tag is-size-4 is-danger">{scoreBoard.wrong}</h3>
          </div>
        </section>
      </div>
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
