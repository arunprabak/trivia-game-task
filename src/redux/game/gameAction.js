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
    const total = score.reduce((prev, next) => prev + next.status, 0);
    dispatch({
      type: GameTypes.CHANGE_SCORE,
      payload: {
        correct: total,
        wrong: total - 10
      }
    });
  };
};

export const openModal = () => {
  return dispatch => {
    dispatch({
      type: GameTypes.OPEN_MODAL
    });
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch({
      type: GameTypes.CLOSE_MODAL
    });
  };
};
