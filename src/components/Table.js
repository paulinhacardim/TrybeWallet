import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeElement } from '../redux/actions';

class Table extends Component {
  // requisito 8
  deleteTable = (id) => {
    const { dispatch } = this.props;
    dispatch(removeElement(id));
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
                .map(({ value, description, currency, method, id, exchangeRates, tag,
                }) => (
                  <tr key={ id }>

                    <td>{tag}</td>
                    <td>{description}</td>
                    <td>{method}</td>
                    <td>{Number(value).toFixed(2)}</td>
                    <td>{exchangeRates[currency].name}</td>
                    <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>Real</td>
                    <td>
                      {(Number(value) * Number(exchangeRates[currency].ask))
                        .toFixed(2)}

                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => this.deleteTable(id) }
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
