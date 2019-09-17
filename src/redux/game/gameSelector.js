import { createSelector } from 'reselect';

export const selectGame = state => state.game;

export const selectGameData = createSelector(
  [selectGame],
  game => game.gameData
);

export const selectGameScore = createSelector(
  [selectGame],
  game => game.score
);
