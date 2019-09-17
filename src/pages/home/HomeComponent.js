import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getGameData } from '../../redux/game/gameAction';
import QuestionListComponent from '../../components/question/QuestionListComponent';

const HomeComponent = ({ getGameData }) => {
  useEffect(() => {
    getGameData();
  }, [getGameData]);

  return (
    <div>
      <QuestionListComponent />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getGameData: () => dispatch(getGameData())
});

export default connect(
  null,
  mapDispatchToProps
)(HomeComponent);
