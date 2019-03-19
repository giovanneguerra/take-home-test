import _ from "lodash";
import { FETCH_CAPTURES } from "../actions/types";
import moment from "moment";

const toMoment = capture => {
  return Object.assign({}, capture, {
    timestamp: moment(capture.timestamp),
    captured: moment(capture.captured)
  });
};

export default (state = {}, action) => {
  if (action.type === FETCH_CAPTURES) {
    let payload = _.chain(action.payload);
    return payload.map(toMoment).mapKeys("id").value();
  } else {
    return state;
  }
};
