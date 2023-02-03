import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';
import { dadosLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    senha: '',
    email: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validacaoEmail);
  };

  // A expressão [^0-9] é usada para localizar qualquer caractere que NÃO seja um dígito.
  validacaoEmail = () => {
    const { senha, email } = this.state;
    const caracteres = 6;
    // const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/;
    const formatoEmail = (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/).test(email);
    if (formatoEmail && senha.length >= caracteres) {
      this.setState({
        isDisabled: false,
      });
      return;
    }
    this.setState({
      isDisabled: true,
    });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(dadosLogin(email));
    history.push('/carteira');
  };

  render() {
    // return <div>Login</div>;

    const { senha, email, isDisabled } = this.state;
    return (
      <div>
        <label htmlFor="inputEmail">
          <p>Email</p>
          <input
            data-testid="email-input"
            id="inputEmail"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="inputPassword">
          <p>Senha</p>
          <input
            data-testid="password-input"
            id="inputPassword"
            type="password"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>

        {/* <Link to="/carteira"> */}
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => this.handleClick() }
        >

          Entrar

        </button>

        {/* </Link> */}

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
