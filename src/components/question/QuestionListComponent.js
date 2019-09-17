import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGameData, selectGameScore } from '../../redux/game/gameSelector';

import QuestionComponent from './QuestionComponent';
import { pushToArray } from '../../utils/util';
import { getScore } from '../../redux/game/gameAction';

const QuestionListComponent = ({ gameData, getScore, scoreBoard }) => {
  const score = [];

  const [boardVisible, setBoardVisible] = useState(false);

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
    }

    setBoardVisible(true);

    setTimeout(() => {
      setBoardVisible(false);
    }, 5000);
  };

  return gameData ? (
    <div className="container">
      {boardVisible ? (
        <div className="list is-hoverable">
          <a className="list-item">{scoreBoard.correct}</a>
          <a className="list-item">{scoreBoard.wrong}</a>
        </div>
      ) : null}
      <div>
        {gameData.results.map((ques, i) => (
          <QuestionComponent
            key={i}
            handleAnswerClick={handleAnswerClick}
            ques={ques}
          />
        ))}
        <button
          className="button"
          onClick={handleScoreClick}
          disabled={score.length}
        >
          Get Score
        </button>
      </div>
    </div>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  getScore: score => dispatch(getScore(score))
});

const mapStateToProps = createStructuredSelector({
  gameData: selectGameData,
  scoreBoard: selectGameScore
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionListComponent);
