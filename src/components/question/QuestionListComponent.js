import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGameData } from '../../redux/game/gameSelector';

import QuestionComponent from './QuestionComponent';

function pushToArray ( arr, obj ) {
  var existingIds = arr.map((obj) => obj.id);

    if (! existingIds.includes(obj.id)) {
      arr.push(obj);
    } else {
      arr.forEach((element, index) => {
        if (element.id === obj.id) {
          arr[index] = obj;
        };
      });
    };
};

const QuestionListComponent = ({ gameData }) => {
  const score = [];
  const getScore = () => {
    console.log('Scoire');
  };

  const handleAnswerClick = updateAns => {
    if(score.length > 0) {pushToArray(score, updateAns)} else {
      score.push(updateAns)
    }
  };

  return gameData ? (
    <div className="container">
      <div>
        {gameData.results.map((ques, i) => (
          <QuestionComponent
            key={i}
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
