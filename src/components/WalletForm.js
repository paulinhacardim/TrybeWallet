import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../services/fetchApi';
import { actionRequest, addExpenses, expenseElement } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    id: 0,
    exchangeRates: {},
    tag: 'Alimentação',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(actionRequest());
  }

  componentDidUpdate() {
    const { editor, expenseToEdit } = this.props;
    const { id } = this.state;

    if (editor && id !== expenseToEdit.id) {
      this.setState({
        value: expenseToEdit.value,
        description: expenseToEdit.description,
        currency: expenseToEdit.currency,
        method: expenseToEdit.method,
        id: expenseToEdit.id,
        exchangeRates: expenseToEdit.exchangeRates,
        tag: expenseToEdit.tag,
      });
    }
  }

  handleEdit = () => {
    const { dispatch } = this.props;
    dispatch(expenseElement(this.state));
    this.setState({
      value: '',
      description: '',
    });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    const apiData = await fetchApi();
    delete apiData.USDT;
    this.setState({
      exchangeRates: apiData,
    }, () => {
      dispatch(addExpenses(this.state));
      this.setState({
        value: '',
        description: '',
        id: id + 1,
      });
    });
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description } = this.state;

    return (
      <>
        <div>WalletForm</div>
        <form>
          <label htmlFor="inputValue">
            <input
              className="inputValue"
              data-testid="value-input"
              type="text"
              placeholder="Valor da Despesa"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <input
            data-testid="description-input"
            type="text"
            placeholder="Descrição da despesa"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />

          <select
            data-testid="currency-input"
            name="currency"
            // id= ""
            onChange={ this.handleChange }
          >

            {currencies.map((moedas, index) => (
              <option
                key={ index }
                value={ moedas }
              >
                {moedas}
              </option>

            ))}
          </select>

          <select
            data-testid="method-input"
            name="method"
            id=""
            onChange={ this.handleChange }
          >

            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>

          <select
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
          >

            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>

          </select>

          <button
            type="button"
            name="button"
            onClick={ editor === true ? this.handleEdit : this.handleClick }
          >
            {editor === true ? 'Editar despesas' : 'Adicionar despesas'}
          </button>
        </form>

      </>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
  editor: PropTypes.bool,
  idToEdit: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ wallet: {
  currencies, expenses, editor, idToEdit, expenseToEdit } }) => ({
  currencies,
  expenses,
  editor,
  idToEdit,
  expenseToEdit,
});

export default connect(mapStateToProps)(WalletForm);

// instanceOf compara a instância com o tipo.
// verifica se um objeto é uma instância de uma classe específica
// ou uma interface

// Object seleciona apenas um elemento. Não acessa toda chave

// currencies: PropTypes.instanceOf(Object).isRequired
