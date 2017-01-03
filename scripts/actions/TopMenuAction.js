import * as types from '../constants/ActionTypes';

const initialTopMenu = { selected:'webchat' };

export default function changeTopMenu(topMenuName) {
  return dispatch => {
    return dispatch(getTopMenuAction(topMenuName));
  };
}

export function getTopMenuAction(topMenuName) {
  return {
    type: types.CHANGE_TOP_MENU,
    topMenuName,
  };
}

