import api from '../apis/TakeHomeAPI';
import { FETCH_ATHLETES, FETCH_READERS, FETCH_CAPTURES } from './types';

export const fetchAthletes = () => async dispatch => {
  const response = await api.get("/athletes");

  dispatch({ type: FETCH_ATHLETES, payload: response.data });
};

export const fetchReaders = () => async dispatch => {
  const response = await api.get("/readers");

  dispatch({ type: FETCH_READERS, payload: response.data });
};

export const fetchCaptures = () => async dispatch => {
  const response = await api.get("/captures");

  dispatch({ type: FETCH_CAPTURES, payload: response.data });
};
