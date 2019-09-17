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

export const getScore = score => {
  return async dispatch => {
    const total = score.reduce((prev, next) => prev.status + next.status);

    dispatch({
      type: GameTypes.CHANGE_SCORE,
      payload: {
        correct: total,
        wrong: 10 - total
      }
    });
  };
};
