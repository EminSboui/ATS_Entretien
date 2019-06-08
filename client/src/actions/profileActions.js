import axios from 'axios';
import { GET_PROFILES, ADD_PROFILE,PROFILES_LOADING } from './types';

export const getProfiles = () => dispatch => {
  dispatch(setProfilesLoading());
  axios
    .get('/api/ats/profiles')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
};


export const addProfile = (profile) => dispatch => {
  axios
    .post('/api/ats', profile)
    .then(res => dispatch({
      type: ADD_PROFILE,
      payload: res.data
    }))
    alert(profile)
};

export const setProfilesLoading = (profile) => {
  return {
    type: PROFILES_LOADING
  };
};