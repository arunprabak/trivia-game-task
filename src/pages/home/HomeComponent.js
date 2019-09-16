import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getGameData } from '../../redux/game/gameAction';
import QuestionComponent from '../../components/question/QuestionComponent'

const HomeComponent = ({getGameData}) => {

  useEffect(()=>{
    getGameData()
  }, [getGameData]) 

  return (
    <div>
        <QuestionComponent />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getGameData:()=> dispatch(getGameData())
})

export default connect(null, mapDispatchToProps)(HomeComponent);
