import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGameData } from '../../redux/game/gameSelector';

import QuestionComponent from './QuestionComponent';

const QuestionListComponent = ({ gameData }) => {
  return gameData ? (
    <div className="container">
      <div className="columnsas">
        {gameData.results.map(ques => (
          <QuestionComponent
            key={ques.correct_answer.replace(' ', '')}
            ques={ques}
          />
        ))}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  gameData: selectGameData
});

export default connect(mapStateToProps)(QuestionListComponent);
