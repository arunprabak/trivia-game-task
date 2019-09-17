import { GameTypes } from './gameTypes';
import { getData } from '../../web/web';

export const getGameData = () => {
  return async dispatch => {
    const data = await getData();
    dispatch({
      type: GameTypes.GET_GAME_DATA,
      payload: data
    });
  };
};

export const changeScore = type => {
  return async dispatch => {
    const score = {
      correct: 0,
      wrong: 0
    };
    if (type) {
      score.correct += 1;
    } else {
      score.wrong += 1;
    }

    console.log(score);
    dispatch({
      type: GameTypes.CHANGE_SCORE,
      payload: score
    });
  };
};
