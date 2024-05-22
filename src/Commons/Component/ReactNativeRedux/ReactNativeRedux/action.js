import {ADD_TO_CARD} from './constants';
export function addToCard(item) {
  return {
    type: ADD_TO_CARD,
    data: item,
  };
}
