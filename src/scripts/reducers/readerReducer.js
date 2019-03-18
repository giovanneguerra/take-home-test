import { FETCH_READERS } from "../actions/types";

export default (state = [], action) => {
  if (action.type === FETCH_READERS) {
    return action.payload;
  } else {
    return state;
  }
};
