import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getGameData } from '../../redux/game/gameAction';
import QuestionListComponent from '../../components/question/QuestionListComponent';
import Navbar from '../../components/navbar/NavbarComponent';
import Loader from '../../components/progressbar/ProgressComponent';

const HomeComponent = ({ getGameData }) => {
  useEffect(() => {
    getGameData();
  }, [getGameData]);

  return (
    <div>
      <Navbar resetData={() => getGameData()} />
      <Loader />
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
