import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGameData } from '../../redux/game/gameSelector';

import QuestionComponent from './QuestionComponent';

const QuestionListComponent = ({ gameData }) => {
  const getScore = () => {
    console.log('Scoire');
  };

  const handleAnswerClick = (id, type) => {
    console.log(id, type);
  };

  return gameData ? (
    <div className="container">
      <div>
        {gameData.results.map(ques => (
          <QuestionComponent
            key={ques.correct_answer.replace(' ', '')}
            handleAnswerClick={handleAnswerClick}
            ques={ques}
          />
        ))}
        <button onClick={getScore}>Get Score</button>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  gameData: selectGameData
});

export default connect(mapStateToProps)(QuestionListComponent);
