import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      // <div>Header</div>
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          { expenses
            .reduce((sum, { value, currency, exchangeRates }) => {
              sum += value * exchangeRates[currency].ask;
              return sum;
            }, 0).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Header);
