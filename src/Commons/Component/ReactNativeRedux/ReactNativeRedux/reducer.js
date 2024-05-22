import {ADD_TO_CARD} from './constants';

const InitialState = [];

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.data];
    default:
      return state;
  }
};
