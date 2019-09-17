import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGameScore,
  selectModalStatus
} from '../../redux/game/gameSelector';
import { closeModal, resetData } from '../../redux/game/gameAction';

const ScoreboardComponent = ({
  scoreBoard,
  modalStatus,
  closeModal,
  resetData
}) => {
  return (
    <div className={`modal ${modalStatus ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered">Score Board</p>
        </header>
        <section className="modal-card-body">
          <div className="tags has-addons">
            <h3 className="tag is-size-4">Correct</h3>
            <h3 className="tag is-size-4 is-primary">{scoreBoard.correct}</h3>
          </div>
          <div className="tags has-addons">
            <h3 className="tag is-size-4">Wrong</h3>
            <h3 className="tag is-size-4 is-danger">{scoreBoard.wrong}</h3>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-warning" onClick={() => closeModal()}>
            Cancel
          </button>
          <button className="button is-primary" onClick={() => resetData()}>
            Play New Game
          </button>
        </footer>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  closeModal: score => dispatch(closeModal(score)),
  resetData: () => dispatch(resetData())
});

const mapStateToProps = createStructuredSelector({
  scoreBoard: selectGameScore,
  modalStatus: selectModalStatus
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreboardComponent);
