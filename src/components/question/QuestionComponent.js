import React from 'react';

const QuestionComponent = ({ ques }) => {
  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers
  } = ques;
  const answsers = [correct_answer, ...incorrect_answers].sort();

  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-danger">{ques.question}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <div class="control">
              {
                answsers.map(q=>(
                <label className="radio">
                  <input type="radio" name="answer" />
                  {q}
                </label>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
