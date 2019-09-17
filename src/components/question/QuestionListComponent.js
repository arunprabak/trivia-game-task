import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGameData } from '../../redux/game/gameSelector';

import QuestionComponent from './QuestionComponent';
import { pushToArray } from '../../utils/util';
import { getScore, openModal } from '../../redux/game/gameAction';

const QuestionListComponent = ({ gameData, getScore, openModal }) => {
  const score = [];
  const handleAnswerClick = updateAns => {
    if (score.length > 0) {
      pushToArray(score, updateAns);
    } else {
      score.push(updateAns);
    }
  };

  const handleScoreClick = () => {
    if (score.length) {
      getScore(score);
      openModal();
    }
  };

  return gameData.length>0 ? (
    <div className="container">
      <div>
        <div className="has-text-centered">
        {gameData.map((ques, i) => (
          <QuestionComponent
            key={i}
            handleAnswerClick={handleAnswerClick}
            ques={ques}
          />
        ))}
          <button
            className="button is-primary"
            onClick={handleScoreClick}
            disabled={score.length}
          >
            Get Score
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  getScore: score => dispatch(getScore(score)),
  openModal: () => dispatch(openModal())
});

const mapStateToProps = createStructuredSelector({
  gameData: selectGameData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionListComponent);
