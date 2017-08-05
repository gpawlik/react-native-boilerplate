import { actionTypes as at } from './constants';

export const fetch = () => {
  return {
    type: at.USERS_SAMPLE_FETCH
  };
};

export const fetchSuccess = result => {
  return {
    type: at.USERS_SAMPLE_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchError = error => {
  return {
    type: at.USERS_SAMPLE_FETCH_ERROR,
    payload: error
  };
};
