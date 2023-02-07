// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { USER_CURRENCIES,
  ADD_EXPENSES,
  REMOVE_ELEMENT,
  EDIT_ELEMENT,
  REPLACE_ELEMENT } from '../actions';

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

  case REMOVE_ELEMENT:
    return {
      ...state,
      expenses: action.payload,
    };

  case EDIT_ELEMENT:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload.id,
      expenseToEdit: action.payload };

  case REPLACE_ELEMENT:
    return {
      ...state,
      expenses: state.expenses.map((element) => {
        if (element.id === action.payload.id) {
          return {
            ...element, ...action.payload,
          };
        }
        return element;
      }),
      editor: false,
    };

  default:
    return state;
  }
};

export default wallet;
