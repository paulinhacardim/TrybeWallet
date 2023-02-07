// Coloque aqui suas actions
import fetchApi from '../../services/fetchApi';

export const USER_FORM = 'USER_FORM';
export const USER_CURRENCIES = 'USER_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export const REPLACE_ELEMENT = 'REPLACE_ELEMENT';

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
// requisito 8 - deletar uma despesa da tabela
export const removeElement = (id) => ({
  type: REMOVE_ELEMENT,
  payload: id,
});

export const editElement = (payload) => ({
  type: EDIT_ELEMENT,
  payload,
});

export const expenseElement = (payload) => ({
  type: REPLACE_ELEMENT,
  payload,
});

export const actionRequest = () => async (dispatch) => {
  const moedasRequest = await fetchApi();
  // console.log(moedasRequest);
  delete moedasRequest.USDT;
  dispatch(userCurrencies(Object.keys(moedasRequest)));
};
