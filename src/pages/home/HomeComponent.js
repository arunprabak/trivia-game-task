import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getGameData, resetData } from '../../redux/game/gameAction';
import QuestionListComponent from '../../components/question/QuestionListComponent';
import Navbar from '../../components/navbar/NavbarComponent';
import Loader from '../../components/progressbar/ProgressComponent';

const HomeComponent = ({ getGameData, resetData }) => {
  useEffect(() => {
    getGameData();
  }, [getGameData]);

  return (
    <div>
      <Navbar resetData={() => resetData()} />
      <Loader />
      <QuestionListComponent />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getGameData: () => dispatch(getGameData()),
  resetData: () => dispatch(resetData())
});

export default connect(
  null,
  mapDispatchToProps
)(HomeComponent);
