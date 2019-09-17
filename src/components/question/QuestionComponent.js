import React, { useState } from 'react';

const QuestionComponent = ({ ques, handleAnswerClick }) => {
  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers
  } = ques;
  const [answsers, setAnswers] = useState(
    [correct_answer, ...incorrect_answers]
      .sort()
      .map(el => ({ name: el, isSelected: false }))
  );

  const handleClick = q => {
    const ans = [];
    answsers.forEach(el => {
      el.isSelected = el.name === q ? true : false;
      ans.push(el);
    });
    setAnswers(ans);
    const id = correct_answer.replace(' ', '');
    if (correct_answer === q) {
      handleAnswerClick({ id, status: 1 });
    } else {
      handleAnswerClick({ id, status: 0 });
    }
  };

  return (
    <div className="column">
      <div className="card box-4">
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
            {answsers.map((q, i) => (
              <div
                key={q.name + i}
                className="field is-grouped is-grouped-multiline"
              >
                <div className="control">
                  <button
                    className={`tag button ${q.isSelected ? 'is-primary' : ''}`}
                    onClick={() => handleClick(q.name)}
                  >
                    {q.name}
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

export default QuestionComponent;
