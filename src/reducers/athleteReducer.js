import _ from "lodash";
import { FETCH_ATHLETES } from "../actions/types";

export default (state = [], action) => {
  if (action.type === FETCH_ATHLETES) {
    return action.payload;
  } else {
    return state;
  }
};
