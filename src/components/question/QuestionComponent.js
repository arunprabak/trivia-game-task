import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeScore } from '../../redux/game/gameAction';

const QuestionComponent = ({ ques, changeScore, handleAnswerClick }) => {
  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers
  } = ques;
  const answsers = [correct_answer, ...incorrect_answers].sort();

  const handleClick = q => {
    const id = correct_answer.replace(' ', '');
    if (correct_answer === q) {
      handleAnswerClick(id, true);
    } else {
      handleAnswerClick(id, false);
    }
  };

  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-danger">{question}</p>
        </header>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Category</span>
              <span className="tag is-primary">{category}</span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Type</span>
              <span className="tag is-warning">{type}</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Difficulty</span>
              <span className="tag is-danger">{difficulty}</span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            {answsers.map(q => (
              <div className="field is-grouped is-grouped-multiline">
                <div className="control" key={q}>
                  <button className="tag button" onClick={() => handleClick(q)}>
                    {q}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  changeScore: bool => dispatch(changeScore(bool))
});

export default connect(
  null,
  mapDispatchToProps
)(QuestionComponent);
