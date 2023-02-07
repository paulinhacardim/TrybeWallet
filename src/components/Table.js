import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeElement, editElement } from '../redux/actions';

class Table extends Component {
  // requisito 8
  deleteTable = (id) => {
    const { dispatch, expenses } = this.props;
    const expenseFilter = expenses.filter((expense) => id !== expense.id);
    dispatch(removeElement(expenseFilter));
  };

  editTable = (expense) => {
    const { dispatch } = this.props;
    dispatch(editElement(expense));
  };

  render() {
    const { expenses } = this.props;
    return (
      <>
        <div>Table</div>
        <div>
          <table>
            <thead>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </thead>

            <tbody>
              {expenses
                .map((expense) => (
                  <tr key={ expense.id }>

                    <td>{expense.tag}</td>
                    <td>{expense.description}</td>
                    <td>{expense.method}</td>
                    <td>{Number(expense.value).toFixed(2)}</td>
                    <td>{expense.exchangeRates[expense.currency].name}</td>
                    <td>
                      {Number(expense.exchangeRates[expense.currency].ask)
                        .toFixed(2)}

                    </td>
                    <td>Real</td>
                    <td>
                      {(Number(expense.value) * Number(expense
                        .exchangeRates[expense.currency].ask))
                        .toFixed(2)}

                    </td>

                    <td>
                      <button
                        type="button"
                        data-testid="edit-btn"
                        onClick={ () => this.editTable(expense) }
                      >
                        Editar despesa
                      </button>

                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => this.deleteTable(expense.id) }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>

                ))}

            </tbody>
          </table>
        </div>
      </>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,

});

export default connect(mapStateToProps)(Table);

// toFixed arredonda números de acordo com a quantidade
// de dígitos que determino. Como no requisito feito(2)

// botão para deletar despesas - requisito 8
