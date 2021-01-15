import axios from 'axios';
import * as constants from '../constants/productConstants';
import { API_URL } from '@env';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`${API_URL}/api/products`);

    dispatch({ type: constants.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`${API_URL}/api/products`, product, config);

    dispatch({ type: constants.PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.PRODUCT_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_UPDATE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`${API_URL}/api/products/${product.id}`, product, config);

    dispatch({ type: constants.PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.PRODUCT_UPDATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.PRODUCT_DELETE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${API_URL}/api/products/${id}`, config);

    dispatch({ type: constants.PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({ type: constants.PRODUCT_DELETE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${API_URL}/api/products/${id}`);

    dispatch({ type: constants.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: constants.PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};