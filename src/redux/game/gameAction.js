import { GameTypes } from './gameTypes';
import { getData } from '../../web/web'

export const getGameData = () => {
    return async dispatch => {
        const data = await getData()
        dispatch({
            type:GameTypes.GET_GAME_DATA,
            payload: data
        });
    }; 
}
