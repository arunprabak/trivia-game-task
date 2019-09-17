import React, { useState } from 'react';

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

  const { selected, setSelected } = useState(false);

  const handleClick = q => {
    if (correct_answer === q) {
      console.log(q);
    }
  };

  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-danger">{question}</p>
        </header>
        <div class="field is-grouped is-grouped-multiline">
          <div className="control">
            <div class="tags has-addons">
              <span class="tag">Category</span>
              <span class="tag is-primary">{category}</span>
            </div>
          </div>
          <div className="control">
            <div class="tags has-addons">
              <span class="tag">Type</span>
              <span class="tag is-warning">{type}</span>
            </div>
          </div>

          <div className="control">
            <div class="tags has-addons">
              <span class="tag">Difficulty</span>
              <span class="tag is-danger">{difficulty}</span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            {answsers.map(q => (
              <div class="field is-grouped is-grouped-multiline">
                <div className="control" key={q}>
                  <button
                    class={`tag button ${selected ? 'is-primary' : ''}`}
                    onClick={() => handleClick(q)}
                  >
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

export default QuestionComponent;
