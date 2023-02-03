// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { USER_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
