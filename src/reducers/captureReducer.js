import _ from "lodash";
import { FETCH_CAPTURES } from "../actions/types";

export default (state = {}, action) => {
  if (action.type === FETCH_CAPTURES) {
    return { ...state, ..._.mapKeys(action.payload, "id") };
  } else {
    return state;
  }
};
