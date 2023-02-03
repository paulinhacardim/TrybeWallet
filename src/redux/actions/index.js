// Coloque aqui suas actions
import fetchApi from '../../services/fetchApi';

export const USER_FORM = 'USER_FORM';
export const USER_CURRENCIES = 'USER_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const dadosLogin = (email) => ({
  type: USER_FORM,
  payload: email,
});

export const userCurrencies = (payload) => ({
  type: USER_CURRENCIES,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const actionRequest = () => async (dispatch) => {
  const moedasRequest = await fetchApi();
  // console.log(moedasRequest);
  delete moedasRequest.USDT;
  dispatch(userCurrencies(Object.keys(moedasRequest)));
};
