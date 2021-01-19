import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as constants from '../constants/UserConstants';
import { API_URL } from '@env';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${API_URL}/api/users/login`, { email, password }, config);

    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: data });

    await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    console.log('stored to local', data);
  } catch (error) {
    console.log(error.message);
    dispatch({ type: constants.USER_LOGIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const logout = () => async (dispatch) => {
  await AsyncStorage.removeItem('userInfo');
  dispatch({ type: constants.USER_LOGOUT });
  dispatch({ type: constants.USER_DETAILS_RESET });
};

export const register = (fullName, email, password) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${API_URL}/api/users`, { fullName, email, password }, config);

    dispatch({ type: constants.USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: data });

    await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    console.log('register success');
  } catch (error) {
    console.log('error in register');
    dispatch({ type: constants.USER_REGISTER_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_LIST_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/api/users`, config);

    dispatch({ type: constants.USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.USER_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_DETAILS_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/api/users/${id}`, config);

    dispatch({ type: constants.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.USER_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_DELETE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${API_URL}/api/users/${id}`, config);

    dispatch({ type: constants.USER_DELETE_SUCCESS });
  } catch (error) {
    dispatch({ type: constants.USER_DELETE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const updateUser = (id, user) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_UPDATE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${API_URL}/api/users/${id}`, user, config);

    dispatch({ type: constants.USER_UPDATE_SUCCESS });

    dispatch({ type: constants.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.USER_UPDATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};